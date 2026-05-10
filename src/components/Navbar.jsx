import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Portfolio' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function useTime() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const fmt = () => new Date().toLocaleTimeString('en-GB', {
      hour: '2-digit', minute: '2-digit', timeZone: 'Asia/Ho_Chi_Minh',
    });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const time = useTime();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      {/* Fixed top status bar */}
      <div className="statusbar">
        <span className="pill">
          <span className="dot" />
          Online
        </span>
        <span className="sep">·</span>
        <span className="statusbar-hide-sm">Based in Hà Nội, Việt Nam</span>
        <span className="spacer" />
        <span className="tag-mint statusbar-hide-sm">Available · 2026 Q2</span>
        <span className="sep">·</span>
        <span>Build 2026.05.09{time ? ' · ' + time : ''}</span>
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
          <a
            href="mailto:phamtung.gamedev@gmail.com"
            className="btn statusbar-hide-sm"
            style={{ fontSize: 11 }}
          >
            Email me <span className="arrow">→</span>
          </a>
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
          <a
            href="mailto:phamtung.gamedev@gmail.com"
            className="btn primary"
            style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
            onClick={close}
          >
            Email me <span className="arrow">→</span>
          </a>
        </div>
      </nav>
    </>
  );
}
