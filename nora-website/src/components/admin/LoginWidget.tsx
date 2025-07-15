import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, logout } from '../../firebase/firebase-setup';
import { Dispatch, SetStateAction, useState } from 'react';

export interface LoginWidgetProps {
  showLogin: boolean;
  setShowLogin: Dispatch<SetStateAction<boolean>>;
  setAdminMode: Dispatch<SetStateAction<boolean>>;
}

export const LoginWidget = ({ showLogin, setShowLogin, setAdminMode }: LoginWidgetProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    if (!email || !password) return;
    //todo: when in production and nora account created, move towards signin only and remove account creation in console
    try {
      const loginResponse = await signInWithEmailAndPassword(auth, email, password);
      if (loginResponse.user) {
        setShowLogin(false);
        setAdminMode(true);
      }
    } catch {
      alert('Invalid login. Please contact your brother for assistance.');
    }
  };

  const handleLogout = async () => {
    await logout();
    setAdminMode(false);
  };

  return (
    <div style={{ position: 'absolute', top: 10, left: '40%', display: 'flex' }}>
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
      {auth.currentUser ? 'Logged in as: ' + auth.currentUser.email : 'Not logged in'}
      {auth.currentUser && <button onClick={handleLogout}>Log Out</button>}
    </div>
  );
};
