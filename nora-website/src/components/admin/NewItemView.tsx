import { useNavigate } from 'react-router-dom';
import { ItemDetailsModifier } from './ItemDetailsModifier';

export const NewItemView = () => {
  const navigate = useNavigate();
  return (
    <div className="details-overlay">
      <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
        <button className="close-button" onClick={() => navigate('/gallery')}>
          x
        </button>
        <ItemDetailsModifier item={null} />
      </div>
    </div>
  );
};
