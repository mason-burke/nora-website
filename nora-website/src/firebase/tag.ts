import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { db, storage } from './firebase-setup';
import {
  collection,
  deleteDoc,
  doc,
  FirestoreDataConverter,
  getDoc,
  getDocs,
  query,
  QueryDocumentSnapshot,
  setDoc
} from 'firebase/firestore';

export type Tag = {
  name: string;
  coverImageUrl: string;
};

const tagConverter: FirestoreDataConverter<Tag> = {
  toFirestore: (tag: Tag) => tag,
  fromFirestore: (snapshot: QueryDocumentSnapshot): Tag => {
    const data = snapshot.data();
    return {
      name: data.name,
      coverImageUrl: data.coverImageUrl
    };
  }
};

const createTag = async (name: string, image: File): Promise<string> => {
  if (await tagAlreadyExists(name)) return 'The tag already exists!';

  const uploadResult = await uploadBytes(ref(storage, 'tags/' + name), image);

  const url = await getDownloadURL(uploadResult.ref);

  const tag: Tag = {
    name: name,
    coverImageUrl: url
  };

  await setDoc(doc(db, 'tags', name), tag);

  return 'OK';
};

const deleteTag = async (name: string): Promise<string> => {
  if (!tagAlreadyExists(name)) return 'The tag does not exist.';

  await deleteObject(ref(storage, 'tags/' + name));
  await deleteDoc(doc(db, 'tags', name));
  return 'OK';
};

const tagAlreadyExists = async (name: string): Promise<boolean> => {
  return (await getDoc(doc(db, 'tags', name))).exists();
};

const getAllTags = async (): Promise<Tag[]> => {
  const snapshot = await getDocs(query(collection(db, 'tags')).withConverter(tagConverter));

  return snapshot.docs.map((t) => t.data());
};

export default {
  createTag,
  deleteTag,
  getAllTags
};
