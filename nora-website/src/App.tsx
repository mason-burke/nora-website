import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GalleryPage } from './routes/GalleryPage';
import { HomePage } from './routes/HomePage';
import { ContactPage } from './routes/ContactPage';
import { Navbar } from './components/Navbar';
import { auth, db } from './firebase/firebase-setup';
import { adminModeContext } from './helpers/contexts';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import './index.css';
import { ErrorPage } from './routes/ErrorPage';
import { AboutPage } from './routes/AboutPage';
import { LoginWidget } from './components/admin/LoginWidget';
import { getItems, Item } from './firebase/firebase-data';

const App = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [adminMode, setAdminMode] = useState<boolean>(false);
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    const loadGallery = async () => {
      setItems(await getItems());
      console.log('loaded items');
    };

    loadGallery();
  }, []);

  useEffect(() => {
    const loadPermissions = async (): Promise<void> => {
      if (auth.currentUser) {
        setAdminMode(true);
        return;
      }

      if ((await getDoc(doc(db, 'constants', localStorage.getItem('nora-key') ?? ''))).exists()) {
        setShowLogin(true);
      }
    };

    if (!adminMode && localStorage.getItem('nora-key')) setTimeout(() => loadPermissions(), 1000);
  }, [adminMode]);

  return (
    <BrowserRouter>
      <div className="headers" style={{ fontSize: '2rem', position: 'fixed', top: 20, left: '5%' }}>
        Nora Barnacle
        <img
          src="/edit-outline.png"
          draggable={false}
          style={{
            position: 'absolute',
            right: -23,
            top: -23,
            transform: 'scale(0.875)',
            zIndex: -1
          }}
        />
      </div>
      <Navbar />
      <LoginWidget showLogin={showLogin} setShowLogin={setShowLogin} setAdminMode={setAdminMode} />
      <adminModeContext.Provider value={adminMode}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage items={items} />} />
          <Route path="/gallery/:id" element={<GalleryPage items={items} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </adminModeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
