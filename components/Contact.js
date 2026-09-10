// Contact Component
window.Contact = function Contact({ onShowToast }) {
  const { personal } = window.PORTFOLIO_DATA;
  const [formData, setFormData] = React.useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      onShowToast("Please fill in all required fields.");
      return;
    }

    // Construct mailto link
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}: ${formData.subject || 'Opportunity'}`);
    const mailtoBody = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    
    window.location.href = `mailto:${personal.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSent(true);
    onShowToast("Opening your email client to send message!");
  };

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text).then(() => {
      onShowToast(`${label} copied to clipboard!`);
    }).catch(() => {
      onShowToast(`Copied: ${text}`);
    });
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">
            Let's Build <span className="text-gradient">Something Impactful</span>
          </h2>
          <p className="section-desc">
            Seeking opportunities in Data Analytics, Data Science, and UI/UX design. 
            Feel free to reach out via WhatsApp, email, or send a message below.
          </p>
        </div>

        <div className="contact-grid">
          <div className="glass-card contact-info-card">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Direct Contact Channels</h3>

            <a 
              href={personal.whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-channel"
            >
              <div className="channel-icon" style={{ background: 'rgba(37, 211, 102, 0.15)', color: '#25D366' }}>
                <i data-lucide="message-circle"></i>
              </div>
              <div className="channel-meta" style={{ flexGrow: 1 }}>
                <h5>WhatsApp Direct</h5>
                <p>+92 342 2738704 (Chat Now)</p>
              </div>
              <i data-lucide="arrow-up-right" style={{ color: '#25D366' }}></i>
            </a>

            <div className="contact-channel" style={{ cursor: 'pointer' }} onClick={() => copyToClipboard(personal.email, "Email")}>
              <div className="channel-icon mail">
                <i data-lucide="mail"></i>
              </div>
              <div className="channel-meta" style={{ flexGrow: 1 }}>
                <h5>Email Address</h5>
                <p>{personal.email}</p>
              </div>
              <button 
                className="btn btn-secondary btn-sm" 
                style={{ padding: '0.3rem 0.6rem' }}
                title="Copy Email"
                onClick={(e) => { e.stopPropagation(); copyToClipboard(personal.email, "Email"); }}
              >
                <i data-lucide="copy"></i>
              </button>
            </div>

            <a href={`tel:${personal.phoneIntl}`} className="contact-channel">
              <div className="channel-icon phone">
                <i data-lucide="phone"></i>
              </div>
              <div className="channel-meta" style={{ flexGrow: 1 }}>
                <h5>Direct Phone Call</h5>
                <p>{personal.phone}</p>
              </div>
              <i data-lucide="arrow-up-right" style={{ color: 'var(--emerald-primary)' }}></i>
            </a>

            <div className="contact-channel">
              <div className="channel-icon map">
                <i data-lucide="map-pin"></i>
              </div>
              <div className="channel-meta">
                <h5>Location</h5>
                <p>{personal.location}</p>
              </div>
            </div>

            <div style={{ marginTop: '1.5rem', padding: '1rem', background: 'var(--bg-tertiary)', borderRadius: 'var(--radius-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.3rem' }}>
                <span className="status-dot"></span>
                <span style={{ fontWeight: 700, fontSize: '0.88rem' }}>Fast Response Time</span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Usually replies within a few hours on WhatsApp and Email.
              </p>
            </div>
          </div>

          <div className="glass-card contact-form-card">
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1.25rem' }}>Send a Direct Message</h3>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Your Name *</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="e.g. John Doe / Hiring Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Your Email *</label>
                <input 
                  type="email" 
                  className="form-input" 
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subject / Role Opportunity</label>
                <input 
                  type="text" 
                  className="form-input" 
                  placeholder="Data Analyst / UI/UX Role or Project"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Message *</label>
                <textarea 
                  className="form-textarea" 
                  placeholder="Hello Shozaib, I'd like to discuss an opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                <i data-lucide="send"></i>
                <span>Submit & Open Mail</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
