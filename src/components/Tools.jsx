import { Github } from 'lucide-react';
import { tools } from '../data/projects';

export default function Tools() {
  return (
    <section id="tools" className="section tools-section">
      <div className="container">
        <div style={{ marginBottom: '48px' }}>
          <div className="section-label">02 — Technical Art</div>
          <h2 className="section-title">Tools & Scripts</h2>
          <p className="section-subtitle">
            Công cụ tự xây dựng để hỗ trợ artist và tối ưu hóa production pipeline.
            Xem thêm tại GitHub.
          </p>
        </div>

        <div className="tools-grid">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.github}
              target="_blank"
              rel="noopener noreferrer"
              className="tool-card"
            >
              <div className="tool-header">
                <div className="tool-icon" style={{ fontSize: '20px' }}>
                  {tool.icon}
                </div>
              </div>
              <h3 className="tool-name">{tool.name}</h3>
              <p className="tool-desc">{tool.description}</p>
              <div className="tool-stack">
                {tool.stack.join(' · ')}
                <span style={{ marginLeft: 'auto' }}>
                  <Github size={14} />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
