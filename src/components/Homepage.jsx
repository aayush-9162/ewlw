import { useState } from 'react';
import '../homepage.css';

const DOMAINS = [
  { key: 'personal', cls: 'hp-domain-personal', icon: '\uD83C\uDF31', label: 'Domain 1', title: 'Personal Well-Being', desc: '21 Habits across ROUTINE, HEALTHY and MINDFUL \u2014 building lifelong health from within.', badge: '21 Habits \u00B7 3 Clusters' },
  { key: 'social', cls: 'hp-domain-social', icon: '\uD83E\uDD1D', label: 'Domain 2', title: 'Social Well-Being', desc: '7 Life Skills for Responsible Behaviour (RESPECT) \u2014 citizenship, equality, and safety.', badge: '7 Life Skills \u00B7 RESPECT' },
  { key: 'planetary', cls: 'hp-domain-planetary', icon: '\uD83C\uDF0D', label: 'Domain 3', title: 'Planetary Well-Being', desc: '7 Sustainability Skills aligned with LiFE (SUSTAIN) \u2014 protecting the planet we share.', badge: '7 Skills \u00B7 SUSTAIN' },
];

const PRACTICES = [
  {
    key: 'school-food', cls: 'hp-card-food', icon: '\uD83C\uDF5E', title: 'School Food Environment',
    gradient: 'linear-gradient(135deg,#E65100,#FB923C)',
    summary: 'Ensuring students eat safe, nutritious food and develop healthy eating habits.',
    tabs: ['\uD83C\uDF72 School Meals', '\uD83C\uDF7D Meal Environment', '\uD83C\uDFEA Healthy Canteens', '\uD83D\uDCCA Visual Cues', '\u2705 Food Compliance'],
  },
  {
    key: 'active-schools', cls: 'hp-card-active', icon: '\uD83C\uDFC3', title: 'Active Schools',
    gradient: 'linear-gradient(135deg,#0D47A1,#42A5F5)',
    summary: 'Integrating physical activity and wellbeing practices into the daily school routine.',
    tabs: ['\uD83C\uDFC3 Movement Breaks', '\uD83E\uDDD8 Stretching & Yoga', '\uD83C\uDF2C\uFE0F Breathing & Mindfulness', '\uD83D\uDCC5 Daily Routines'],
  },
  {
    key: 'teacher-engagement', cls: 'hp-card-teacher', icon: '\uD83D\uDCDA', title: 'Teacher Support',
    gradient: 'linear-gradient(135deg,#4A148C,#AB47BC)',
    summary: 'Supporting teachers to integrate healthy habits into everyday classroom learning.',
    tabs: ['\uD83C\uDF93 Teacher Orientation', '\uD83D\uDCA1 Classroom Tips', '\uD83D\uDD2C Habits in Subjects', '\uD83D\uDCCA Assessment'],
  },
  {
    key: 'family-engagement', cls: 'hp-card-family', icon: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67', title: 'Family Engagement',
    gradient: 'linear-gradient(135deg,#004D40,#26A69A)',
    summary: 'Strengthening school-family collaboration to support healthy habits at home.',
    tabs: ['\uD83C\uDF71 Healthy Tiffin', '\uD83E\uDD5C Healthy Snacks', '\uD83C\uDFE0 Beyond Classroom', '\uD83D\uDCE2 Communication'],
  },
];

const RESOURCES = [
  { icon: '\uD83C\uDFA5', bg: '#FFEBEE', title: 'Movement Break Videos', sub: '12 videos \u00B7 1-3 mins each' },
  { icon: '\uD83C\uDFB2', bg: '#E3F2FD', title: 'Classroom Activity Cards', sub: '24 printable cards' },
  { icon: '\uD83D\uDDBC', bg: '#FFF3E0', title: 'Posters & Visual Materials', sub: '15 downloadable posters' },
  { icon: '\uD83D\uDCD6', bg: '#F3E5F5', title: 'Teacher Guides', sub: '8 comprehensive guides' },
  { icon: '\uD83D\uDCC4', bg: '#E0F2F1', title: 'Parent Information Sheets', sub: '10 bilingual handouts' },
];

const ANNOUNCEMENTS = [
  { text: 'New classroom activity videos added \u2014 Movement breaks and stretching routines', date: 'Apr 10, 2026', color: null },
  { text: 'Upcoming teacher orientation sessions \u2014 Register by April 20', date: 'Apr 8, 2026', color: '#F57C00' },
  { text: 'Healthy tiffin campaign week \u2014 Starting April 21 across all schools', date: 'Apr 5, 2026', color: '#1565C0' },
];

