import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { ErrorPage } from './pages/ErrorPage';
import { CartPage } from './pages/CartPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { RightsPage } from './pages/RightsPage';
import { ContactsPage } from './pages/ContactsPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ComparisonPage } from './pages/ComparisonPage';
import { CatalogPage } from './pages/CatalogPage';
import { PhonesHeroPage } from './pages/PhonesHeroPage';
import { TabletsHeroPage } from './pages/TabletsHeroPage';
import { AccessoriesHeroPage } from './pages/AccessoriesHeroPage';
import { ScrollToTop } from './components/common/ScrollToTop';

export const Root = () => (
  <Router>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="phones">
          <Route index element={<PhonesHeroPage />} />
          <Route path="catalog">
            <Route index element={<CatalogPage />} />
            <Route path="comparison" element={<ComparisonPage />} />
            <Route path=":itemId" element={<ProductPage />} />
          </Route>
        </Route>

        <Route path="tablets">
          <Route index element={<TabletsHeroPage />} />
          <Route path="catalog">
            <Route index element={<CatalogPage />} />
            <Route path="comparison" element={<ComparisonPage />} />
            <Route path=":itemId" element={<ProductPage />} />
          </Route>
        </Route>

        <Route path="accessories">
          <Route index element={<AccessoriesHeroPage />} />
          <Route path="catalog">
            <Route index element={<CatalogPage />} />
            <Route path="comparison" element={<ComparisonPage />} />
            <Route path=":itemId" element={<ProductPage />} />
          </Route>
        </Route>

        <Route path="favourites" element={<FavouritesPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="contacts" element={<ContactsPage />} />
        <Route path="rights" element={<RightsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  </Router>
);
