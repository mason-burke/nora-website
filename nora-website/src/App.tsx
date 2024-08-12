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

const App = () => {
  const [showLogin, setShowLogin] = useState<boolean>(false);
  const [adminMode, setAdminMode] = useState<boolean>(false);

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
  });

  return (
    <BrowserRouter>
      <Navbar showLogin={showLogin} setShowLogin={setShowLogin} setAdminMode={setAdminMode} />
      <adminModeContext.Provider value={adminMode}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/gallery/:id" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </adminModeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
