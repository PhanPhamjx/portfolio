import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import { personalInfo, showreel, personalProjects } from '../data/projects';
import { useLang } from '../context/AppContext';
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
  const { t } = useLang();

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
              <span className="hero-tag accent">{t.home.heroTag1}</span>
              <span className="hero-tag">{t.home.heroTag2}</span>
              <span className="hero-tag">{t.home.heroTag3}</span>
            </div>
            <div className="hero-bottom">
              <h1 className="hero-title">
                {t.home.heroTitle}<br />
                <strong>{t.home.heroStrong}</strong>
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
                <span className="num">{t.home.s01label}</span>
                <span>{t.home.s01span}</span>
              </div>
              <div>
                <h2>{t.home.s01h2}</h2>
                <p className="lede">{t.home.s01lede}</p>
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
                <span className="num">{t.home.s02label}</span>
                <span>{t.home.s02span}</span>
              </div>
              <div>
                <h2>{t.home.s02h2}</h2>
                <p className="lede">{t.home.s02lede}</p>
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
                <span className="num">{t.home.s03label}</span>
                <span>{t.home.s03span}</span>
              </div>
              <div>
                <h2>{t.home.s03h2}</h2>
                <p className="lede">{t.home.s03lede}</p>
                <div className="cta-row">
                  <Link className="btn" to="/about">
                    <span>{t.home.readBio}</span><span className="arrow">→</span>
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
                <span className="num">{t.home.ctaLabel}</span>
              </div>
              <div>
                <h2>{t.home.ctaH2}</h2>
                <p className="lede">{t.home.ctaLede}</p>
                <div className="cta-row">
                  <a className="btn primary" href={`mailto:${personalInfo.email}`}>
                    <span>{t.home.emailBtn}</span><span className="arrow">→</span>
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
