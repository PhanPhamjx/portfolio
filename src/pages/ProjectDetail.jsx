import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getAllProjects } from '../data/projects';
import { useLang } from '../context/AppContext';
import Reveal from '../components/Reveal';

const ALL_IDS = [
  'dragon-quest', 'a-train9', 'a-train-tourism', 'mu-vfx',
  'phong-than-3d', 'jx1-remaster', 'kiem-hiep-tinh', 'audition-mobile',
  'death-ball', 'anatomy-study',
];

function getPlatformBadges(platformStr) {
  if (!platformStr) return [];
  return platformStr.split('·').map(p => p.trim()).filter(Boolean).map(p => {
    if (p === 'Mobile') return { cls: 'mobile', label: 'Mobile' };
    if (p === 'Nintendo Switch') return { cls: 'switch', label: 'Switch' };
    if (p === 'PC') return { cls: 'pc', label: 'PC' };
    if (p === 'PlayStation') return { cls: 'ps', label: 'PS' };
    return { cls: '', label: p };
  });
}

function Lightbox({ images, index, onClose }) {
  const [cur, setCur] = useState(index);
  const prev = () => setCur(i => (i - 1 + images.length) % images.length);
  const next = () => setCur(i => (i + 1) % images.length);

  return (
    <div className="lightbox-overlay" onClick={onClose}>
      <button className="lightbox-close" onClick={onClose}>✕</button>
      <button className="lightbox-prev" onClick={e => { e.stopPropagation(); prev(); }}>‹</button>
      <div className="lightbox-img-wrap" onClick={e => e.stopPropagation()}>
        <img src={images[cur]} alt={`Screenshot ${cur + 1}`} className="lightbox-img" />
        <p className="lightbox-counter">{cur + 1} / {images.length}</p>
      </div>
      <button className="lightbox-next" onClick={e => { e.stopPropagation(); next(); }}>›</button>
    </div>
  );
}

