// Resume / CV Modal Component
window.ResumeModal = function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const { personal, experience, education, skillCategories } = window.PORTFOLIO_DATA;

  const handlePrint = () => {
    window.print();
  };

  const copyCvSummary = () => {
    const text = `
${personal.name}
${personal.title}
Phone: ${personal.phone} | Email: ${personal.email} | Location: ${personal.location}

CAREER OBJECTIVE:
${personal.bio}

SKILLS:
- Data Analytics & Science: Data Preprocessing & Cleaning, Exploratory Data Analysis (EDA), Statistical Analysis, Data Visualization.
- UI/UX & Design: Adobe Figma, Interface Prototyping, Dashboard Layout & Wireframing.
- Media & Video: Adobe Premiere Pro, CapCut, Video Storytelling.

EXPERIENCE:
Data & Visual Content Specialist (Self-Employed / Freelance | 2024 - Present)
- Analyzed raw data trends and translated complex information into clear, visual dashboards and interface mockups.
- Applied UI/UX principles in Adobe Figma to design intuitive reporting layouts and user-centric presentation decks.
- Utilized Adobe Premiere Pro and CapCut to edit visual content, producing engaging data-driven multimedia materials.
- Cleaned, structured, and processed unstructured datasets to extract meaningful commercial insights.

EDUCATION:
- Diploma of Associate Engineering (DAE) - Aligarh Institute of Technology
- Matriculation - Uswa Public School and College Yulter
    `.trim();

    navigator.clipboard.writeText(text).then(() => {
      onShowToast("CV summary copied to clipboard!");
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '900px' }} onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <i data-lucide="file-text" style={{ color: 'var(--cyan-primary)' }}></i>
            <div>
              <h3 style={{ fontSize: '1.25rem' }}>Curriculum Vitae Preview</h3>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                ATS-Optimized &bull; Print-Ready
              </span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <button className="btn btn-secondary btn-sm" onClick={copyCvSummary}>
              <i data-lucide="copy"></i>
              <span>Copy Text</span>
            </button>
            <button className="btn btn-primary btn-sm" onClick={handlePrint}>
              <i data-lucide="printer"></i>
              <span>Print / Save PDF</span>
            </button>
            <button className="modal-close-btn" onClick={onClose} aria-label="Close CV Modal">
              <i data-lucide="x"></i>
            </button>
          </div>
        </div>

        <div className="modal-body" style={{ background: '#0a0f1d' }}>
          {/* Printable White Sheet */}
          <div className="cv-sheet">
            <div className="cv-sheet-header">
              <h1 className="cv-sheet-name">{personal.name.toUpperCase()}</h1>
              <div className="cv-sheet-title">
                DATA ANALYST | DATA SCIENTIST | UI/UX &amp; MEDIA SPECIALIST
              </div>
              <div className="cv-sheet-contact">
                <span><strong>Phone:</strong> {personal.phone}</span>
                <span>&bull;</span>
                <span><strong>Email:</strong> {personal.email}</span>
                <span>&bull;</span>
                <span><strong>Location:</strong> {personal.location}</span>
              </div>
            </div>

            <div className="cv-sheet-section">
              <h2 className="cv-sheet-section-title">Career Objective</h2>
              <p style={{ fontSize: '0.92rem', color: '#334155', lineHeight: 1.65 }}>
                Motivated Data Analyst / Data Scientist with a unique blend of technical data handling 
                and creative UI/UX design capabilities. Dedicated to bridging the gap between complex 
                data analytics, intuitive interface design, and engaging visual media. Seeking an entry-level 
                Data Analyst / Data Scientist role to leverage analytical problem-solving and presentation skills 
                to drive data-informed business decisions.
              </p>
            </div>

            <div className="cv-sheet-grid">
              <div className="cv-sheet-section">
                <h2 className="cv-sheet-section-title">Technical Skills</h2>

                <div style={{ marginBottom: '0.8rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#0369a1' }}>Data Analytics &amp; Science</strong>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', marginTop: '0.2rem' }}>
                    <li>Data Preprocessing &amp; Cleaning</li>
                    <li>Exploratory Data Analysis (EDA)</li>
                    <li>Statistical Analysis &amp; Insights</li>
                    <li>Data Visualization</li>
                    <li>Reporting &amp; Presentation</li>
                  </ul>
                </div>

                <div style={{ marginBottom: '0.8rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#0369a1' }}>UI/UX &amp; Design Tools</strong>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', marginTop: '0.2rem' }}>
                    <li>Adobe Figma</li>
                    <li>Interface Prototyping</li>
                    <li>User-Centric Design</li>
                    <li>Dashboard Layout &amp; Wireframing</li>
                  </ul>
                </div>

                <div>
                  <strong style={{ fontSize: '0.9rem', color: '#0369a1' }}>Video Editing &amp; Media Tools</strong>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', marginTop: '0.2rem' }}>
                    <li>Adobe Premiere Pro</li>
                    <li>CapCut</li>
                    <li>Video Storytelling &amp; Motion Editing</li>
                    <li>Visual Asset Creation</li>
                  </ul>
                </div>

                <div style={{ marginTop: '0.8rem' }}>
                  <strong style={{ fontSize: '0.9rem', color: '#0369a1' }}>Languages</strong>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', marginTop: '0.2rem' }}>
                    <li>English (Professional)</li>
                    <li>Urdu (Native)</li>
                    <li>Balti (Native)</li>
                  </ul>
                </div>
              </div>

              <div>
                <div className="cv-sheet-section">
                  <h2 className="cv-sheet-section-title">Professional Experience</h2>
                  <div style={{ marginBottom: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                      <strong style={{ fontSize: '0.95rem', color: '#0f172a' }}>Data &amp; Visual Content Specialist</strong>
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#0284c7', fontStyle: 'italic', marginBottom: '0.4rem' }}>
                      Self-Employed / Freelance | 2024 &ndash; Present
                    </div>
                    <ul style={{ paddingLeft: '1.2rem', fontSize: '0.86rem', color: '#334155', lineHeight: 1.55 }}>
                      <li>Analyzed raw data trends and translated complex information into clear, visual dashboards and interface mockups.</li>
                      <li>Applied UI/UX principles in Adobe Figma to design intuitive reporting layouts and user-centric presentation decks.</li>
                      <li>Utilized Adobe Premiere Pro and CapCut to edit visual content, producing engaging data-driven multimedia materials.</li>
                      <li>Cleaned, structured, and processed unstructured datasets to extract meaningful commercial insights.</li>
                    </ul>
                  </div>
                </div>

                <div className="cv-sheet-section">
                  <h2 className="cv-sheet-section-title">Education</h2>
                  <div style={{ marginBottom: '0.8rem' }}>
                    <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>Diploma of Associate Engineering (DAE)</strong>
                    <div style={{ fontSize: '0.85rem', color: '#0284c7', fontStyle: 'italic' }}>
                      Aligarh Institute of Technology
                    </div>
                  </div>
                  <div>
                    <strong style={{ fontSize: '0.92rem', color: '#0f172a' }}>Matriculation</strong>
                    <div style={{ fontSize: '0.85rem', color: '#0284c7', fontStyle: 'italic' }}>
                      Uswa Public School and College Yulter
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
