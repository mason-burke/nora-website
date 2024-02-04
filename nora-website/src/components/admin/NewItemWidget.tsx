import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase-setup';
import { getNextId } from '../../firebase-data';
import { UploadResult, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { useRef, useState } from 'react';
import './NewItemWidget.css';

export const NewItemWidget = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const createFormRef = useRef<HTMLFormElement | null>(null);

  const [images, setImages] = useState<React.JSX.Element[]>([]);

  const renderPreviewImages = (images: FileList | null) => {
    if (!images) return;
    const imgs: React.JSX.Element[] = [];
    for (const image of images) {
      imgs.push(
        <img style={{ width: '2rem', aspectRatio: '1/1' }} src={URL.createObjectURL(image)} />
      );
    }
    setImages(imgs);
  };

  const createNewItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!createFormRef.current) return;
    const form = createFormRef.current;

    e.currentTarget.disabled = true;
    e.currentTarget.classList.add('loading');

    const title = (form['itemTitle'] as HTMLInputElement | null)?.value;
    const description = (form['description'] as HTMLInputElement | null)?.value;
    const price = (form['price'] as HTMLInputElement | null)?.value;
    const images = (form['images'] as HTMLInputElement | null)?.files;

    if (!(title && description && price && images)) return;

    const id = (await getNextId()).toString();

    // upload all of the images under id/{imageNumber}
    const uploads: Promise<UploadResult>[] = [];
    for (let i = 0; i < images.length; i++) {
      uploads.push(uploadBytes(ref(storage, `${id}/${i}`), images[i]));
    }
    const uploadResults = await Promise.all(uploads);

    const urls: Promise<string>[] = [];
    uploadResults.forEach((result) => {
      urls.push(getDownloadURL(result.ref));
    });
    const urlResults = await Promise.all(urls);

    // create database entry keyed by item id, containing title, desc, and price (query for all images later)
    await setDoc(doc(db, 'items', id), {
      title: title,
      description: description,
      price: price,
      imageURLs: urlResults
    });

    e.currentTarget.classList.remove('loading');
    form.reset();
    dialogRef.current && dialogRef.current.close();
  };

  return (
    <>
      <button
        onClick={() => {
          if (dialogRef.current) dialogRef.current.showModal();
        }}>
        +
      </button>
      <dialog ref={dialogRef}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
            style={{ alignSelf: 'end' }}
            onClick={() => {
              if (createFormRef.current) createFormRef.current.reset();
              if (dialogRef.current) dialogRef.current.close();
              setImages([]);
            }}>
            x
          </button>
          <form ref={createFormRef}>
            <input id="itemTitle" placeholder="Title" />
            <input id="description" placeholder="Description" />
            <div>
              $ <input style={{ display: 'inline' }} id="price" placeholder="0.00" />
            </div>
            <button
              // style="display:block;width:120px; height:30px;"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                document.getElementById('images')?.click();
              }}>
              Upload Images
            </button>
            <input
              style={{ display: 'none' }}
              id="images"
              type="file"
              multiple
              onChange={(e) => renderPreviewImages(e.target.files)}
            />
            {images}
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                createNewItem(e);
              }}>
              Create
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
