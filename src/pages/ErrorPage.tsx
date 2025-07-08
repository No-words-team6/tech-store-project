import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center back-color">
      <Link to="/">
        <p className="font-bold text-red-600 text-3xl">СмЄрть</p>
      </Link>
    </div>
  );
};
