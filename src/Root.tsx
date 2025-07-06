import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './pages/HomePage';
import { ErrorPage } from './pages/ErrorPage';
import { CartPage } from './pages/CartPage';
import { ItemCardPage } from './pages/ItemCardPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { PhonesCatalogPage } from './pages/PhonesCatalogPage';
import { AccessoriesCatalogPage } from './pages/AccessoriesCatalogPage';
import { TabletsCatalogPage } from './pages/TabletsCatalogPage';
import { RightsPage } from './pages/RightsPage';
import { ContactsPage } from './pages/ContactsPage';

export const Root = () => (
  <Router>
    <Routes>
      <Route
        path="/"
        element={<App />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="home"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

        <Route
          path="phones"
          element={<PhonesCatalogPage />}
        />
        <Route
          path="tablets"
          element={<TabletsCatalogPage />}
        />
        <Route
          path="accessories"
          element={<AccessoriesCatalogPage />}
        />

        <Route
          path="favourites"
          element={<FavouritesPage />}
        />
        <Route
          path="cart"
          element={<CartPage />}
        />

        <Route
          path=":category/:itemId"
          element={<ItemCardPage />}
        />

        <Route
          path="contacts"
          element={<ContactsPage />}
        />
        <Route
          path="rights"
          element={<RightsPage />}
        />
      </Route>
      <Route
        path="*"
        element={<ErrorPage />}
      />
    </Routes>
  </Router>
);
