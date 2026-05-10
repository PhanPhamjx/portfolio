import { Link } from 'react-router-dom';
import { publishedProjects } from '../data/projects';
import Reveal from '../components/Reveal';

// span layout pattern for 7 projects
const SPANS = [8, 4, 6, 6, 4, 4, 4];

export default function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="wrap">
        <Reveal>
          <div className="pageheader">
            <span className="eyebrow">02 / Portfolio</span>
            <h1>All work <em>{publishedProjects.length} projects.</em></h1>
            <p className="lede">
              Environment art, shaders, VFX, modular kits and editor tooling — shipped titles
              across mobile MMORPG, Nintendo Switch, PC and PlayStation.
            </p>
          </div>
        </Reveal>
      </div>

      <section className="section" style={{ paddingTop: 48 }}>
        <div className="wrap">
          <Reveal>
            <div className="workgrid">
              {publishedProjects.map((project, i) => {
                const span = SPANS[i] || 6;
                const ratio = span === 8 || span === 12 ? 'wide' : span === 4 ? '' : '';
                return (
                  <Link
                    key={project.id}
                    className={`work span-${span}${ratio ? ' ' + ratio : ''}`}
                    to={`/projects/${project.id}`}
                  >
                    <div
                      className="work-thumb"
                      style={!project.thumbnail && project.thumbColor
                        ? { background: project.thumbColor }
                        : {}}
                    >
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          loading={i < 3 ? 'eager' : 'lazy'}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                      ) : (
                        <div className="work-thumb-placeholder">{project.title}</div>
                      )}
                    </div>

                    <div className="work-overlay">
                      {project.featured && <span className="badge live">● Featured</span>}
                      <span className="badge">{project.engine}</span>
                      <span className="badge">{project.platform}</span>
                    </div>

                    <div className="work-meta">
                      <h3>{project.title}</h3>
                      <span className="work-tag cat">{project.client || project.role}</span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
