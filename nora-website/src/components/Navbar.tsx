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
    <nav>
      <NavLink url="/" currentUrl={currentUrl} text="Home" />
      <NavLink url="/gallery" currentUrl={currentUrl} text="Work" />
      <NavLink url="/about" currentUrl={currentUrl} text="About" />
    </nav>
  );
};
