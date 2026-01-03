import { Item } from '../firebase/item';
import ImageCarousel from './ImageCarousel/ImageCarousel';

export interface ItemDisplayProps {
  item: Item;
}

export const ItemDisplay = ({ item }: ItemDisplayProps) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', margin: '40px' }}>
      <ImageCarousel urls={item.imageURLs} />
      <div>
        <h2>{item.title}</h2>
        <div>{item.description}</div>
      </div>
    </div>
  );
};
