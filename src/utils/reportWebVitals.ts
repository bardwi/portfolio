import type { Metric } from 'web-vitals';
import { onCLS, onINP, onLCP, onFCP, onTTFB } from 'web-vitals';
export function reportWebVitals(onPerfEntry: (metric: Metric) => void): void {
  if (typeof onPerfEntry !== 'function') return;

  onCLS(onPerfEntry);
  onINP(onPerfEntry);
  onLCP(onPerfEntry);
  onFCP(onPerfEntry);
  onTTFB(onPerfEntry);
}
