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
import { PhonesCatalogPage } from './pages/PhonesCatalogPage';
import { AccessoriesCatalogPage } from './pages/AccessoriesCatalogPage';
import { TabletsCatalogPage } from './pages/TabletsCatalogPage';
import { RightsPage } from './pages/RightsPage';
import { ContactsPage } from './pages/ContactsPage';
import { HomePage } from './pages/HomePage';
import { ProductPage } from './pages/ProductPage';
import { ComparisonPage } from './pages/ComparisonPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<HomePage />} />
        <Route path="home" element={<Navigate to="/" replace />} />

        <Route path="phones">
          <Route index element={<PhonesCatalogPage />} />
          <Route path="comparison" element={<ComparisonPage />} />
          <Route path=":itemId" element={<ProductPage />} />
        </Route>

        <Route path="tablets">
          <Route index element={<TabletsCatalogPage />} />
          <Route path="comparison" element={<ComparisonPage />} />
          <Route path=":itemId" element={<ProductPage />} />
        </Route>

        <Route path="accessories">
          <Route index element={<AccessoriesCatalogPage />} />
          <Route path="comparison" element={<ComparisonPage />} />
          <Route path=":itemId" element={<ProductPage />} />
        </Route>

        <Route path="favourites" element={<FavouritesPage />} />

        <Route path="cart" element={<CartPage />} />

        <Route path="contacts" element={<ContactsPage />} />
        <Route path="rights" element={<RightsPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </Router>
);
