import { Item } from '../firebase-data';

export interface ItemPreviewProps {
  item: Item;
}

export const ItemPreview = ({ item }: ItemPreviewProps) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <img src={item.imageURLs[0]} />
      <div></div>
    </div>
  );
};
