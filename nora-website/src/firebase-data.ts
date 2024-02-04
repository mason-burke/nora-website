import { collection, getCountFromServer, getDocs, query, where } from 'firebase/firestore';
import { db } from './firebase-setup';

export interface Item {
  id: string;
  title: string;
  description: string;
  price: number;
  imageURLs: string[];
  active: boolean;
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
      imageURLs: doc.data()['imageURLs']
    });
  });

  return items;
};

export const getNextId = async () => {
  return (await getCountFromServer(collection(db, 'items'))).data().count + 1;
};
