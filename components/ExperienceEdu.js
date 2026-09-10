// Experience & Education Timeline Component
window.ExperienceEdu = function ExperienceEdu() {
  const { experience, education, personal, testimonials } = window.PORTFOLIO_DATA;

  return (
    <section id="experience">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Career Path & Qualifications</span>
          <h2 className="section-title">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="section-desc">
            A track record of translating commercial raw datasets into visual intelligence, accompanied by solid technical education.
          </p>
        </div>

        <div className="experience-edu-grid">
          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <i data-lucide="briefcase" style={{ color: 'var(--cyan-primary)' }}></i>
              <span>Professional Experience</span>
            </h3>

            <div className="timeline">
              {experience.map((item, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="glass-card timeline-content">
                    <div className="exp-header">
                      <div>
                        <h4 className="exp-role">{item.role}</h4>
                        <div className="exp-company">{item.company} &bull; {item.location}</div>
                      </div>
                      <span className="badge badge-cyan">{item.period}</span>
                    </div>

                    <ul className="exp-bullets">
                      {item.highlights.map((bullet, bIdx) => (
                        <li key={bIdx}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="project-tools">
                      {item.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="tool-chip">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem' }}>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <i data-lucide="message-square" style={{ color: 'var(--purple-primary)' }}></i>
                <span>Client & Collaborator Feedback</span>
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {testimonials.map((t, idx) => (
                  <div key={idx} className="glass-card" style={{ padding: '1.4rem' }}>
                    <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '0.8rem', fontSize: '0.92rem' }}>
                      "{t.quote}"
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>{t.author}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{t.role}</div>
                      </div>
                      <div style={{ color: '#fbbf24', fontSize: '0.9rem' }}>
                        {'★'.repeat(t.rating)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <i data-lucide="graduation-cap" style={{ color: 'var(--emerald-primary)' }}></i>
              <span>Academic Education</span>
            </h3>

            <div>
              {education.map((edu, idx) => (
                <div key={idx} className="glass-card edu-card">
                  <div className="edu-header">
                    <div className="edu-icon-box">
                      <i data-lucide={edu.icon}></i>
                    </div>
                    <div>
                      <h4 className="edu-degree">{edu.degree}</h4>
                      <div className="edu-inst">{edu.institution}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                    <strong>Focus:</strong> {edu.focus}
                  </div>
                  <div style={{ marginTop: '0.6rem' }}>
                    <span className="badge badge-emerald">{edu.badge}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card lang-meter-wrap">
              <h4 style={{ fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <i data-lucide="globe" style={{ color: 'var(--cyan-primary)' }}></i>
                <span>Language Proficiencies</span>
              </h4>

              {personal.languages.map((lang, idx) => (
                <div key={idx} className="lang-row">
                  <div className="lang-top">
                    <span>{lang.name}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{lang.level}</span>
                  </div>
                  <div className="skill-bar-track">
                    <div 
                      className="skill-bar-fill fill-cyan" 
                      style={{ width: `${lang.percent}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
