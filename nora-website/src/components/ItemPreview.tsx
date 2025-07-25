import { Item } from '../firebase/firebase-data';
import { useNavigate } from 'react-router-dom';

export interface ItemPreviewProps {
  item: Item;
}

export const ItemPreview = ({ item }: ItemPreviewProps) => {
  const navigate = useNavigate();
  return (
    <div className="item-preview-wrapper">
      <div
        className="item-preview"
        onClick={() => {
          navigate(`/gallery/${item.id}`);
        }}>
        <img src={item.imageURLs[0]} height={200} />
        <h3>{item.title}</h3>
      </div>
    </div>
  );
};
