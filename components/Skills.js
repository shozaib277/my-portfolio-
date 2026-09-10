// Skills Component
window.Skills = function Skills() {
  const { skillCategories } = window.PORTFOLIO_DATA;

  const colorClassMap = {
    cyan: { icon: 'cyan-icon', fill: 'fill-cyan' },
    indigo: { icon: 'indigo-icon', fill: 'fill-indigo' },
    rose: { icon: 'rose-icon', fill: 'fill-rose' }
  };

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Technical Competencies</span>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Tooling Matrix</span>
          </h2>
          <p className="section-desc">
            A balanced stack spanning analytical computation, statistical rigor, user-centric interface prototyping, and cinematic media production.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => {
            const colors = colorClassMap[cat.color] || colorClassMap.cyan;
            return (
              <div key={idx} className="glass-card skill-category-card">
                <div className="skill-cat-header">
                  <div className={`skill-cat-icon ${colors.icon}`}>
                    <i data-lucide={cat.icon}></i>
                  </div>
                  <h3 style={{ fontSize: '1.2rem' }}>{cat.category}</h3>
                </div>

                <div className="skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span>{skill.name}</span>
                        <span className="font-mono text-gradient">{skill.level}%</span>
                      </div>
                      <div className="skill-bar-track">
                        <div 
                          className={`skill-bar-fill ${colors.fill}`} 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                      <div className="skill-tags">
                        {skill.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="skill-tag">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
