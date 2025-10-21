import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { reportWebVitals } from 'utils/reportWebVitals';
import ScrollToHash from 'components/scroll/ScrollToHash';
import trackWebVitals from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/react';
import './styles/_cookieconsent.scss';

const root = createRoot(document.getElementById('root')!);

root.render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToHash />
      <App />
    </BrowserRouter>
    <Analytics />
  </StrictMode>
);

reportWebVitals((metric) => {
  trackWebVitals.track(metric.name, {
    value: metric.value,
    id: metric.id,
    delta: metric.delta,
  });
});
