import { useParams } from 'react-router-dom';
import { NewItemWidget } from '../components/admin/NewItemWidget';
import { Item, getItems } from '../firebase-data';
import { useEffect, useState } from 'react';
import { ItemPreview } from '../components/ItemPreview';

export interface GalleryPageProps {
  adminMode: boolean;
}

export const GalleryPage = ({ adminMode }: GalleryPageProps) => {
  const [items, setItems] = useState<Item[]>([]);
  const id = useParams()['id'];

  useEffect(() => {
    if (id) {
      loadGallery();
    }
  }, [id]);

  const loadGallery = async () => {
    setItems(await getItems());
  };

  return (
    <>
      gallery{id ? `: ${id}` : ''}
      <div>{adminMode ? <NewItemWidget /> : null}</div>
      {items.forEach((item, idx) => {
        <ItemPreview item={item} key={idx} />;
      })}
    </>
  );
};
