import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout.jsx';
import Home from './pages/Home.jsx';

// Every other route is code-split so the homepage stays light.
const PlumbingService = lazy(() => import('./pages/PlumbingService.jsx'));
const ElectricalService = lazy(() => import('./pages/ElectricalService.jsx'));
const DuctingService = lazy(() => import('./pages/DuctingService.jsx'));
const WashingMachineRepair = lazy(() => import('./pages/WashingMachineRepair.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

function PageFallback() {
  // Reserves height so the footer does not jump while a page chunk loads
  return <div className="min-h-[60vh]" aria-hidden="true" />;
}

export default function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="plumbing-service" element={<PlumbingService />} />
          <Route path="electrical-service" element={<ElectricalService />} />
          <Route path="ducting-service" element={<DuctingService />} />
          <Route path="washing-machine-repair" element={<WashingMachineRepair />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
