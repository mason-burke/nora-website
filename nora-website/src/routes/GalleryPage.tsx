import { useParams } from 'react-router-dom';
import { NewItemModal } from '../components/admin/NewItemModal/NewItemModal';
import { Item, getItems, getItemById } from '../firebase/firebase-data';
import { useContext, useEffect, useMemo, useState } from 'react';
import { ItemPreview } from '../components/ItemPreview';
import { ItemDetails } from '../components/ItemDetails';
import { adminModeContext } from '../helpers/contexts';

export const GalleryPage = () => {
  const adminMode = useContext(adminModeContext);
  const [items, setItems] = useState<Item[]>([]);
  const id = useParams()['id'] ?? '';
  const selectedItem = useMemo(() => getItemById(items, id), [items, id]);

  useEffect(() => {
    loadGallery();
  });

  const loadGallery = async () => {
    setItems(await getItems());
  };

  return (
    <>
      {adminMode ? <NewItemModal /> : null}
      {items.map((item) => {
        return <ItemPreview item={item} key={item.id} />;
      })}
      <ItemDetails item={selectedItem} />
    </>
  );
};
