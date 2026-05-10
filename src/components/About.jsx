import { personalInfo, skills, experience } from '../data/projects';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-grid">
          <div className="about-image">
            <div className="about-image-placeholder">
              YOUR PHOTO
            </div>
          </div>

          <div>
            <div className="section-label">03 — About</div>
            <h2 className="section-title">Hi, I'm {personalInfo.shortName}</h2>

            <p
              className="about-bio"
              dangerouslySetInnerHTML={{ __html: personalInfo.bio }}
            />
            <p className="about-bio">{personalInfo.bio2}</p>

            <div className="skills">
              <div className="skills-title">3D Software</div>
              <div className="skills-list">
                {skills.art.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            <div className="skills">
              <div className="skills-title">Game Engines</div>
              <div className="skills-list">
                {skills.engines.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            <div className="skills">
              <div className="skills-title">Technical</div>
              <div className="skills-list">
                {skills.technical.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>

            <div className="skills">
              <div className="skills-title">Specialties</div>
              <div className="skills-list">
                {skills.pipelines.map((s) => <span key={s} className="skill-tag">{s}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience */}
        <div className="experience-section">
          <div className="section-label" style={{ marginBottom: '32px' }}>Work Experience</div>
          <div className="experience-list">
            {experience.map((exp, i) => (
              <div key={i} className="experience-item">
                <div className="exp-dot" />
                <div className="exp-content">
                  <div className="exp-header">
                    <span className="exp-title">{exp.title}</span>
                    <span className="exp-period">{exp.period}</span>
                  </div>
                  <div className="exp-company">{exp.company}</div>
                  <ul className="exp-highlights">
                    {exp.highlights.map((h, j) => (
                      <li key={j}>{h}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
