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
    <div style={{ position: 'absolute', top: 10, left: '40%', display: 'flex', gap: 20 }}>
      {showLogin ? (
        <>
          <div>
            <label>Email</label>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" onClick={() => login()}>
            Login
          </button>
        </>
      ) : (
        <></>
      )}
      {auth.currentUser && 'Logged in as: ' + auth.currentUser.email}
      {auth.currentUser && <button onClick={handleLogout}>Log Out</button>}
    </div>
  );
};
