import { useLoaderData } from 'react-router-dom';

export const GalleryPage = () => {
  const itemId = useLoaderData() as string;

  return (
    <>
      gallery
      <div id="hi">{itemId}</div>
    </>
  );
};