function Gallery({ images, title }) {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  if (!images || images.length === 0) return null;

  return (
    <>
      <div className="project-gallery-vertical">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="gallery-img-row"
            role="button"
            tabIndex={0}
            onClick={() => setLightboxIndex(idx)}
            onKeyDown={e => e.key === 'Enter' && setLightboxIndex(idx)}
          >
            <img src={src} alt={`${title} — shot ${idx + 1}`} loading="lazy" />
            <span className="cap">{String(idx + 1).padStart(2, '0')} · {title}</span>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}

export default function ProjectDetail() {
  const { id } = useParams();
  const { t } = useLang();
  const project = getAllProjects().find(p => p.id === id);

  if (!project) {
    return (
      <div className="wrap">
        <div className="not-found">
          <h1>Project not found.</h1>
          <p>The slug "{id}" doesn't match a known project.</p>
          <Link to="/projects" style={{ color: 'var(--accent)', marginTop: 16, display: 'inline-block' }}>
            ← Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  const allIds = ALL_IDS.filter(pid => getAllProjects().find(p => p.id === pid));
  const idx = allIds.indexOf(id);
  const prevId = idx > 0 ? allIds[idx - 1] : allIds[allIds.length - 1];
  const nextId = idx < allIds.length - 1 ? allIds[idx + 1] : allIds[0];
  const prevProject = getAllProjects().find(p => p.id === prevId);
  const nextProject = getAllProjects().find(p => p.id === nextId);

  const platforms = getPlatformBadges(project.platform);
  const hasImages = project.images && project.images.length > 0;
  const hasVideos = project.videos && project.videos.length > 0;
  const stack = project.tags || [];

  return (
    <div className="wrap detail-wrap">

      <Reveal>
        <Link to="/projects" className="detail-back">{t.detail.back}</Link>
        <h1 className="hero-title" style={{ fontSize: 'clamp(32px,5vw,72px)', margin: '14px 0 10px' }}>
          {project.title}
        </h1>
        <p className="lede" style={{ maxWidth: '64ch', marginBottom: 32 }}>
          {project.description}
        </p>
      </Reveal>

      {/* ─── CREDIT IMAGE ─── */}
      {project.credit && (
        <Reveal>
          <div className="project-credit">
            <img src={project.credit} alt={`${project.title} — credit`} />
          </div>
        </Reveal>
      )}

      {/* ─── HERO ─── */}
      <Reveal>
        <div className="project-hero">
          {project.images && project.images[0] ? (
            <img src={project.images[0]} alt={project.title} />
          ) : project.videos && project.videos[0] ? (
            <video src={project.videos[0]} autoPlay muted loop playsInline className="project-hero-video" />
          ) : (
            <div className="project-hero-placeholder">{project.title} — hero shot (21:9)</div>
          )}
          <div className="overlay">
            {platforms.map((p, i) => (
              <span key={i} className={`platform-badge ${p.cls}`}>{p.label}</span>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ─── META ─── */}
      <Reveal>
        <div className="project-meta">
          <div className="cell">
            <div className="k">{t.about.studioLabel}</div>
            <div className="v">{project.client || '—'} · {project.year}</div>
          </div>
          <div className="cell">
            <div className="k">{t.about.engineLabel}</div>
            <div className="v">{project.engine || '—'}</div>
          </div>
          <div className="cell">
            <div className="k">{t.about.platformLabel}</div>
            <div className="v">
              {platforms.length > 0
                ? platforms.map((p, i) => <span key={i} className={`platform-badge ${p.cls}`} style={{ marginRight: 6 }}>{p.label}</span>)
                : project.platform || '—'}
            </div>
          </div>
          <div className="cell">
            <div className="k">{t.about.roleLabel}</div>
            <div className="v">{project.role}</div>
          </div>
        </div>
      </Reveal>

      {/* ─── BODY ─── */}
      <Reveal>
        <div className="project-body">
          <div>
            <span className="eyebrow">{t.detail.s01}</span>
            <h3>{t.detail.aboutProject}</h3>
            <p>{project.description}</p>
            {project.storeLink && (
              <p>
                <a href={project.storeLink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent)' }}>
                  View on store ↗
                </a>
              </p>
            )}
          </div>
          <div>
            <span className="eyebrow">{t.detail.s02}</span>
            <h3>{t.detail.myRole}</h3>
            {project.contributions && project.contributions.length > 0 && (
              <ol>
                {project.contributions.map((c, i) => <li key={i}>{c}</li>)}
              </ol>
            )}
          </div>
        </div>
      </Reveal>

      {/* ─── STACK ─── */}
      {stack.length > 0 && (
        <Reveal>
          <div className="project-stack-section">
            <span className="eyebrow">{t.detail.s03}</span>
            <h3>{t.detail.techStack}</h3>
            <div className="project-stack">
              {stack.map((s, i) => (
                <span key={i} className="skill primary">{s}</span>
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ─── VIDEOS ─── */}
      {hasVideos && (
        <Reveal>
          <div style={{ marginBottom: 64 }}>
            <span className="eyebrow">{t.detail.s04}</span>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontWeight: 500, fontSize: 22, marginBottom: 14 }}>
              {t.detail.videoShowcase}
            </h3>
            <div className="project-videos">
              {project.videos.map((src, i) => (
                <video
                  key={i}
                  src={src}
                  controls
                  playsInline
                  className="project-video"
                  preload="metadata"
                />
              ))}
            </div>
          </div>
        </Reveal>
      )}

      {/* ─── GALLERY ─── */}
      {hasImages && (
        <Reveal>
          <div style={{ marginBottom: 64 }}>
            <span className="eyebrow">{hasVideos ? '05' : '04'} / {t.detail.gallery}</span>
            <h3 style={{ fontFamily: 'var(--ff-display)', fontWeight: 500, fontSize: 22, marginBottom: 14 }}>
              {t.detail.gallery}
              {project.images.length > 6 && (
                <span style={{ fontSize: 13, fontFamily: 'var(--ff-mono)', color: 'var(--fg2)', marginLeft: 12 }}>
                  {project.images.length} {t.detail.images}
                </span>
              )}
            </h3>
            <Gallery images={project.images} title={project.title} />
          </div>
        </Reveal>
      )}

      {/* ─── NAV ─── */}
      <div className="project-nav">
        {prevProject && (
          <Link to={`/projects/${prevProject.id}`} className="prev">
            <span className="navlabel">{t.detail.prev}</span>
            <span className="navtitle">{prevProject.title}</span>
          </Link>
        )}
        {nextProject && (
          <Link to={`/projects/${nextProject.id}`} className="next">
            <span className="navlabel">{t.detail.next}</span>
            <span className="navtitle">{nextProject.title}</span>
          </Link>
        )}
      </div>

    </div>
  );
}
