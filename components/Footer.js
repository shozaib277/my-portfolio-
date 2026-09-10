// Footer Component
window.Footer = function Footer({ onOpenResume }) {
  const { personal } = window.PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="brand-logo" style={{ marginBottom: '0.8rem' }}>
              <div className="brand-icon">SM</div>
              <div>
                <span className="brand-title">{personal.name}</span>
                <span className="brand-subtitle">Data Analyst &bull; UI/UX &bull; Media</span>
              </div>
            </div>
            <p className="footer-desc">
              Transforming complex data into actionable insights, designing human-centric executive dashboards, 
              and crafting motion visual narratives.
            </p>
          </div>

          <div className="footer-col">
            <h5>Quick Navigation</h5>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#synergy">Synergy Matrix</a></li>
              <li><a href="#datalab">Interactive Data Lab</a></li>
              <li><a href="#skills">Technical Skills</a></li>
              <li><a href="#projects">Portfolio Showcases</a></li>
              <li><a href="#experience">Experience &amp; Education</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h5>Get in Touch</h5>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${personal.email}`}>
                  <i data-lucide="mail" style={{ width: 14, height: 14, marginRight: 6 }}></i>
                  {personal.email}
                </a>
              </li>
              <li>
                <a href={personal.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <i data-lucide="message-circle" style={{ width: 14, height: 14, marginRight: 6 }}></i>
                  WhatsApp: {personal.phone}
                </a>
              </li>
              <li>
                <a href={`tel:${personal.phoneIntl}`}>
                  <i data-lucide="phone" style={{ width: 14, height: 14, marginRight: 6 }}></i>
                  Phone: {personal.phone}
                </a>
              </li>
              <li style={{ marginTop: '0.8rem' }}>
                <button 
                  onClick={onOpenResume} 
                  className="btn btn-secondary btn-sm"
                >
                  <i data-lucide="printer"></i>
                  <span>Printable CV</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div>
            &copy; {new Date().getFullYear()} Muhammad Shozaib Mehdi. All rights reserved.
          </div>
          <button 
            onClick={scrollToTop} 
            className="btn btn-secondary btn-sm"
            style={{ padding: '0.35rem 0.8rem' }}
          >
            <i data-lucide="arrow-up"></i>
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
