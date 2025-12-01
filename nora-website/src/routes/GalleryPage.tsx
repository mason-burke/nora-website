import { Route, Routes, useNavigate } from 'react-router-dom';
import { NewItemView } from '../components/admin/NewItemView';
import { useContext } from 'react';
import { ItemPreview } from '../components/ItemPreview';
import { ItemDetails } from '../components/ItemDetails';
import { adminModeContext, itemsContext } from '../helpers/contexts';

export const GalleryPage = () => {
  const adminMode = useContext(adminModeContext);
  const items = useContext(itemsContext);
  const navigate = useNavigate();

  return (
    <div>
      {adminMode && (
        <button
          style={{ position: 'absolute', bottom: 30, right: 100 }}
          onClick={() => {
            navigate('/gallery/new');
          }}>
          +
        </button>
      )}

      <Routes>
        <Route path="/:id" element={<ItemDetails />} />
        {adminMode && <Route path="/new" element={<NewItemView />} />}
      </Routes>

      {!items.length && 'Nothing to see here...'}

      <div className="item-container" style={{ display: 'grid', gap: 1 }}>
        {items.map((item) => (
          <ItemPreview item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
