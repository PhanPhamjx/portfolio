import { personalInfo, showreel, stats } from '../data/projects';

export default function Hero() {
  const renderShowreel = () => {
    if (showreel.youtubeId) {
      return (
        <iframe
          src={`https://www.youtube.com/embed/${showreel.youtubeId}?rel=0&modestbranding=1`}
          title="Showreel"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }
    if (showreel.localVideo) {
      return (
        <video controls>
          <source src={showreel.localVideo} type="video/mp4" />
        </video>
      );
    }
    return (
      <div className="showreel-placeholder">
        <button className="play-btn" aria-label="Play showreel" />
        <div className="showreel-info">
          <span>▶</span>
          <span>Showreel · {showreel.duration} · {showreel.year}</span>
        </div>
      </div>
    );
  };

  return (
    <>
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-tag">SHOWREEL {showreel.year}</div>
          <h1 className="hero-title">
            3D Artist<br />
            <span className="highlight">& Technical Artist</span>
          </h1>
          <p className="hero-subtitle">
            3+ năm kinh nghiệm modeling, texturing & pipeline tools cho game Mobile/PC.
            Định hướng Technical Artist — bridging Art & Engineering.
          </p>
          <div className="hero-meta">
            <span><span className="dot"></span>Available for work</span>
            <span>·</span>
            <span>{personalInfo.location}</span>
            <span>·</span>
            <span>Mobile · PC</span>
          </div>
        </div>

        <div className="showreel">
          {renderShowreel()}
        </div>
      </section>

      <div className="stats">
        {stats.map((s, i) => (
          <div key={i} className="stat">
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </>
  );
}
