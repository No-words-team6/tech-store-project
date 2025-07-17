import { Link } from 'react-router-dom';
import img from '../../public/img/placeholder-404.png';

export const ErrorPage = () => {
  return (
    <Link
      to="/"
      className="sm:mt-20 grid grid-cols-4 sm:grid-cols-12 xl:grid-cols-24"
    >
      <img
        src={img}
        alt="404"
        className="col-span-4 col-start-1 sm:col-span-4 sm:col-start-5 xl:col-span-8 xl:col-start-8"
      />
      <p className="text-2xl col-span-4 col-start-1 sm:col-span-4 sm:col-start-5 xl:col-span-4 xl:col-start-10 text-gray-600 text-center -mt-10 mb-10">
        Page not found
      </p>
    </Link>
  );
};
