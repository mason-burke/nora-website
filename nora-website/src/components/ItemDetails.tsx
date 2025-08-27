import { useContext, useMemo, useState } from 'react';
import { getItemById } from '../firebase/firebase-data';
import { useNavigate, useParams } from 'react-router-dom';
import { adminModeContext, itemsContext } from '../helpers/contexts';
import { ItemDetailsModifier } from './admin/ItemDetailsModifier';
import { ItemDisplay } from './ItemDisplay';

//todo: fix image deletion (maybe it already works, has to do with ids versus titles for filenames)
//todo: bring back to gallery on successful delete/edit/new item and refresh gallery
export const ItemDetails = () => {
  const navigate = useNavigate();
  const adminMode = useContext(adminModeContext);

  const id = useParams().id ?? '';
  const items = useContext(itemsContext);
  const item = useMemo(() => getItemById(items, id), [items, id]);

  const [editMode, setEditMode] = useState<boolean>(false);

  if (!item) {
    navigate('/gallery');
    return;
  }

  return (
    <div className="details-overlay">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {adminMode && (
          <button onClick={() => setEditMode(!editMode)}>{editMode ? 'View' : 'Edit'}</button>
        )}
        <button className="close-button" onClick={() => navigate('/gallery')}>
          x
        </button>

        {item && editMode && adminMode ? (
          <ItemDetailsModifier item={item} />
        ) : (
          <ItemDisplay item={item} />
        )}
      </div>
    </div>
  );
};
