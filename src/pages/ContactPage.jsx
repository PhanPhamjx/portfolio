import { useState } from 'react';
import Reveal from '../components/Reveal';

function CopyBtn({ value }) {
  const [copied, setCopied] = useState(false);
  function handleClick(e) {
    e.preventDefault();
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }
  return (
    <button
      className={`copy-btn${copied ? ' copied' : ''}`}
      type="button"
      onClick={handleClick}
    >
      {copied ? 'Copied!' : 'Copy'}
    </button>
  );
}

export default function ContactPage() {
  return (
    <div className="contact-page">
      <div className="wrap">
        <Reveal>
          <div className="contact">
            <div>
              <span className="eyebrow">06 / Contact</span>
              <h2 className="contact-headline">
                Let's build something <em>that ships.</em>
                <span className="blink" />
              </h2>
              <p className="lede">
                Best place to reach me is email or ArtStation. I read both within a day.
                For studios in Hà Nội we can also meet for cà phê.
              </p>
            </div>

            <div className="contact-list">
              <a className="contact-row" href="mailto:phamtung.gamedev@gmail.com">
                <span className="k">Email</span>
                <span className="v">phamtung.gamedev@gmail.com</span>
                <CopyBtn value="phamtung.gamedev@gmail.com" />
              </a>

              <a className="contact-row" href="tel:+84332577358">
                <span className="k">Phone</span>
                <span className="v">+84 332 577 358</span>
                <CopyBtn value="+84332577358" />
              </a>

              <div className="contact-row">
                <span className="k">Based</span>
                <span className="v">Hà Nội, Việt Nam (UTC+7)</span>
                <span className="copy-btn" style={{ borderColor: 'transparent', background: 'transparent', cursor: 'default' }}>
                  UTC+7
                </span>
              </div>

              <a className="contact-row" href="https://github.com/PhanPhamjx" target="_blank" rel="noopener noreferrer">
                <span className="k">GitHub</span>
                <span className="v">github.com/PhanPhamjx</span>
                <span className="copy-btn">Open ↗</span>
              </a>

              <a className="contact-row" href="https://artstation.com/phanpham2k" target="_blank" rel="noopener noreferrer">
                <span className="k">ArtStation</span>
                <span className="v">artstation.com/phanpham2k</span>
                <span className="copy-btn">Open ↗</span>
              </a>

              <div className="contact-row open-status">
                <span className="k">Status</span>
                <span className="v" style={{ color: 'var(--accent)' }}>Open · Q2 2026 · FT or Contract</span>
                <span className="open-badge">●</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
