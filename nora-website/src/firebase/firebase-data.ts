import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
  writeBatch
} from 'firebase/firestore';
import { db, storage } from './firebase-setup';
import { getDownloadURL, ref, uploadBytes, UploadResult } from 'firebase/storage';

export interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  imageURLs: string[];
  active: boolean;
  order: number;
}

export const getItems = async () => {
  const snapshot = await getDocs(query(collection(db, 'items'), where('active', '==', true)));

  const items: Item[] = [];
  snapshot.forEach((doc) => {
    items.push({
      id: doc.id,
      title: doc.data()['title'],
      description: doc.data()['description'],
      price: doc.data()['price'],
      active: doc.data()['active'],
      order: doc.data()['order'],
      imageURLs: doc.data()['imageURLs']
    });
  });
  sortItems(items);
  return items;
};

export const getItemById = (items: Item[], id: string) => {
  return items.find((val) => val.id === id) || null;
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
  const id = (await getNextId()).toString();

  // upload all of the images under id/{imageNumber}
  const uploads: Promise<UploadResult>[] = [];
  for (let i = 0; i < images.length; i++) {
    uploads.push(uploadBytes(ref(storage, `${id}/${i}`), images[i]));
  }
  const uploadResults = await Promise.all(uploads);

  const urls: Promise<string>[] = [];
  uploadResults.forEach((result) => {
    urls.push(getDownloadURL(result.ref));
  });
  const urlResults = await Promise.all(urls);

  // create database entry keyed by item id, containing title, desc, and price (query for all images later)
  await setDoc(doc(db, 'items', id), {
    title: title,
    description: description,
    price: price,
    imageURLs: urlResults,
    active: true
  });
};

export const setInactive = async (id: string): Promise<void> => {
  await updateDoc(doc(db, 'items', id), { active: false });
};

//todo: figure out if we should delete images
export const deleteItem = async (id: string): Promise<void> => {
  await deleteDoc(doc(db, 'items', id));
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
