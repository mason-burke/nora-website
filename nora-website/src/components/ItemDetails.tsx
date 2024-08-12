import { useRef, useState } from 'react';
import { Item } from '../firebase/firebase-data';
import { useNavigate } from 'react-router-dom';
import { ImageCarousel } from './ImageCarousel';

export interface ItemDetailsProps {
  item: Item | null;
}

export const ItemDetails = ({ item }: ItemDetailsProps) => {
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDialogElement>(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  if (item && !modalRef.current?.checkVisibility()) modalRef.current?.showModal();

  return (
    <dialog
      ref={modalRef}
      onClose={() => navigate('/gallery')}
      onClick={(e) => e.target == modalRef.current && modalRef.current?.close()}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <button
          onClick={() => {
            setEditMode(!editMode);
          }}>
          edit
        </button>
        <button
          style={{ alignSelf: 'end' }}
          onClick={() => {
            modalRef.current?.close();
          }}>
          x
        </button>
        {item && <ImageCarousel urls={item.imageURLs} />}
        <div>{item?.title}</div>
        <span>{item?.price}</span>
      </div>
    </dialog>
  );
};

/* todo:
  - if admin
*/
