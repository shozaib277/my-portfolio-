// Live Data Science & Analytics Playground (LiveDataLab)
window.LiveDataLab = function LiveDataLab() {
  const [activeTab, setActiveTab] = React.useState('trends');
  const chartCanvasRef = React.useRef(null);
  const chartInstanceRef = React.useRef(null);

  const tabs = [
    { id: 'trends', label: '1. Growth & EDA Trends', icon: 'trending-up' },
    { id: 'funnel', label: '2. Conversion Funnel', icon: 'filter' },
    { id: 'cleaning', label: '3. Data Cleaning Anomaly Audit', icon: 'shield-check' },
    { id: 'usability', label: '4. UX Dashboard Engagement', icon: 'eye' }
  ];

  const datasetConfigs = {
    trends: {
      title: "Exploratory Trend & Rolling Average Model",
      metrics: [
        { label: "Net Revenue Vol", value: "$482.4K", delta: "+18.4%", pos: true },
        { label: "EDA Correlation (r)", value: "0.89", delta: "High Signal", pos: true },
        { label: "Confidence Interval", value: "95.0%", delta: "p < 0.01", pos: true },
        { label: "Outliers Identified", value: "38 rows", delta: "Sanitized", pos: true }
      ],
      render: (ctx) => {
        return new window.Chart(ctx, {
          type: 'line',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [
              {
                label: 'Raw Monthly Transaction Vol ($K)',
                data: [28, 34, 42, 39, 55, 62, 58, 71, 84, 92, 108, 120],
                borderColor: '#00f2fe',
                backgroundColor: 'rgba(0, 242, 254, 0.12)',
                fill: true,
                tension: 0.35,
                borderWidth: 3,
                pointRadius: 4,
                pointBackgroundColor: '#00f2fe'
              },
              {
                label: 'Statistical Moving Average (Smoothed)',
                data: [26, 31, 38, 41, 49, 58, 63, 71, 82, 94, 102, 116],
                borderColor: '#a855f7',
                borderDash: [5, 5],
                borderWidth: 2,
                fill: false,
                tension: 0.2,
                pointRadius: 0
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans' } } },
              tooltip: { backgroundColor: '#131f38', titleColor: '#00f2fe', bodyColor: '#f8fafc', padding: 12 }
            },
            scales: {
              x: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#94a3b8' } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#94a3b8' } }
            }
          }
        });
      }
    },

    funnel: {
      title: "Commercial Funnel & User Drop-Off Analysis",
      metrics: [
        { label: "Top-of-Funnel Traffic", value: "128,400", delta: "+12.1%", pos: true },
        { label: "Product View Rate", value: "54.2%", delta: "69,590 users", pos: true },
        { label: "Checkout Conversion", value: "14.8%", delta: "+3.2% vs avg", pos: true },
        { label: "Cart Abandonment Drop", value: "24.1%", delta: "-9.4% optimized", pos: true }
      ],
      render: (ctx) => {
        return new window.Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['1. Landing Traffic', '2. Catalog View', '3. Item Configured', '4. Cart Added', '5. Checkout Step', '6. Paid Success'],
            datasets: [{
              label: 'Funnel Progression (Volume)',
              data: [128400, 69590, 48200, 31400, 24100, 18950],
              backgroundColor: [
                'rgba(0, 242, 254, 0.85)',
                'rgba(79, 172, 254, 0.85)',
                'rgba(99, 102, 241, 0.85)',
                'rgba(168, 85, 247, 0.85)',
                'rgba(244, 63, 94, 0.85)',
                'rgba(16, 185, 129, 0.95)'
              ],
              borderRadius: 8
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
              tooltip: { backgroundColor: '#131f38', titleColor: '#00f2fe', bodyColor: '#f8fafc', padding: 12 }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
              y: { grid: { color: 'rgba(255,255,255,0.06)' }, ticks: { color: '#94a3b8' } }
            }
          }
        });
      }
    },

    cleaning: {
      title: "Data Cleansing: Anomaly & Null Value Resolution Audit",
      metrics: [
        { label: "Total Raw Records", value: "50,000", delta: "12 Sources", pos: true },
        { label: "Null / Missing Imputed", value: "4,210", delta: "KNN/Median", pos: true },
        { label: "Duplicates De-duped", value: "1,890", delta: "Exact Match", pos: true },
        { label: "Clean Accuracy Score", value: "99.4%", delta: "Validated", pos: true }
      ],
      render: (ctx) => {
        return new window.Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Validated Clean Rows (99.4%)', 'Imputed Nulls & Missing', 'Outliers Sanitized', 'Normalized Categoricals'],
            datasets: [{
              data: [43900, 4210, 1420, 470],
              backgroundColor: ['#10b981', '#00f2fe', '#f59e0b', '#a855f7'],
              borderColor: '#0d1527',
              borderWidth: 3
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { position: 'bottom', labels: { color: '#94a3b8', padding: 16, font: { family: 'Plus Jakarta Sans' } } },
              tooltip: { backgroundColor: '#131f38', titleColor: '#00f2fe', bodyColor: '#f8fafc', padding: 12 }
            }
          }
        });
      }
    },

    usability: {
      title: "Figma UI/UX Usability Benchmarking (Pre vs Post Redesign)",
      metrics: [
        { label: "Task Completion Rate", value: "98.2%", delta: "+34% improvement", pos: true },
        { label: "Avg Time to Decision", value: "14.2s", delta: "-52% faster", pos: true },
        { label: "Cognitive Load Score", value: "Low", delta: "Optimal UX", pos: true },
        { label: "System Usability Score", value: "92 / 100", delta: "Grade A+", pos: true }
      ],
      render: (ctx) => {
        return new window.Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Overview Scan', 'Filter Execution', 'Export Generation', 'Anomaly Drilldown', 'Stakeholder Share'],
            datasets: [
              {
                label: 'Legacy / Unstructured Design (Seconds)',
                data: [35, 48, 29, 62, 40],
                backgroundColor: 'rgba(244, 63, 94, 0.65)',
                borderRadius: 6
              },
              {
                label: 'Shozaib Figma Optimized Dashboard (Seconds)',
                data: [12, 16, 8, 21, 14],
                backgroundColor: 'rgba(0, 242, 254, 0.9)',
                borderRadius: 6
              }
            ]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { labels: { color: '#94a3b8' } },
              tooltip: { backgroundColor: '#131f38', padding: 12 }
            },
            scales: {
              x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
              y: { 
                grid: { color: 'rgba(255,255,255,0.06)' }, 
                ticks: { color: '#94a3b8' },
                title: { display: true, text: 'Time in Seconds (Lower is Better)', color: '#64748b' }
              }
            }
          }
        });
      }
    }
  };

  React.useEffect(() => {
    if (!window.Chart || !chartCanvasRef.current) return;

    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }

    const ctx = chartCanvasRef.current.getContext('2d');
    chartInstanceRef.current = datasetConfigs[activeTab].render(ctx);

    return () => {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }
    };
  }, [activeTab]);

  const currentConfig = datasetConfigs[activeTab];

  return (
    <section id="datalab">
      <div className="container">
        <div className="section-header">
          <span className="section-subtitle">Interactive Proof of Capability</span>
          <h2 className="section-title">
            Live <span className="text-gradient">Data Science & UI Lab</span>
          </h2>
          <p className="section-desc">
            Interact with live analytical models demonstrating exploratory data analysis (EDA), 
            statistical preprocessing, funnel economics, and UI/UX performance metrics.
          </p>
        </div>

        <div className="data-lab-container">
          <div className="data-lab-controls">
            <div className="tab-btn-group">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`lab-tab-btn ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
              <span className="status-dot"></span>
              <span>Live Chart Engine Active</span>
            </div>
          </div>

          <div style={{ marginBottom: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '0.3rem' }}>{currentConfig.title}</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
              Dynamic visual telemetry extracted from processed analytical datasets.
            </p>
          </div>

          <div className="data-lab-stats-row">
            {currentConfig.metrics.map((m, i) => (
              <div key={i} className="lab-metric-card">
                <div className="lab-metric-header">
                  <span>METRIC 0{i+1}</span>
                  <i data-lucide="activity" style={{ width: 14, height: 14, color: 'var(--cyan-primary)' }}></i>
                </div>
                <div className="lab-metric-value">{m.value}</div>
                <div className={`lab-metric-delta ${m.pos ? 'delta-pos' : 'delta-neg'}`}>
                  <span>{m.delta}</span>
                </div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {m.label}
                </div>
              </div>
            ))}
          </div>

          <div className="chart-wrapper">
            <canvas ref={chartCanvasRef}></canvas>
          </div>
        </div>
      </div>
    </section>
  );
};
