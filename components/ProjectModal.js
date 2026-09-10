// Project Deep Dive Modal Component
window.ProjectModal = function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <span className="badge badge-cyan" style={{ marginBottom: '0.3rem' }}>{project.categoryLabel}</span>
            <h3 style={{ fontSize: '1.4rem' }}>{project.title}</h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close Modal">
            <i data-lucide="x"></i>
          </button>
        </div>

        <div className="modal-body">
          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1.1rem', color: 'var(--cyan-primary)', marginBottom: '0.4rem' }}>
              Project Overview & Problem Statement
            </h4>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
              {project.description}
            </p>
          </div>

          <div style={{ marginBottom: '1.5rem', background: 'var(--bg-tertiary)', padding: '1.25rem', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '1rem', color: 'var(--emerald-primary)', marginBottom: '0.3rem' }}>
              Quantifiable Business Impact
            </h4>
            <p style={{ fontWeight: 600 }}>{project.impact}</p>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem' }}>Key Performance Metrics</h4>
            <div className="hero-stats-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="stat-box">
                  <div className="stat-val">{m.value}</div>
                  <div className="stat-lbl">{m.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.6rem' }}>Applied Technologies & Methodologies</h4>
            <div className="project-tools">
              {project.tools.map((t, idx) => (
                <span key={idx} className="tool-chip" style={{ fontSize: '0.82rem', padding: '0.35rem 0.75rem' }}>{t}</span>
              ))}
            </div>
          </div>

          <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
            <a 
              href={window.PORTFOLIO_DATA.personal.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-sm"
            >
              <i data-lucide="message-circle"></i>
              <span>Discuss Similar Project</span>
            </a>
            <button className="btn btn-secondary btn-sm" onClick={onClose}>
              <span>Close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
