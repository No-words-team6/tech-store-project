import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth">
      <Header />

      <main className="flex-grow flex">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
