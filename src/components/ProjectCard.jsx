import { Link } from 'react-router-dom';

const ENGINE_LABEL = {
  'Unity (URP)': 'Unity',
  'Unreal Engine': 'Unreal',
};

export default function ProjectCard({ project }) {
  const isComingSoon = project.status === 'Coming Soon';
  const engineLabel = ENGINE_LABEL[project.engine] || project.engine;
  const showEngine = engineLabel && !['Studio', 'Mobile'].includes(engineLabel);

  const thumbStyle = !project.thumbnail && project.thumbColor
    ? { background: project.thumbColor }
    : {};

  return (
    <article className={`project-card${project.featured ? ' featured' : ''}${isComingSoon ? ' coming-soon-card' : ''}`}>
      {isComingSoon ? (
        <div className="project-thumb" style={thumbStyle}>
          <div className="project-thumb-fallback coming-soon-fallback">
            <span className="cs-icon">✦</span>
            <span>Coming Soon</span>
          </div>
          <div className="project-overlay">
            <span className="project-badge">{showEngine ? engineLabel : project.platform}</span>
            <span className="project-status">{project.status} · {project.year}</span>
          </div>
        </div>
      ) : (
        <Link to={`/projects/${project.id}`} className="project-thumb-link">
          <div className="project-thumb" style={thumbStyle}>
            {project.thumbnail ? (
              <img src={project.thumbnail} alt={project.title} loading="lazy" />
            ) : (
              <div className="project-thumb-fallback">
                <span className="thumb-title-text">{project.title.split(' ').slice(0, 3).join(' ')}</span>
                {project.client && <span className="thumb-client-text">{project.client}</span>}
              </div>
            )}
            <div className="project-overlay">
              <span className={`project-badge${project.status === 'Published' ? ' published' : ''}`}>
                {showEngine ? engineLabel : project.status}
              </span>
              <span className="project-status">{project.year}</span>
            </div>
            <div className="project-hover-cta">View Details →</div>
          </div>
        </Link>
      )}

      <div className="project-info">
        <h3 className="project-title">
          {isComingSoon ? project.title : (
            <Link to={`/projects/${project.id}`}>{project.title}</Link>
          )}
        </h3>

        <div className="project-meta">
          {project.role}
          {project.client ? <span className="meta-client"> · {project.client}</span> : null}
          {project.platform ? <span> · {project.platform}</span> : null}
        </div>

        {project.description && (
          <p className="project-desc">{project.description}</p>
        )}

        {project.tags && project.tags.length > 0 && (
          <div className="project-tags">
            {project.tags.slice(0, 5).map(tag => (
              <span key={tag} className="project-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