const TAGS = ['All', 'Videos', 'Classroom Activity Cards', 'Posters and Visual Materials', 'Teacher Guides', 'Parent Information Sheets'];

export default function Homepage({ onOpenDomain, onOpenPractice }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTag, setActiveTag] = useState('All');

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hp-wrap">
      {/* Navbar */}
      <nav className="hp-navbar">
        <div className="hp-container">
          <button className="hp-nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img src="/ewlw_logo.png" alt="EWLW" className="hp-logo-icon" />
            <div className="hp-logo-text">
              Eat Well. Live Well.
              <small>Healthy Habits for Schools</small>
            </div>
          </button>

          <div className="hp-nav-menu">
            <button className="active" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button>
            <button onClick={() => scrollTo('hp-about')}>About</button>
            <button onClick={() => scrollTo('hp-learning')}>Learning</button>
            <button onClick={() => scrollTo('hp-practices')}>Healthy School Practices</button>
            <button onClick={() => scrollTo('hp-resources')}>Resources</button>
          </div>

          <div className="hp-nav-actions">
            <div className="hp-nav-right">
              <select className="hp-lang-select">
                <option>English</option>
                <option>Hindi</option>
              </select>
              <button className="hp-notif-btn">
                &#x1F514;
                <span className="hp-notif-badge">3</span>
              </button>
              <div className="hp-user-avatar">TP</div>
            </div>
            {!menuOpen && (
              <button className="hp-hamburger" onClick={() => setMenuOpen(true)}>
                <span></span><span></span><span></span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Overlay + Close Button */}
      {menuOpen && <div className="hp-drawer-overlay" onClick={() => setMenuOpen(false)} />}
      {menuOpen && (
        <button className="hp-drawer-close" onClick={() => setMenuOpen(false)}>
          <span></span><span></span>
        </button>
      )}
      <div className={`hp-drawer${menuOpen ? ' hp-drawer--open' : ''}`}>
        <div className="hp-drawer-header">
          <img src="/ewlw_logo.png" alt="EWLW" className="hp-drawer-logo" />
          <span className="hp-drawer-title">Eat Well. Live Well.</span>
        </div>
        <nav className="hp-drawer-nav">
          <button className="active" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</button>
          <button onClick={() => scrollTo('hp-about')}>About</button>
          <button onClick={() => scrollTo('hp-learning')}>Learning</button>
          <button onClick={() => scrollTo('hp-practices')}>Healthy School Practices</button>
          <button onClick={() => scrollTo('hp-resources')}>Resources</button>
        </nav>
        <div className="hp-drawer-footer">
          <select className="hp-lang-select" style={{ width: '100%' }}>
            <option>English</option>
            <option>Hindi</option>
          </select>
        </div>
      </div>

      {/* Welcome Banner */}
      <section className="hp-banner">
        <div className="hp-container">
          <h1>Welcome to the Eat Well. Live Well. Platform</h1>
          <p style={{ maxWidth: 'none', textAlign: 'justify' }}>Building healthy habits for lifelong well-being through everyday school practices.</p>
        </div>
      </section>

      {/* Student Learning */}
      <section className="hp-section" id="hp-learning">
        <div className="hp-container">
          <div className="hp-section-header">
            <h2>Student Learning</h2>
            <p>Core EWLW Framework &mdash; Explore habits and skills across three pillars of well-being.</p>
          </div>
          <div className="hp-domain-grid">
            {DOMAINS.map(d => (
              <button key={d.key} className={`hp-domain-card ${d.cls}`} onClick={() => onOpenDomain(d.key)}>
                <div className="hp-d-icon-wrap"><span className="hp-d-icon">{d.icon}</span></div>
                <span className="hp-d-arrow">&#8594;</span>
                <div className="hp-d-label">{d.label}</div>
                <div className="hp-d-title">{d.title}</div>
                <div className="hp-d-desc">{d.desc}</div>
                <div className="hp-d-badge">{d.badge}</div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Healthy School Practices */}
      <section className="hp-section" id="hp-practices" style={{ background: '#F5F5F5' }}>
        <div className="hp-container">
          <div className="hp-section-header">
            <h2>Healthy School Practices</h2>
            <p>Whole-school implementation tools for creating healthier school environments.</p>
          </div>
          <div className="hp-pcard-grid">
            {PRACTICES.map(p => (
              <div key={p.key} className="hp-pcard" onClick={() => onOpenPractice(p.key)}>
                <div className="hp-pcard-header" style={{ background: p.gradient }}>
                  <span className="hp-pcard-icon">{p.icon}</span>
                  <span className="hp-pcard-title">{p.title}</span>
                </div>
                <div className="hp-pcard-body">
                  <p className="hp-pcard-summary">{p.summary}</p>
                  <div className="hp-pcard-btns">
                    {p.tabs.map((tab, ti) => (
                      <button key={ti} className="hp-pcard-btn" onClick={(e) => { e.stopPropagation(); onOpenPractice(p.key, ti + 1); }}>
                        {tab}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Resource Library */}
      <section className="hp-section" id="hp-resources">
        <div className="hp-container">
          <div className="hp-section-header">
            <h2>Resource Library</h2>
            <p>Searchable resources for teachers, students, and parents.</p>
          </div>
          <div className="hp-resource-tags">
            {TAGS.map(t => (
              <button key={t} className={`hp-resource-tag${activeTag === t ? ' active' : ''}`} onClick={() => setActiveTag(t)}>{t}</button>
            ))}
          </div>
          <div className="hp-resource-grid">
            {RESOURCES.map((r, i) => (
              <div key={i} className="hp-resource-item">
                <div className="hp-res-icon" style={{ background: r.bg }}>{r.icon}</div>
                <h4>{r.title}</h4>
                <p>{r.sub}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '24px' }}>
            <button className="hp-btn hp-btn--primary" style={{ background: '#2E7D32', color: 'white' }}>Browse Library &#8594;</button>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="hp-section" style={{ background: '#F5F5F5' }}>
        <div className="hp-container">
          <div className="hp-section-header">
            <h2>Updates &amp; Announcements</h2>
            <p>Stay informed about the latest activities and resources.</p>
          </div>
          <div className="hp-announcements">
            {ANNOUNCEMENTS.map((a, i) => (
              <div key={i} className="hp-ann-item">
                <div className="hp-ann-dot" style={a.color ? { background: a.color } : undefined}></div>
                <div className="hp-ann-text">{a.text}</div>
                <div className="hp-ann-date">{a.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hp-footer" id="hp-about">
        <div className="hp-container">
          <div className="hp-footer-top">
            <div className="hp-footer-brand">
              <div className="hp-footer-logo-row">
                <img src="/fff_logo.png" alt="FFF" className="hp-footer-fff-logo" />
                <div className="hp-footer-logo">Eat Well. Live Well. Digital Platform</div>
              </div>
              <p>An initiative developed by <a href="https://foodfuturefoundation.org/" target="_blank" rel="noopener noreferrer" className="hp-footer-link"><strong>Food Future Foundation</strong></a>.<br />
              Implemented in partnership with <strong>Directorate of Education, Government of Delhi</strong>.</p>
              <div className="hp-social-links">
                <a href="https://www.linkedin.com/company/food-future-foundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.instagram.com/foodfuturefoundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="Instagram">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
              </div>
            </div>
            <div className="hp-footer-col">
              <h4>Platform</h4>
              <ul>
                <li><button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</button></li>
                <li><button onClick={() => scrollTo('hp-learning')}>Student Learning</button></li>
                <li><button onClick={() => scrollTo('hp-practices')}>Healthy Practices</button></li>
                <li><button onClick={() => scrollTo('hp-resources')}>Resources</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Practices</h4>
              <ul>
                <li><button onClick={() => onOpenPractice('school-food')}>Food Environment</button></li>
                <li><button onClick={() => onOpenPractice('active-schools')}>Active Schools</button></li>
                <li><button onClick={() => onOpenPractice('teacher-engagement')}>Teacher Support</button></li>
                <li><button onClick={() => onOpenPractice('family-engagement')}>Family Engagement</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Links</h4>
              <ul>
                <li><button onClick={() => scrollTo('hp-about')}>About</button></li>
                <li><button>Programme Guidelines</button></li>
                <li><button>Contact Support</button></li>
                <li><button>Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="hp-footer-bottom">
            <span>&copy; 2026 Eat Well. Live Well. Programme. All rights reserved.</span>
            <div className="hp-footer-partners">
              <a href="https://foodfuturefoundation.org/" target="_blank" rel="noopener noreferrer" className="hp-partner-badge">Food Future Foundation</a>
              <span className="hp-partner-badge">Govt. of Delhi</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
