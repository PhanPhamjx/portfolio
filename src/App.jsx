import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { AppProvider } from './context/AppContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import ToolsPage from './pages/ToolsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function BottomBar() {
  const [vp, setVp] = useState('');
  useEffect(() => {
    const update = () => setVp(`${window.innerWidth} × ${window.innerHeight}`);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div className="statusbar bottom">
      <span>Generalist 3D · Technical Artist</span>
      <span className="sep">·</span>
      <span>© 2026 Phạm Thanh Tùng</span>
      <span className="spacer" />
      <span className="statusbar-hide-sm">phamtung.gamedev@gmail.com</span>
      <span className="sep">·</span>
      <span>{vp}</span>
    </div>
  );
}

function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/productions" element={<Navigate to="/" replace />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <BottomBar />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <AppShell />
      </HashRouter>
    </AppProvider>
  );
}
