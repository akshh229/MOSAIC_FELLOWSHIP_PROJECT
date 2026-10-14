/**
 * App — Root layout with routing.
 * Per design docs: Skip link, nav, routed content, footer.
 */
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { AppProvider } from './state/AppContext';
import { ToastProvider } from './components/Toast';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { PreparePage } from './pages/PreparePage';
import { SummaryPage } from './pages/SummaryPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { SafetyPage } from './pages/SafetyPage';
import { AboutPage } from './pages/AboutPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppLayout() {
  const { pathname } = useLocation();
  const isPreparePage = pathname === '/prepare';

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {!isPreparePage && <Navigation />}
      {!isPreparePage && <div className="nav-spacer" />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/prepare" element={<PreparePage />} />
        <Route path="/summary" element={<SummaryPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/safety" element={<SafetyPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      {!isPreparePage && <Footer />}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <ToastProvider>
          <AppLayout />
        </ToastProvider>
      </AppProvider>
    </BrowserRouter>
  );
}
