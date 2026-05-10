import { Link } from 'react-router-dom';
import { publishedProjects } from '../data/projects';

const CLIENT_META = {
  'Square Enix · Artdink': { label: 'Square Enix', sub: 'Artdink (Outsource)', badge: 'AAA', color: '#f59e0b' },
  'Artdink':               { label: 'Artdink',      sub: 'Studio Outsource',    badge: 'Studio', color: '#7c6aff' },
  'VTC':                   { label: 'VTC',          sub: 'Game Studio VN',      badge: 'Studio', color: '#7c6aff' },
  'Studio Project':        { label: 'Studio Project', sub: 'Commercial',        badge: 'Commercial', color: '#7c6aff' },
};

const PLATFORM_ICONS = {
  'Nintendo Switch': '🎮',
  'PC': '🖥',
  'PlayStation': '🕹',
  'Mobile': '📱',
};

function getPlatformIcons(platform) {
  if (!platform) return '';
  return platform.split(' · ').map(p => {
    const key = Object.keys(PLATFORM_ICONS).find(k => p.includes(k));
    return key ? PLATFORM_ICONS[key] : '';
  }).filter(Boolean).join(' ');
}

export default function ProductionsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <div className="section-label">Commercial Work</div>
          <h1 className="page-title">Productions</h1>
          <p className="page-desc">
            Các dự án commercial đã shipped — outsource cho studio và publisher quốc tế.
          </p>
        </div>
      </div>

      <div className="container page-body">

        {/* ─── HIGHLIGHT: AAA PROJECT ─── */}
        <div className="production-feature">
          <div className="pf-accent-line" />
          <div className="pf-body">
            <div className="pf-left">
              <div className="pf-tag aaa">AAA Title</div>
              <h2 className="pf-title">Dragon Quest HD-2D Remake</h2>
              <div className="pf-client">Square Enix × Artdink</div>
              <div className="pf-platforms">{getPlatformIcons('Nintendo Switch · PC · PlayStation')} Nintendo Switch · PC · PlayStation</div>
              <p className="pf-desc">
                Thiết kế và triển khai kiến trúc & môi trường 3D theo concept art của Square Enix.
                Phát triển custom normal map tool, smart materials, và pipeline checklist tool cho team.
              </p>
              <div className="pf-tags">
                <span className="project-tag">Hardsurface</span>
                <span className="project-tag">Environment Art</span>
                <span className="project-tag">Smart Materials</span>
                <span className="project-tag">Pipeline Tool</span>
              </div>
              <Link to="/projects/dragon-quest" className="pf-cta">Xem chi tiết →</Link>
            </div>
            <div className="pf-right">
              <div className="pf-year-badge">2023–2024</div>
              <div className="pf-thumb">
                <div className="pf-thumb-inner">
                  <span className="pf-thumb-icon">⚔️</span>
                  <span className="pf-thumb-label">Dragon Quest<br/>HD-2D Remake</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── OTHER PRODUCTIONS ─── */}
        <div className="productions-grid">
          {publishedProjects.filter(p => p.id !== 'dragon-quest').map(project => {
            const meta = CLIENT_META[project.client] || {};
            return (
              <Link to={`/projects/${project.id}`} key={project.id} className="production-card">
                <div className="pc-header">
                  <div className="pc-icon">
                    {project.id === 'a-train9'       ? '🚃' :
                     project.id === 'a-train-tourism' ? '🚋' :
                     project.id === 'audition-mobile' ? '🎵' :
                     project.id === 'golang-building' ? '🏢' : '📦'}
                  </div>
                  <div className="pc-year">{project.year}</div>
                </div>

                <h3 className="pc-title">{project.title}</h3>
                <div className="pc-client">
                  {meta.label || project.client}
                  {meta.badge && (
                    <span className="pc-badge" style={{ borderColor: meta.color, color: meta.color }}>
                      {meta.badge}
                    </span>
                  )}
                </div>
                <div className="pc-role">{project.role} · {project.platform}</div>
                <p className="pc-desc">{project.description}</p>

                <div className="pc-tags">
                  {project.tags.slice(0, 3).map(t => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>

                <div className="pc-cta">Xem chi tiết →</div>
              </Link>
            );
          })}
        </div>

        {/* ─── CTA ─── */}
        <div className="productions-cta">
          <p className="prod-cta-text">
            Muốn làm việc cùng nhau? Tôi open for freelance và outsource projects.
          </p>
          <a href="mailto:phamtung.gamedev@gmail.com" className="btn-primary">
            Get in touch →
          </a>
        </div>

      </div>
    </div>
  );
}
