import { useState } from 'react';
import { publishedProjects, personalProjects } from '../data/projects';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const allProjects = [...publishedProjects, ...personalProjects];

  const filteredProjects =
    filter === 'all' ? allProjects :
    filter === 'published' ? publishedProjects :
    filter === 'personal' ? personalProjects :
    allProjects.filter(p => p.engine.toLowerCase().includes(filter));

  return (
    <section id="work" className="section">
      <div className="container">
        <div className="projects-header">
          <div>
            <div className="section-label">01 — Selected Work</div>
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle">
              Dự án commercial và personal — 3D art, environment, và technical pipeline.
            </p>
          </div>
          <div className="filter-tabs">
            <button
              className={`filter-tab ${filter === 'all' ? 'active' : ''}`}
              onClick={() => setFilter('all')}
            >
              Tất cả ({allProjects.length})
            </button>
            <button
              className={`filter-tab ${filter === 'published' ? 'active' : ''}`}
              onClick={() => setFilter('published')}
            >
              Professional ({publishedProjects.length})
            </button>
            <button
              className={`filter-tab ${filter === 'personal' ? 'active' : ''}`}
              onClick={() => setFilter('personal')}
            >
              Personal ({personalProjects.length})
            </button>
          </div>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
