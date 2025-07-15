import { useParams } from 'react-router-dom';
import { NewItemModal } from '../components/admin/NewItemModal';
import { Item, getItemById } from '../firebase/firebase-data';
import { useContext, useMemo } from 'react';
import { ItemPreview } from '../components/ItemPreview';
import { ItemDetails } from '../components/ItemDetails';
import { adminModeContext } from '../helpers/contexts';

export interface GalleryPageProps {
  items: Item[];
}

export const GalleryPage = ({ items }: GalleryPageProps) => {
  const adminMode = useContext(adminModeContext);

  const id = useParams()['id'] ?? '';
  const selectedItem = useMemo(() => getItemById(items, id), [items, id]);

  return (
    <>
      {adminMode && <NewItemModal />}
      {items.map((item) => {
        return <ItemPreview item={item} key={item.id} />;
      })}
      <ItemDetails item={selectedItem} />
    </>
  );
};
