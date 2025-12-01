import { Item } from '../firebase/firebase-data';
import { ImageCarousel } from './ImageCarousel';

export interface ItemDisplayProps {
  item: Item;
}

export const ItemDisplay = ({ item }: ItemDisplayProps) => {
  return (
    <div>
      <ImageCarousel urls={item.imageURLs} />
      <div>{item.title}</div>
      <div>{item.description}</div>
    </div>
  );
};
