import { createContext } from 'react';
import { Item } from '../firebase/firebase-data';

export const adminModeContext = createContext<boolean>(false);
export const refreshItemsContext = createContext<() => void>(() => {});
export const itemsContext = createContext<Item[]>([]);
