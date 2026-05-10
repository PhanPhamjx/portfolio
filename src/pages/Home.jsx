import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { personalInfo, showreel, personalProjects } from '../data/projects';
import Reveal from '../components/Reveal';

const MARQUEE_TITLES = [
  'Unity URP', 'Blender', 'Substance Painter', 'Shader Graph',
  'HLSL', 'C# Editor Tools', 'Python · Qt', 'Unreal Engine',
  'PBR Texturing', 'Scene Build', 'Lighting', 'VFX · Particles',
  'Mobile Optimization', 'Low / High Poly', 'UV Layout', 'Baking',
];

const CREDITS = [
  {
    year: '2025', id: 'phong-than-3d',
    title: 'Phong Thần 3D', sub: 'SaboGame · MMORPG',
    role: 'Environment · Lighting · Shaders / VFX',
    platforms: [{ cls: 'mobile', label: 'Mobile' }], engine: 'Unity URP',
  },
  {
    year: '2025', id: 'kiem-hiep-tinh',
    title: 'Kiếm Hiệp Tình', sub: 'SaboGame · 2D MMORPG',
    role: '2D Map Build · Tile Blending · Gen-AI Pipeline',
    platforms: [{ cls: 'mobile', label: 'Mobile' }], engine: 'Unity 2D',
  },
  {
    year: '2025', id: 'jx1-remaster',
    title: 'Võ Lâm Truyền Kỳ 1 — JX1 Remaster', sub: 'ADNX',
    role: 'Map Build · Asset System · Editor Tools',
    platforms: [{ cls: 'mobile', label: 'Mobile' }], engine: 'Unity',
  },
  {
    year: '2025', id: 'a-train9',
    title: 'A-Train 9 — Train Construction', sub: 'Artdink',
    role: 'Hard-surface · Modular Architecture',
    platforms: [{ cls: 'switch', label: 'Switch' }, { cls: 'pc', label: 'PC' }], engine: 'Unreal',
  },
  {
    year: '2024', id: 'a-train-tourism',
    title: 'A-Train: All Aboard! Tourism', sub: 'Artdink',
    role: 'Asset Remaster · Topology · Texture Upscale',
    platforms: [{ cls: 'switch', label: 'Switch' }, { cls: 'pc', label: 'PC' }], engine: 'Unreal',
  },
  {
    year: '2024', id: 'dragon-quest',
    title: 'Dragon Quest HD-2D Remake', sub: 'Square Enix · Artdink',
    role: 'Architecture · Environment · UE Setup',
    platforms: [{ cls: 'switch', label: 'Switch' }, { cls: 'pc', label: 'PC' }, { cls: 'ps', label: 'PS' }], engine: 'Unreal',
  },
  {
    year: '2023', id: 'audition-mobile',
    title: 'Audition Online Mobile', sub: 'VTC',
    role: 'Character · Costumes · Mobile Optimisation',
    platforms: [{ cls: 'mobile', label: 'Mobile' }], engine: 'Unity',
  },
];


