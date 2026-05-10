import { Github } from 'lucide-react';
import { tools, skillTiers, education } from '../data/projects';

export default function ToolsPage() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <div className="section-label">Technical Art</div>
          <h1 className="page-title">Tools & Skills</h1>
          <p className="page-desc">
            Công cụ tự xây dựng, mức độ thành thạo và quá trình học tập.
          </p>
        </div>
      </div>

      <div className="container page-body">

        {/* ─── SKILL TIERS (Wolf van Veen style) ─── */}
        <section className="tools-section-block">
          <div className="section-label">Proficiency Levels</div>
          <h2 className="section-title-sm">Skills</h2>
          <p className="section-subtitle" style={{ marginBottom: '36px' }}>
            Mức độ thành thạo trong từng lĩnh vực, từ production-ready đến đang học.
          </p>

          <div className="skill-tiers">
            {skillTiers.map(tier => (
              <div key={tier.level} className="skill-tier">
                <div className="tier-header">
                  <div className="tier-dot" style={{ background: tier.color }} />
                  <div>
                    <div className="tier-level" style={{ color: tier.color }}>{tier.level}</div>
                    <div className="tier-desc">{tier.description}</div>
                  </div>
                </div>
                <div className="tier-skills">
                  {tier.skills.map(skill => (
                    <span key={skill} className="tier-skill-tag" style={{ borderColor: tier.color + '40' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ─── CUSTOM TOOLS ─── */}
        <section className="tools-section-block">
          <div className="section-label">Built by me</div>
          <h2 className="section-title-sm">Custom Tools & Scripts</h2>
          <p className="section-subtitle" style={{ marginBottom: '32px' }}>
            Công cụ tự phát triển để tối ưu pipeline.{' '}
            <a href="https://github.com/PhanPhamjx" target="_blank" rel="noopener noreferrer" className="inline-link">
              Xem GitHub →
            </a>
          </p>

          <div className="tools-grid">
            {tools.map(tool => (
              <a
                key={tool.id}
                href={tool.github}
                target="_blank"
                rel="noopener noreferrer"
                className="tool-card"
              >
                <div className="tool-icon">{tool.icon}</div>
                <h3 className="tool-name">{tool.name}</h3>
                <p className="tool-desc">{tool.description}</p>
                <div className="tool-stack">
                  <span>{tool.stack.join(' · ')}</span>
                  <Github size={13} />
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* ─── EDUCATION ─── */}
        <section className="tools-section-block">
          <div className="section-label">Learning Path</div>
          <h2 className="section-title-sm">Education & Training</h2>

          <div className="education-list" style={{ marginTop: '28px' }}>
            {education.map((edu, i) => (
              <div key={i} className="education-item">
                <div className="edu-dot" />
                <div className="edu-content">
                  <div className="edu-header">
                    <span className="edu-degree">{edu.degree}</span>
                    <span className="edu-period">{edu.period}</span>
                  </div>
                  <div className="edu-school">
                    {edu.school}
                    {edu.note && <span className="edu-note"> — {edu.note}</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}
