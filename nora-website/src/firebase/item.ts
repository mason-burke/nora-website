import {
  collection,
  deleteDoc,
  doc,
  FirestoreDataConverter,
  getDocs,
  query,
  QueryDocumentSnapshot,
  setDoc,
  updateDoc,
  where,
  writeBatch
} from 'firebase/firestore';
import { db, storage } from './firebase-setup';
import {
  deleteObject,
  getDownloadURL,
  listAll,
  ref,
  uploadBytes,
  UploadResult
} from 'firebase/storage';
import { nanoid } from 'nanoid';

export type Item = {
  id: string;
  title: string;
  description: string;
  imageURLs: string[];
  active: boolean;
  order: number;
};

const itemConverter: FirestoreDataConverter<Item> = {
  toFirestore: (item: Item) => item,
  fromFirestore: (snapshot: QueryDocumentSnapshot): Item => {
    const data = snapshot.data();
    return {
      id: snapshot.id,
      title: data.title,
      description: data.description,
      active: data.active,
      order: data.order,
      imageURLs: data.imageURLs
    };
  }
};

export const getItems = async () => {
  try {
    const snapshot = await getDocs(
      query(collection(db, 'items'), where('active', '==', true)).withConverter(itemConverter)
    );

    const items = snapshot.docs.map((d) => d.data());
    sortItems(items);
    return items;
  } catch {
    return [];
  }
};

export const getItemById = (items: Item[], id: string) => {
  return items.find((item) => item.id === id) || null;
};

export const createItem = async (
  title: string,
  description: string,
  images: FileList
): Promise<void> => {
  const id = nanoid();

  // upload all of the images under id/{imageNumber}
  const urlResults = await addImages(id, images);

  // create database entry keyed by item id, containing title, desc (query for all images later)
  const item: Item = {
    id: id,
    title: title,
    order: 0,
    description: description,
    imageURLs: urlResults,
    active: true
  };
  await setDoc(doc(db, 'items', id), item);
};

export const deleteItem = async (id: string): Promise<boolean> => {
  try {
    await deleteDoc(doc(db, 'items', id));
    await deleteAllImages(id);
    return true;
  } catch {
    return false;
  }
};

//todo: determine if the delete all approach is bad
export const updateItem = async (
  item: Item,
  newFields: Partial<Item>,
  imagesToAdd: FileList
): Promise<boolean> => {
  try {
    // let existingUrls = item.imageURLs;
    let existingUrls: string[] = [];

    await deleteAllImages(item.id);

    // if (imagesToRemove.length) {
    //   await deleteImages(imagesToRemove);
    //   existingUrls = existingUrls.filter((url) => !imagesToRemove.includes(url));
    // }

    let addedUrls = [];

    if (imagesToAdd.length) {
      addedUrls = await addImages(item.title, imagesToAdd);
      existingUrls = [...existingUrls, ...addedUrls];
    }

    // Merge new fields with updated image URLs
    const fieldsToUpdate = {
      ...newFields,
      imageURLs: existingUrls
    };

    //update item
    await updateDoc(doc(db, 'items', item.id), fieldsToUpdate);
    return true;
  } catch {
    return false;
  }
};

const changeItemOrder = async (item1: Item, item2: Item): Promise<void> => {
  if (item1.id === item2.id) return;

  const batch = writeBatch(db);
  batch.update(doc(db, 'items', item1.id), { order: item2.order });
  batch.update(doc(db, 'items', item2.id), { order: item1.order });
  return await batch.commit();
};

export const sortItems = (items: Item[]): void => {
  items.sort((a, b) => a.order - b.order);
};

/* //todo: make method in ItemDetails that calls this. 
  It will prefill fields in that widget that mirror the fields in an item
*/
export const ItemDetails = async (item: Item): Promise<void> => {
  await setDoc(doc(db, 'items', item.id), item);
};

/**
 * adds images under itemId/{randomid}
 * @param itemId
 * @param images
 * @returns array of image urls
 */
const addImages = async (itemId: string, images: FileList): Promise<string[]> => {
  const uploads: Promise<UploadResult>[] = [];
  for (let i = 0; i < images.length; i++) {
    uploads.push(uploadBytes(ref(storage, `items/${itemId}/${i}`), images[i]));
  }
  const uploadResults = await Promise.all(uploads);

  const urls = uploadResults.map((r) => getDownloadURL(r.ref));
  const urlResults = await Promise.all(urls);

  return urlResults;
};

const deleteImages = async (imageURLs: string[]): Promise<boolean> => {
  try {
    const toDelete: Promise<void>[] = [];

    for (const imageURL of imageURLs) {
      toDelete.push(deleteObject(ref(storage, imageURL)));
    }
    await Promise.all(toDelete);
    console.log(toDelete);

    return true;
  } catch {
    return false;
  }
};

const deleteAllImages = async (itemId: string): Promise<boolean> => {
  try {
    const allImages = await listAll(ref(storage, itemId));
    const toDelete: Promise<void>[] = [];

    for (const image of allImages.items) {
      toDelete.push(deleteObject(image));
      console.log(toDelete);
    }
    await Promise.all(toDelete);

    return true;
  } catch {
    return false;
  }
};

export default {
  getItems,
  getItemById,
  createItem,
  deleteItem,
  changeItemOrder
};