export default function Home() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef(null);

  function handlePlay() {
    setPlaying(true);
    if (videoRef.current) {
      videoRef.current.muted = false;
      videoRef.current.play();
    }
  }

  const marqueeItems = [...MARQUEE_TITLES, ...MARQUEE_TITLES];

  return (
    <div className="home-page">

      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-frame">
          {showreel.localVideo ? (
            <video
              ref={videoRef}
              src={showreel.localVideo}
              loop
              playsInline
              muted
              autoPlay
            />
          ) : (
            <div className="hero-bg-placeholder">Drop demo reel poster (16:9)</div>
          )}
          <div className="hero-overlay">
            <div className="hero-tags">
              <span className="hero-tag accent">Generalist 3D · Technical Artist</span>
              <span className="hero-tag">Unity · Unreal</span>
              <span className="hero-tag">3+ years shipping games</span>
            </div>
            <div className="hero-bottom">
              <h1 className="hero-title">
                Building maps, shaders &amp;<br />
                <strong>tools that ship on real hardware.</strong>
              </h1>
              <div className="hero-meta">
                <div>Demo Reel · 2026</div>
                <div>Runtime 02:14</div>
                <div>H.264 · 1080p</div>
              </div>
            </div>
          </div>
          {!playing && (
            <button className="hero-play" type="button" aria-label="Play reel" onClick={handlePlay}>
              <span className="triangle" />
            </button>
          )}
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {marqueeItems.map((t, i) => <span key={i}>{t}</span>)}
          </div>
          <div className="marquee-track" aria-hidden="true">
            {marqueeItems.map((t, i) => <span key={i}>{t}</span>)}
          </div>
        </div>
      </section>

      {/* ─── PRODUCTIONS / CREDITS ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">01 / Credits</span>
                <span>Productions</span>
              </div>
              <div>
                <h2>Games I've helped ship.</h2>
                <p className="lede">
                  Mobile MMORPGs and console titles for studios across Vietnam and Japan — environment art,
                  lighting, shaders and tooling. Roles vary; what's common is making the build run on the
                  device the player actually has.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="credits">
              {CREDITS.map(c => (
                <Link key={c.id + c.year} className="credit-row" to={`/projects/${c.id}`}>
                  <div className="credit-year">{c.year}</div>
                  <div className="credit-title">{c.title} <small>{c.sub}</small></div>
                  <div className="credit-role">{c.role}</div>
                  <div className="credit-platforms">
                    {c.platforms.map(p => (
                      <span key={p.cls} className={`platform-badge ${p.cls}`}>{p.label}</span>
                    ))}
                  </div>
                  <div className="credit-engine">{c.engine}</div>
                  <div className="credit-arrow">→</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── PERSONAL PROJECTS ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">02 / Personal</span>
                <span>Independent Work</span>
              </div>
              <div>
                <h2>Side projects &amp; self-directed R&amp;D.</h2>
                <p className="lede">
                  Work done outside studio hours — a game jam entry and anatomy studies that
                  sharpen fundamentals and feed back into production quality.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="workgrid">
              {personalProjects.map(p => (
                <Link
                  key={p.id}
                  className="work span-6"
                  to={`/projects/${p.id}`}
                >
                  <div
                    className="work-thumb"
                    style={!p.thumbnail && p.thumbColor ? { background: p.thumbColor } : {}}
                  >
                    {p.thumbnail
                      ? <img src={p.thumbnail} alt={p.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      : <div className="work-thumb-placeholder">{p.title}</div>
                    }
                  </div>
                  <div className="work-overlay">
                    <span className="badge">{p.year}</span>
                    {p.tags && p.tags[0] && <span className="badge">{p.tags[0]}</span>}
                  </div>
                  <div className="work-meta">
                    <h3>{p.title}</h3>
                    <span className="work-tag cat">{p.role}</span>
                  </div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── ABOUT TEASER ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">03 / About</span>
                <span>About</span>
              </div>
              <div>
                <h2>I'm Tùng — 3+ years building game art that ships.</h2>
                <p className="lede">
                  Environment art, shaders and editor tools across mobile MMORPG and console titles.
                  Currently deepening into Technical Art at SaboGame.
                </p>
                <div className="cta-row">
                  <Link className="btn" to="/about">
                    <span>Read full bio</span><span className="arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="section">
        <div className="wrap">
          <Reveal>
            <div className="section-head">
              <div className="label">
                <span className="num">Get in touch</span>
              </div>
              <div>
                <h2>Have a build that needs an extra hand?</h2>
                <p className="lede">
                  Open to full-time technical art roles, contract environment work, and short shader / tool gigs.
                  Studios in Hà Nội welcome — remote also fine.
                </p>
                <div className="cta-row">
                  <a className="btn primary" href={`mailto:${personalInfo.email}`}>
                    <span>Email me</span><span className="arrow">→</span>
                  </a>
                  <a className="btn" href={personalInfo.socials.artstation} target="_blank" rel="noopener noreferrer">
                    <span>ArtStation</span><span className="arrow">↗</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
