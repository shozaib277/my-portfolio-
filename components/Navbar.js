// Navbar Component
window.Navbar = function Navbar({ theme, toggleTheme, onOpenResume, activeSection }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const navItems = [
    { label: "About & Synergy", href: "#synergy" },
    { label: "Data Lab", href: "#datalab" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" }
  ];

  return (
    <header className="site-nav">
      <div className="container nav-inner">
        <a href="#hero" className="brand-logo">
          <div className="brand-icon">SM</div>
          <div>
            <span className="brand-title">Shozaib Mehdi</span>
            <span className="brand-subtitle">Data &bull; UI/UX &bull; Media</span>
          </div>
        </a>

        <nav className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <button 
            className="theme-toggle-btn"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            <i data-lucide={theme === 'dark' ? 'sun' : 'moon'}></i>
          </button>

          <button 
            className="btn btn-secondary btn-sm"
            onClick={onOpenResume}
          >
            <i data-lucide="file-text"></i>
            <span>CV View</span>
          </button>

          <a 
            href={window.PORTFOLIO_DATA.personal.whatsappUrl}
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <i data-lucide="send"></i>
            <span>Hire Me</span>
          </a>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Open Navigation Menu"
          >
            <i data-lucide={mobileOpen ? 'x' : 'menu'}></i>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="mobile-nav-drawer container">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};
