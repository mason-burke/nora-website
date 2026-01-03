import { Link } from 'react-router-dom';

export interface NavLinkProps {
  url: string;
  currentUrl: string;
  text: string;
}

const NavLink = ({ url, currentUrl, text }: NavLinkProps) => {
  const isCurrent = url === currentUrl;
  return (
    <div className="navlink" style={{ display: 'flex' }}>
      {isCurrent && (
        <span
          className="headers"
          style={{ position: 'absolute', transform: 'translateX(-15px)', height: 'fit-content' }}>
          {'\u00BB '}
        </span>
      )}
      <Link className="headers" style={{ height: 'fit-content' }} to={url}>
        {text}
      </Link>
    </div>
  );
};

export default NavLink;
