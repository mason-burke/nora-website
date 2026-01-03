import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavLink from './NavLink';
import './Navbar.css';

export const Navbar = () => {
  const [currentUrl, setCurrentUrl] = useState('/');

  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  return (
    <nav>
      <div
        style={{
          position: 'relative'
        }}>
        <div className="norabarnacle">Nora Barnacle</div>
        <img
          src="/nora-website/edit-outline.png"
          draggable={false}
          style={{
            position: 'relative',
            right: -45,
            top: -70,
            transform: 'scale(0.875)',
            zIndex: -1
          }}
        />
      </div>
      <div className="navlinks">
        <NavLink url="/" currentUrl={currentUrl} text="Home" />
        <NavLink url="/gallery" currentUrl={currentUrl} text="Work" />
        <NavLink url="/about" currentUrl={currentUrl} text="About" />
      </div>
    </nav>
  );
};
