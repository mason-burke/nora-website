import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { galleryLoader } from './loaders';
import { GalleryPage } from './routes/GalleryPage';
import { HomePage } from './routes/HomePage';
import { ContactPage } from './routes/ContactPage';
import { ErrorPage } from './routes/ErrorPage';
import './App.css';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
      errorElement: <ErrorPage />
    },
    {
      path: '/gallery/:itemId',
      element: <GalleryPage />,
      loader: galleryLoader
    },
    {
      path: '/contact',
      element: <ContactPage />
    }
  ]);

  //todo: layout goes around router provider
  return <RouterProvider router={router} />;
};

export default App;
