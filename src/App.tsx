import { Outlet } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { GridContainer } from './components/GridContainer';
import { WidthContainer } from './components/WidthContainer';
import { PaddingContainer } from './components/PaddingContainer/PaddingContainer';
import { ShadowContainer } from './components/ShadowContainer';

export const App = () => {
  return (
    <div className="flex flex-col min-h-screen scroll-smooth back-color">
      <Header />

      <main className="flex-grow">
        <WidthContainer>
          <PaddingContainer>
            <GridContainer>
              <Outlet />
            </GridContainer>
          </PaddingContainer>
        </WidthContainer>
      </main>

      <ShadowContainer>
        <WidthContainer>
          <GridContainer>
            <Footer />
          </GridContainer>
        </WidthContainer>
      </ShadowContainer>
    </div>
  );
};
