import { createRoot } from 'react-dom/client';
import { Root } from './Root';
import './index.css';
import './i18n';

createRoot(document.getElementById('root') as HTMLDivElement).render(<Root />);
