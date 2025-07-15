import { Item } from '../firebase/firebase-data';
import { useNavigate } from 'react-router-dom';

export interface ItemPreviewProps {
  item: Item;
}

export const ItemPreview = ({ item }: ItemPreviewProps) => {
  const navigate = useNavigate();
  return (
    <div
      style={{ cursor: 'pointer', background: 'white' }}
      onClick={() => {
        navigate(`/gallery/${item.id}`);
      }}>
      <h3>{item.title}</h3>
      <img src={item.imageURLs[0]} height={200} />
    </div>
  );
};
