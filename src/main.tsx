import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { reportWebVitals } from 'utils/reportWebVitals';
import trackWebVitals from '@vercel/analytics';
import { Analytics } from '@vercel/analytics/react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
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
