// Main React Application
const { useState, useEffect } = React;

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('shozaib_theme') || 'dark';
  });
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);
  const [activeSection, setActiveSection] = useState('hero');

  // Apply theme to body
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('shozaib_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Re-run Lucide icons whenever DOM changes
  useEffect(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
  });

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'synergy', 'datalab', 'skills', 'projects', 'experience', 'contact'];
      const scrollY = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      {/* Ambient background light effects */}
      <div className="ambient-bg">
        <div className="ambient-blob blob-1"></div>
        <div className="ambient-blob blob-2"></div>
        <div className="ambient-blob blob-3"></div>
      </div>

      {/* Navigation */}
      <window.Navbar 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onOpenResume={() => setResumeOpen(true)}
        activeSection={activeSection}
      />

      {/* Main Sections */}
      <main>
        <window.Hero 
          onOpenResume={() => setResumeOpen(true)} 
        />
        
        <window.CVAnalysis 
          onOpenResume={() => setResumeOpen(true)} 
        />

        <window.LiveDataLab />

        <window.Skills />

        <window.Projects 
          onSelectProject={(p) => setSelectedProject(p)} 
        />

        <window.ExperienceEdu />

        <window.Contact 
          onShowToast={showToast} 
        />
      </main>

      {/* Footer */}
      <window.Footer 
        onOpenResume={() => setResumeOpen(true)} 
      />

      {/* CV Modal */}
      <window.ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
        onShowToast={showToast}
      />

      {/* Project Case Study Modal */}
      <window.ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="toast-notice">
          <i data-lucide="info" style={{ color: 'var(--cyan-primary)' }}></i>
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

// Render React App
const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
