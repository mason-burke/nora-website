import {
  collection,
  deleteDoc,
  doc,
  DocumentData,
  FirestoreDataConverter,
  getCountFromServer,
  getDocs,
  query,
  QueryDocumentSnapshot,
  QuerySnapshot,
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

export interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  imageURLs: string[];
  active: boolean;
  order: number;
}

const itemConverter: FirestoreDataConverter<Item> = {
  toFirestore: (item: Item) => {
    return item;
  },
  fromFirestore: (snapshot: QueryDocumentSnapshot) => {
    const data = snapshot.data();
    return {
      id: snapshot.id,
      title: data.title,
      description: data.description,
      price: data.price,
      active: data.active,
      order: data.order,
      imageURLs: data.imageURLs
    } as Item;
  }
};

export const getItems = async () => {
  let snapshot: QuerySnapshot<Item, DocumentData>;
  try {
    snapshot = await getDocs(
      query(collection(db, 'items'), where('active', '==', true)).withConverter(itemConverter)
    );
  } catch {
    return [];
  }

  const items: Item[] = [];
  snapshot.forEach((doc) => {
    items.push(doc.data());
  });
  sortItems(items);
  return items;
};

export const getItemById = (items: Item[], id: string) => {
  return items.find((item) => item.id === id) || null;
};

export const getNextId = async () => {
  return (await getCountFromServer(collection(db, 'items'))).data().count + 1;
};

export const createNewItem = async (
  title: string,
  description: string,
  price: string,
  images: FileList
): Promise<void> => {
  const id = nanoid();

  // upload all of the images under id/{imageNumber}
  const urlResults = await addImages(id, images);

  // create database entry keyed by item id, containing title, desc, and price (query for all images later)
  await setDoc(doc(db, 'items', id), {
    title: title,
    description: description,
    price: price,
    imageURLs: urlResults,
    active: true
  });
};

export const setInactive = async (id: string): Promise<boolean> => {
  try {
    await updateDoc(doc(db, 'items', id), { active: false });
    return true;
  } catch {
    return false;
  }
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

export const changeItemOrder = async (item1: Item, item2: Item): Promise<void> => {
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
export const addImages = async (itemId: string, images: FileList): Promise<string[]> => {
  const uploads: Promise<UploadResult>[] = [];
  for (let i = 0; i < images.length; i++) {
    uploads.push(uploadBytes(ref(storage, `${itemId}/${i}`), images[i]));
  }
  const uploadResults = await Promise.all(uploads);

  const urls: Promise<string>[] = [];
  uploadResults.forEach((result) => {
    urls.push(getDownloadURL(result.ref));
  });
  const urlResults = await Promise.all(urls);

  return urlResults;
};

export const deleteImages = async (imageURLs: string[]): Promise<boolean> => {
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
