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
      imgs.push(<img style={{ width: '5rem' }} src={URL.createObjectURL(image)} />);
    }
    setImages(imgs);
  };

  const processNewItem = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (!createFormRef.current) return;
    const form = createFormRef.current;

    e.currentTarget.disabled = true;

    const title = (form['itemTitle'] as HTMLInputElement | null)?.value;
    const description = (form['description'] as HTMLInputElement | null)?.value;
    const price = (form['price'] as HTMLInputElement | null)?.value;
    const images = (form['images'] as HTMLInputElement | null)?.files;

    if (!(title && description && price && images)) {
      e.currentTarget.disabled = false;
      return;
    }

    e.currentTarget.classList.add('loading');
    await createNewItem(title, description, price, images);

    e.currentTarget.classList.remove('loading');
    e.currentTarget.disabled = false;
    form.reset();
    dialogRef.current?.close();
  };

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
            style={{ alignSelf: 'end', position: 'fixed', height: 30, width: 30, padding: 0 }}
            onClick={() => {
              createFormRef.current?.reset();
              dialogRef.current?.close();
              setImages([]);
            }}>
            x
          </button>
          <h2>Add New Item</h2>
          <form ref={createFormRef}>
            <div className="input-container">
              <label htmlFor="title">Title</label>
              <input name="title" id="itemTitle" />
            </div>

            <div className="input-container">
              <label htmlFor="description">Description</label>
              <textarea name="description" id="description" />
            </div>

            <div className="input-container">
              <label htmlFor="price">Price</label>
              <div>
                $ <input style={{ display: 'inline' }} name="price" id="price" placeholder="0.00" />
              </div>
            </div>
            <button
              className="input-container"
              style={{ marginTop: 4 }}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                document.getElementById('images')?.click();
              }}>
              Select Images
            </button>
            <input
              style={{ display: 'none' }}
              id="images"
              type="file"
              multiple
              onChange={(e) => renderPreviewImages(e.target.files)}
            />
            <div>{images}</div>

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
