import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useTheme, useLang } from '../context/AppContext';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  const NAV_ITEMS = [
    { to: '/', label: t.nav.home, end: true },
    { to: '/projects', label: t.nav.portfolio },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ];

  return (
    <>
      {/* Fixed top status bar */}
      <div className="statusbar">
        <span className="pill">
          <span className="dot" />
          {t.statusbar.location.split(',')[0] === 'Based in Hà Nội' ? 'Online' : 'Online'}
        </span>
        <span className="sep">·</span>
        <span className="statusbar-hide-sm">{t.statusbar.location}</span>
        <span className="spacer" />
        <span className="tag-mint statusbar-hide-sm">{t.statusbar.available}</span>
        <span className="sep statusbar-hide-sm">·</span>
        <span className="statusbar-hide-sm">{t.statusbar.build}</span>
      </div>

      {/* Sticky app header */}
      <header className="appheader">
        <NavLink to="/" className="brand" onClick={close}>
          <span className="brand-mark">PT</span>
          <span className="brand-sep">/</span>
          <span className="brand-sub">PhamTung</span>
        </NavLink>

        <nav className="nav" aria-label="Main navigation">
          {NAV_ITEMS.map(item => (
            <NavLink key={item.to} to={item.to} end={item.end}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="headeractions">
          {/* Language toggle */}
          <button
            className="btn icon-btn statusbar-hide-sm"
            onClick={toggleLang}
            title={lang === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
          >
            {lang === 'en' ? 'VI' : 'EN'}
          </button>

          {/* Theme toggle */}
          <button
            className="btn icon-btn"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀' : '◑'}
          </button>

          <button
            className={`nav-hamburger${open ? ' is-open' : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`nav-mobile-overlay${open ? ' is-open' : ''}`}
        onClick={close}
      />

      {/* Mobile slide-in menu */}
      <nav
        className={`nav-mobile${open ? ' is-open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="nav-mobile-header">
          <span className="brand-mark">PT</span>
          <button className="nav-mobile-close" onClick={close} aria-label="Close menu">✕</button>
        </div>
        <ul className="nav-mobile-links">
          {NAV_ITEMS.map(item => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) => `nav-mobile-link${isActive ? ' active' : ''}`}
                onClick={close}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="nav-mobile-footer">
          <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
            <button className="btn icon-btn" onClick={toggleLang} style={{ flex: 1, justifyContent: 'center' }}>
              {lang === 'en' ? '🇻🇳 Tiếng Việt' : '🇬🇧 English'}
            </button>
            <button className="btn icon-btn" onClick={toggleTheme} style={{ flex: 1, justifyContent: 'center' }}>
              {theme === 'dark' ? '☀ Light' : '◑ Dark'}
            </button>
          </div>
          <a
            href="mailto:phamtung.gamedev@gmail.com"
            className="btn primary"
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            onClick={close}
          >
            {t.nav.email} <span className="arrow">→</span>
          </a>
        </div>
      </nav>
    </>
  );
}
