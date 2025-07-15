import { createNewItem } from '../../firebase/firebase-data';
import { useRef, useState } from 'react';

export const NewItemModal = () => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const createFormRef = useRef<HTMLFormElement | null>(null);

  const [images, setImages] = useState<React.JSX.Element[]>([]);

  const renderPreviewImages = (images: FileList | null) => {
    if (!images) return;
    const imgs: React.JSX.Element[] = [];
    for (const image of images) {
      imgs.push(<img style={{ width: '2rem' }} src={URL.createObjectURL(image)} />);
    }
    setImages(imgs);
  };

  const processNewItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!createFormRef.current) return;
    const form = createFormRef.current;

    e.currentTarget.disabled = true;
    e.currentTarget.classList.add('loading');

    const title = (form['itemTitle'] as HTMLInputElement | null)?.value;
    const description = (form['description'] as HTMLInputElement | null)?.value;
    const price = (form['price'] as HTMLInputElement | null)?.value;
    const images = (form['images'] as HTMLInputElement | null)?.files;

    if (!(title && description && price && images)) return;

    createNewItem(title, description, price, images);

    e.currentTarget.classList.remove('loading');
    form.reset();
    dialogRef.current?.close();
  };

  return (
    <>
      <button
        style={{ position: 'absolute', top: 30, right: 100 }}
        onClick={() => {
          dialogRef.current?.showModal();
        }}>
        Add New Creation
      </button>
      <dialog
        ref={dialogRef}
        onClick={(e) => e.target == dialogRef.current && dialogRef.current?.close()}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <button
            style={{ alignSelf: 'end' }}
            onClick={() => {
              createFormRef.current?.reset();
              dialogRef.current?.close();
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
                processNewItem(e);
              }}>
              Create
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};
