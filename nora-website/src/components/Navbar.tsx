import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavLink from './NavLink';

export const Navbar = () => {
  const [currentUrl, setCurrentUrl] = useState('/');

  const location = useLocation();

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location]);

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        right: '10%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        justifyContent: 'center',
        gap: 10
      }}>
      <NavLink url="/" currentUrl={currentUrl} text="Home" />
      <NavLink url="/gallery" currentUrl={currentUrl} text="Work" />
      <NavLink url="/contact" currentUrl={currentUrl} text="Contact" />
      <NavLink url="/about" currentUrl={currentUrl} text="About" />
    </nav>
  );
};
