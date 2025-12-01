import { createNewItem, deleteItem, Item, updateItem } from '../../firebase/firebase-data';
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { ConfirmableButton } from './ConfirmableButton';
import { refreshItemsContext } from '../../helpers/contexts';
import { useNavigate } from 'react-router-dom';

export interface ItemDetailsModifierProps {
  item: Item | null;
}

export const ItemDetailsModifier = ({ item }: ItemDetailsModifierProps) => {
  const editFormRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const submitButtonRef = useRef<HTMLButtonElement | null>(null);

  //TODO: DELETE ALL THE IMAGES WHEN YOU SAVE - HAVE AN EDIT IMAGES? BUTTON TO BLOBIFY THE IMAGES AND ONLY UPDATE IF THAT"S BEEN CLICKED
  const [images, setImages] = useState<File[]>([]);
  const [selectedImageIdx, setSelectedImageIdx] = useState<number | null>(null);

  const refreshItems = useContext(refreshItemsContext);

  const navigate = useNavigate();

  useEffect(() => {
    const setImagesFromURLs = async (urls: string[]) => {
      if (!fileInputRef.current || !fileInputRef.current.files) return;
      const dataTransfer = new DataTransfer();

      for (const url of urls) {
        const response = await fetch(url);
        const blob = await response.blob();

        // Extract a filename from the URL (fallback to "file")
        const name = url.split('/').pop() || 'file';

        // Create a File
        const file = new File([blob], name, { type: blob.type });
        dataTransfer.items.add(file);
      }

      fileInputRef.current.files = dataTransfer.files;

      updateFiles(dataTransfer.files);
    };

    console.log(item, fileInputRef);

    if (!item || !item.imageURLs || !fileInputRef.current) return;

    setImagesFromURLs(item.imageURLs);
  }, [item, fileInputRef]);

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
    const images = fileInputRef.current?.files;

    if (!(title && description && images)) {
      submitButtonRef.current.disabled = false;
      return;
    }

    submitButtonRef.current.classList.add('loading');
    submitButtonRef.current.innerHTML = 'Working...';

    if (item) {
      await updateItem(item, {}, images);
    } else {
      await createNewItem(title, description, images);
    }

    submitButtonRef.current.classList.remove('loading');
    submitButtonRef.current.disabled = false;
    form.reset();
    refreshItems();
    navigate('/gallery');
  }, [item, submitButtonRef, editFormRef, refreshItems, navigate]);

  const handleDelete = useCallback(async () => {
    if (!item) return;
    deleteItem(item.id);
  }, [item]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }} className="">
      <h2>{item ? 'Edit Item' : 'Create New Item'}</h2>
      <form ref={editFormRef}>
        <div className="input-container">
          <label htmlFor="title">Title</label>
          <input name="title" id="itemTitle" defaultValue={item?.title} />
        </div>

        <div className="input-container">
          <label htmlFor="description">Description</label>
          <textarea name="description" id="description" defaultValue={item?.description} />
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
                src={URL.createObjectURL(image)}
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
          {item ? 'Update' : 'Create'}
        </button>

        {item != null && (
          <ConfirmableButton
            classList={'danger'}
            initialText="Delete"
            confirmText="Confirm Delete"
            onConfirm={handleDelete}
          />
        )}
      </form>
    </div>
  );
};
