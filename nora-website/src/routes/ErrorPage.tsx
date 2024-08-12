import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  const navigate = useNavigate();
  setTimeout(() => navigate('/'), 500);
  return <>Page not found. Redirecting...</>;
};
