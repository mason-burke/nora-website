import { useNavigate } from 'react-router-dom';

export const ErrorPage = () => {
  setTimeout(() => useNavigate()('/'), 500);
  return <>error</>;
};
