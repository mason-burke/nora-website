import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate('/'), 1000);
  return <>Page not found. Redirecting...</>;
};
