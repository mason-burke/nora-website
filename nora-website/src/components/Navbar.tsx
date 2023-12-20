import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to="gallery">gallery</Link>
      <Link to="/">home</Link>
      <Link to="contact">contact</Link>
    </nav>
  );
};
