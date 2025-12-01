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
  const [isOpen, setIsOpen] = useState(true);

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
    //todo: make clicks outsisde of if
    <>
      {showLogin && isOpen && (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            margin: 0,
            padding: 0,
            opacity: '30%',
            backgroundColor: 'grey',
            position: 'fixed',
            top: 0,
            left: 0
          }}
          onClick={() => setIsOpen(false)}
        />
      )}
      <dialog
        open={showLogin && isOpen}
        onClick={(e) => {
          e.stopPropagation();
        }}
        style={{ paddingTop: 50, position: 'fixed', inset: 0, margin: 'auto' }}>
        <button
          className="close-button"
          style={{ position: 'absolute', top: 10, right: 10 }}
          onClick={() => setIsOpen(false)}>
          x
        </button>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <label style={{ display: 'block', width: 'fit-content' }}>Email</label>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label style={{ display: 'block', width: 'fit-content' }}>Password</label>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" style={{ margin: 'auto' }} onClick={() => login()}>
            Login
          </button>
        </div>
      </dialog>
      <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', gap: 20 }}>
        {showLogin && !isOpen && <button onClick={() => setIsOpen(true)}>Log In</button>}
        {auth.currentUser && 'Logged in as: ' + auth.currentUser.email}
        {auth.currentUser && <button onClick={handleLogout}>Log Out</button>}
      </div>
    </>
  );
};
