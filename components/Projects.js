// Projects Component
window.Projects = function Projects({ onSelectProject }) {
  const { projects } = window.PORTFOLIO_DATA;
  const [filter, setFilter] = React.useState('all');

  const filters = [
    { id: 'all', label: 'All Showcases' },
    { id: 'data-analytics', label: 'Data Science & EDA' },
    { id: 'ui-ux', label: 'Figma UI/UX' },
    { id: 'media', label: 'Video & Motion Media' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Featured Case Studies</span>
          <h2 className="section-title">
            Crafted <span className="text-gradient">Projects & Work</span>
          </h2>
          <p className="section-desc">
            Explore commercial and analytical projects demonstrating raw data preprocessing, 
            Figma design systems, and engaging video storytelling assets.
          </p>
        </div>

        <div className="projects-filter-bar">
          {filters.map((f) => (
            <button
              key={f.id}
              className={`filter-btn ${filter === f.id ? 'active' : ''}`}
              onClick={() => setFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className={`project-header-preview ${'theme-' + project.imageTheme}`}>
                <div className="preview-badge-overlay">
                  <span className="badge badge-cyan">{project.categoryLabel}</span>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <i 
                    data-lucide={
                      project.category === 'data-analytics' ? 'database' :
                      project.category === 'ui-ux' ? 'layout' : 'film'
                    }
                    style={{ width: 44, height: 44, color: '#ffffff', opacity: 0.9 }}
                  ></i>
                </div>
              </div>

              <div className="project-body">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-summary">{project.summary}</p>

                <div className="project-metrics-grid">
                  {project.metrics.map((m, mIdx) => (
                    <div key={mIdx} className="metric-pill">
                      <div className="metric-pill-val">{m.value}</div>
                      <div className="metric-pill-lbl">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="project-tools">
                  {project.tools.map((t, tIdx) => (
                    <span key={tIdx} className="tool-chip">{t}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <button 
                    className="btn btn-secondary btn-sm" 
                    style={{ width: '100%' }}
                    onClick={() => onSelectProject(project)}
                  >
                    <i data-lucide="external-link"></i>
                    <span>Read Case Study</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
