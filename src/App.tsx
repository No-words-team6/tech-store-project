import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';

import { useEffect } from 'react';
import { useProductStore } from './stores/productStore';

export const App = () => {
  const getLocaleStore = useProductStore((state) => state.getLocaleStore);

  useEffect(() => {
    getLocaleStore();
  }, [getLocaleStore]);

  return (
    <div className="flex flex-col min-h-screen scroll-smooth bg-header-background">
      <Header />

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};
