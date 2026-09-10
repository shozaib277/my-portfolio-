// CV Analysis & Hybrid Synergy Component
window.CVAnalysis = function CVAnalysis({ onOpenResume }) {
  const { synergyPoints } = window.PORTFOLIO_DATA;

  return (
    <section id="synergy">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">CV Analysis & Strategic Advantage</span>
          <h2 className="section-title">
            The <span className="text-gradient">Hybrid Synergy</span> Model
          </h2>
          <p className="section-desc">
            Traditional data analysts stop at spreadsheets. Pure designers lack quantitative depth. 
            My background combines rigorous data processing with human-centric UI/UX design and video storytelling.
          </p>
        </div>

        <div className="synergy-grid">
          {synergyPoints.map((point, idx) => (
            <div key={idx} className={`glass-card synergy-card ${point.color}`}>
              <div>
                <div className="synergy-icon-wrap">
                  <i data-lucide={point.icon}></i>
                </div>
                <span className="badge badge-cyan" style={{ marginBottom: '0.8rem' }}>
                  {point.badge}
                </span>
                <h3>{point.title}</h3>
                <p>{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="synergy-banner">
          <div className="synergy-banner-content">
            <h4>Bridging Raw Data into Business Value</h4>
            <p>
              From raw unstructured datasets to clean statistical models, intuitive Figma dashboards, 
              and dynamic video reports—ready to accelerate product and data teams.
            </p>
          </div>
          <button onClick={onOpenResume} className="btn btn-primary" style={{ whiteSpace: 'nowrap' }}>
            <i data-lucide="eye"></i>
            <span>View Full Resume Data</span>
          </button>
        </div>
      </div>
    </section>
  );
};
