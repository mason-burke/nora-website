import { createNewItem, Item } from '../../firebase/firebase-data';
import React, { useCallback, useRef, useState } from 'react';

export interface ItemDetailsModifierProps {
  item: Item | null;
}

export const ItemDetailsModifier = ({ item }: ItemDetailsModifierProps) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const editFormRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);
  const deleteItemRef = useRef<HTMLButtonElement | null>(null);

  const [imageOrder, setImageOrder]
  // second parameter denotes if it already exists in the database
  const [images, setImages] = useState<File[]>([]);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const updateFiles = (newFiles: FileList | File[] | null) => {
    if (!newFiles) return;
    setImages([...newFiles]);
  };

  const removeImage = (e: React.MouseEvent, idx: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (!fileInputRef.current || !fileInputRef.current.files) return;

    const files = Array.from(fileInputRef.current.files);
    files.splice(idx, 1);

    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    fileInputRef.current.files = dataTransfer.files;

    updateFiles(files);
  };

  const handleImageClick = (idx: number) => {
    switch (selectedImageIdx) {
      case idx:
        setSelectedImageIdx(null);
        break;
      case null:
        setSelectedImageIdx(idx);
        break;
      default:
        switchImages(selectedImageIdx!, idx);
        setSelectedImageIdx(null);
    }
  };

  const switchImages = (idx1: number, idx2: number) => {
    if (!fileInputRef.current || !fileInputRef.current.files) return;

    const files = Array.from(fileInputRef.current.files);
    [files[idx1], files[idx2]] = [files[idx2], files[idx1]];

    const dataTransfer = new DataTransfer();
    files.forEach((file) => dataTransfer.items.add(file));
    fileInputRef.current.files = dataTransfer.files;

    updateFiles(files);
  };

  const handleSubmit = useCallback(async () => {
    if (!editFormRef.current || !submitButtonRef.current) return;
    const form = editFormRef.current;
    const data = new FormData(form);

    submitButtonRef.current.disabled = true;

    const title = data.get('title')?.toString();
    const description = data.get('description')?.toString();
    const price = data.get('price')?.toString();
    const images = fileInputRef.current?.files;

    if (!(title && description && price && images)) {
      submitButtonRef.current.disabled = false;
      return;
    }

    submitButtonRef.current.classList.add('loading');
    submitButtonRef.current.innerHTML = 'Working...';

    if (item) {
      // await updateItem(item);
    } else {
      await createNewItem(title, description, price, images);
    }

    submitButtonRef.current.classList.remove('loading');
    submitButtonRef.current.disabled = false;
    form.reset();
    dialogRef.current?.close();
  }, [item, submitButtonRef, dialogRef, editFormRef]);

  return (
    <>
      <button
        style={{ position: 'absolute', bottom: 30, right: 100 }}
        onClick={() => {
          dialogRef.current?.showModal();
        }}>
        +
      </button>
      <dialog ref={dialogRef} id="edit-item-dialog">
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
          <button
            className="close-button"
            onClick={() => {
              editFormRef.current?.reset();
              dialogRef.current?.close();
              setImages([]);
            }}>
            x
          </button>
          <h2>{item ? `Edit ${item.title}` : 'Add New Item'}</h2>
          {item != null && (
            <button
              onClick={}
              onMouseLeave={() => deleteItemRef.current?.classList.remove('')}></button>
          )}
          <form ref={editFormRef}>
            <div className="input-container">
              <label htmlFor="title">Title</label>
              <input name="title" id="itemTitle" defaultValue={item?.title} />
            </div>

            <div className="input-container">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" defaultValue={item?.description} />
            </div>

            <div className="input-container">
              <label htmlFor="price">Price</label>
              <div>
                ${' '}
                <input
                  style={{ display: 'inline' }}
                  name="price"
                  id="price"
                  placeholder="0.00"
                  defaultValue={item?.price}
                />
              </div>
            </div>
            <button
              className="input-container"
              style={{ marginTop: 4 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                fileInputRef.current?.click();
              }}>
              Select Images
            </button>
            <input
              ref={fileInputRef}
              style={{ display: 'none' }}
              id="images"
              type="file"
              multiple
              onChange={(e) => updateFiles(e.target.files)}
            />
            <div style={{ display: 'flex', gap: 10, padding: 10 }}>
              {images.map((image, idx) => (
                <div key={`image_${idx}`} style={{ display: 'flex', position: 'relative' }}>
                  <button
                    onClick={(e) => removeImage(e, idx)}
                    className="image-edit-button"
                    style={{ right: 0 }}>
                    x
                  </button>
                  {idx !== 0 && (
                    <button
                      className="image-edit-button"
                      style={{ left: 0, bottom: 0 }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        switchImages(idx, idx - 1);
                      }}>
                      {'<'}
                    </button>
                  )}
                  {idx !== images.length - 1 && (
                    <button
                      className="image-edit-button"
                      style={{ right: 0, bottom: 0 }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        switchImages(idx, idx + 1);
                      }}>
                      {'>'}
                    </button>
                  )}
                  <img
                    //todo: add hover effect
                    className={`preview-image ${selectedImageIdx === idx && 'selected'}`}
                    onClick={() => handleImageClick(idx)}
                    style={{ width: '7rem' }}
                    src={URL.createObjectURL(image[0])}
                  />
                </div>
              ))}
            </div>

            <button
              ref={submitButtonRef}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleSubmit();
              }}>
              Create
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
