import { useParams } from 'react-router-dom';

export const GalleryPage = () => {
  const params = useParams();

  return (
    <>
      gallery
      <div id="hi">hi {params['id'] ?? 'no id'}</div>
    </>
  );
};
