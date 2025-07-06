import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FooterContent } from './components/Footer';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-400 flex items-center justify-center gap-x-10 h-16">
        <div className="border-2 border-black bg-green-300 px-4 py-2">LOGO</div>
        <Navbar />
      </header>

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
