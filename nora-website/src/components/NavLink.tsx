import { Link } from 'react-router-dom';

export interface NavLinkProps {
  url: string;
  currentUrl: string;
  text: string;
}

const NavLink = ({ url, currentUrl, text }: NavLinkProps) => {
  const isCurrent = url === currentUrl;
  return (
    <div style={{ display: 'flex' }}>
      {isCurrent && <span className="headers">{'\u00BB '}</span>}
      <Link className="headers" to={url}>
        {text}
      </Link>
    </div>
  );
};

export default NavLink;
