// Hero Component
window.Hero = function Hero({ onOpenResume }) {
  const { personal } = window.PORTFOLIO_DATA;
  const [roleIndex, setRoleIndex] = React.useState(0);
  const roles = [
    "Data Analyst & Insights Specialist",
    "Data Scientist & EDA Practitioner",
    "UI/UX & Dashboard Architect",
    "Multimedia & Video Storyteller"
  ];

  React.useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="hero" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-content">
            <div className="hero-tag">
              <span className="status-dot"></span>
              <span>{personal.availability}</span>
            </div>

            <h1 className="hero-name">
              Hello, I'm <br />
              <span className="text-gradient">{personal.name}</span>
            </h1>

            <div className="hero-title-wrap">
              <span className="hero-dynamic-title">&gt; {roles[roleIndex]}</span>
            </div>

            <p className="hero-bio">
              {personal.bio}
            </p>

            <div className="hero-cta-group">
              <a href="#projects" className="btn btn-primary">
                <i data-lucide="grid"></i>
                <span>Explore Projects</span>
              </a>

              <button onClick={onOpenResume} className="btn btn-secondary">
                <i data-lucide="file-check"></i>
                <span>Review & Print CV</span>
              </button>

              <a 
                href={personal.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
              >
                <i data-lucide="message-circle"></i>
                <span>WhatsApp Chat</span>
              </a>
            </div>

            <div className="hero-meta-items">
              <div className="hero-meta-item">
                <i data-lucide="map-pin" style={{ color: 'var(--cyan-primary)' }}></i>
                <span>{personal.location}</span>
              </div>
              <div className="hero-meta-item">
                <i data-lucide="mail" style={{ color: 'var(--cyan-primary)' }}></i>
                <span>{personal.email}</span>
              </div>
              <div className="hero-meta-item">
                <i data-lucide="phone" style={{ color: 'var(--cyan-primary)' }}></i>
                <span>{personal.phone}</span>
              </div>
            </div>
          </div>

          <div className="hero-visual-card">
            <div className="glass-card hero-card-inner">
              <div className="hero-avatar-glow">
                <span className="hero-initials">MSM</span>
              </div>

              <div style={{ textAlign: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ fontSize: '1.25rem' }}>{personal.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                  Data Analytics &bull; Figma UI/UX &bull; Premiere Pro
                </p>
              </div>

              <div className="hero-stats-grid">
                {personal.stats.map((stat, idx) => (
                  <div key={idx} className="stat-box">
                    <div className="stat-val">{stat.value}</div>
                    <div className="stat-lbl">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
