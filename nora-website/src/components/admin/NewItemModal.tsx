import { useRef } from 'react';
import { ItemDetailsModifier } from './ItemDetailsModifier';

export const NewItemModal = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  return (
    <>
      <button
        style={{ position: 'absolute', bottom: 30, right: 100 }}
        onClick={() => {
          dialogRef.current?.showModal();
        }}>
        +
      </button>
      <dialog ref={dialogRef} id="new-item-dialog">
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <button
            className="close-button"
            onClick={() => {
              dialogRef.current?.close();
            }}>
            x
          </button>
          <h2>Add New Item</h2>
          <ItemDetailsModifier item={null} />
        </div>
      </dialog>
    </>
  );
};
