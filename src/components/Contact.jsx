import { Mail, Github, Linkedin, Youtube, Palette } from 'lucide-react';
import { personalInfo } from '../data/projects';

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-label" style={{ textAlign: 'center' }}>
          04 — Get In Touch
        </div>
        <h2 className="contact-title">Let's build worlds together.</h2>
        <p className="section-subtitle" style={{ margin: '0 auto', textAlign: 'center' }}>
          Open to full-time positions, freelance projects, and collaborations.
          Feel free to reach out!
        </p>

        <a href={`mailto:${personalInfo.email}`} className="contact-email">
          <Mail size={24} />
          {personalInfo.email}
        </a>

        <div className="contact-socials">
          <a href={personalInfo.socials.artstation} target="_blank" rel="noopener noreferrer" className="social-link">
            <Palette size={16} />
            ArtStation
          </a>
          <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="social-link">
            <Github size={16} />
            GitHub
          </a>
          <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
            <Linkedin size={16} />
            LinkedIn
          </a>
          <a href={personalInfo.socials.youtube} target="_blank" rel="noopener noreferrer" className="social-link">
            <Youtube size={16} />
            YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
