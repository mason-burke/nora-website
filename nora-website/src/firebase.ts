import { initializeApp } from 'firebase/app';
import { getAuth, signOut } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export const app = initializeApp({
  apiKey: 'AIzaSyCKgTPESHswzcN4vmpDku4WRza0ZN7Ckl4',
  authDomain: 'nora-gallery.firebaseapp.com',
  projectId: 'nora-gallery',
  storageBucket: 'nora-gallery.appspot.com',
  messagingSenderId: '83623253491',
  appId: '1:83623253491:web:4dc280fd0f55dbdfcfae86'
});
export const auth = getAuth(app);
export const logout = () => {
  signOut(auth);
};
export const db = getFirestore(app);
