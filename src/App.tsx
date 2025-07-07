import { Outlet } from 'react-router-dom';
import { FooterContent } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow flex">
        <Outlet />
      </main>

      <footer className="bg-pink-500 text-center h-12 flex items-center justify-center gap-x-20">
        <div className="border-2 border-black bg-green-300 px-4 py-2">LOGO</div>
        <FooterContent />
      </footer>
    </div>
  );
};
