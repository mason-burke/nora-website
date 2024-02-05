import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GalleryPage } from './routes/GalleryPage';
import { HomePage } from './routes/HomePage';
import { ContactPage } from './routes/ContactPage';
import { Navbar } from './components/Navbar';
import { auth, db } from './firebase-setup';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { Canvas } from './components/Canvas';

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [adminMode, setAdminMode] = useState(false);
  //TODO: Makepopup or something of that variety that shows a message for uploads
  // const [message, setMessage] = useState('');
  // const [uploadPercent, setUploadPercent] = useState(-1);

  useEffect(() => {
    const loadPermissions = async () => {
      if (auth.currentUser) {
        setAdminMode(true);
        return;
      }

      if (!adminMode) {
        const keyDocRef = doc(db, 'constants', localStorage.getItem('nora-key') ?? '');

        console.log(keyDocRef);

        if ((await getDoc(keyDocRef)).exists()) setShowLogin(true);
      }
    };

    if (localStorage.getItem('nora-key')) setTimeout(() => loadPermissions(), 1000);
  });

  return (
    <>
      <Canvas />
      <BrowserRouter>
        <Navbar showLogin={showLogin} setShowLogin={setShowLogin} setAdminMode={setAdminMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<GalleryPage adminMode={adminMode} />} />
          <Route path="/gallery/:id" element={<GalleryPage adminMode={adminMode} />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
