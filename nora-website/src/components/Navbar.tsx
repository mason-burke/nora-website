import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase-setup';
import { Dispatch, SetStateAction, useState } from 'react';

export interface NavbarProps {
  showLogin: boolean;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setAdminMode: Dispatch<SetStateAction<boolean>>;
}

export const Navbar = ({ showLogin, setShowLogin, setAdminMode }: NavbarProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!email || !password) return;
    //todo: when in production and nora account created, move towards signin only and remove account creation in console
    signInWithEmailAndPassword(auth, email, password);
    // await createUserWithEmailAndPassword(auth, email, password);
    setShowLogin(false);
    setAdminMode(true);
  };

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40
      }}>
      <Link to="gallery">gallery</Link>
      <Link to="/">home</Link>
      <Link to="contact">contact</Link>
      {showLogin ? (
        <>
          <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={() => login()}>
            Login
          </button>
        </>
      ) : (
        <></>
      )}
    </nav>
  );
};
