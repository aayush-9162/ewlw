import { useState } from 'react';
import '../homepage.css';

const DOMAINS = [
  { key: 'personal', cls: 'hp-domain-personal', icon: '\uD83C\uDF31', label: 'Domain 1', title: 'Personal Well-Being', desc: '21 Habits across ROUTINE, HEALTHY and MINDFUL \u2014 building lifelong health from within.', badge: '21 Habits \u00B7 3 Clusters' },
  { key: 'social', cls: 'hp-domain-social', icon: '\uD83E\uDD1D', label: 'Domain 2', title: 'Social Well-Being', desc: '7 Life Skills for Responsible Behaviour (RESPECT) \u2014 citizenship, equality, and safety.', badge: '7 Life Skills \u00B7 RESPECT' },
  { key: 'planetary', cls: 'hp-domain-planetary', icon: '\uD83C\uDF0D', label: 'Domain 3', title: 'Planetary Well-Being', desc: '7 Sustainability Skills aligned with LiFE (SUSTAIN) \u2014 protecting the planet we share.', badge: '7 Skills \u00B7 SUSTAIN' },
];

const PRACTICES = [
  { key: 'school-food', cls: 'hp-card-food', icon: '\uD83C\uDF5E', title: 'School Food Environment', items: ['Healthy tiffin guidance', 'Snack recommendations', 'School meal information', 'Food label learning tools'], btn: 'View Food Resources \u2192' },
  { key: 'active-schools', cls: 'hp-card-active', icon: '\uD83C\uDFC3', title: 'Active Schools', items: ['Movement break videos', 'Stretching and yoga activities', 'Breathing and mindfulness exercises', 'Daily activity routine models'], btn: 'Start Activity \u2192' },
  { key: 'teacher-engagement', cls: 'hp-card-teacher', icon: '\uD83D\uDCDA', title: 'Teacher Support', items: ['Classroom activity guides', 'Habit discussion prompts', 'Teacher training videos', 'Lesson integration ideas'], btn: 'Teacher Toolkit \u2192' },
  { key: 'family-engagement', cls: 'hp-card-family', icon: '\uD83D\uDC68\u200D\uD83D\uDC69\u200D\uD83D\uDC67', title: 'Family Engagement', items: ['Healthy tiffin ideas', 'Parent guidance resources', 'Home habit challenges', 'Parent communication materials'], btn: 'Parent Resources \u2192' },
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
              Eat Well &bull; Live Well
              <small>Healthy Habits for Schools</small>
            </div>
          </button>

          <div className={`hp-nav-menu${menuOpen ? ' open' : ''}`}>
            <button className="active" onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>Home</button>
            <button onClick={() => scrollTo('hp-about')}>About</button>
            <button onClick={() => scrollTo('hp-learning')}>Learning</button>
            <button onClick={() => scrollTo('hp-practices')}>Healthy School Practices</button>
            <button onClick={() => scrollTo('hp-resources')}>Resources</button>
          </div>

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

          <button className="hp-hamburger" onClick={() => setMenuOpen(m => !m)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* Welcome Banner */}
      <section className="hp-banner">
        <div className="hp-container">
          <h1>Welcome to the Eat Well &bull; Live Well Platform</h1>
          <p>Building healthy habits for lifelong well-being through everyday school practices.</p>
          <div className="hp-quick-actions">
            <button className="hp-btn hp-btn--primary" onClick={() => scrollTo('hp-learning')}>&#9654; Start a Habit Activity</button>
            <button className="hp-btn hp-btn--outline">&#128218; View Today's Classroom Activity</button>
            <button className="hp-btn hp-btn--outline" onClick={() => scrollTo('hp-resources')}>&#128269; Explore Resources</button>
            <button className="hp-btn hp-btn--outline">&#128203; Record School Activities</button>
          </div>
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
          <div className="hp-practice-grid">
            {PRACTICES.map(p => (
              <div key={p.key} className={`hp-practice-card ${p.cls}`} onClick={() => onOpenPractice(p.key)}>
                <div className="hp-pc-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <ul>
                  {p.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
                <button className="hp-pc-btn">{p.btn}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Today's Habit + Dashboard */}
      <section className="hp-section">
        <div className="hp-container">
          <div className="hp-two-col">
            <div className="hp-habit-panel">
              <div className="hp-habit-badge">&#9733; Daily Focus</div>
              <h3>Today's Habit</h3>
              <div className="hp-habit-name">Often and Enough Water</div>
              <ul className="hp-tips">
                <li>Drink water regularly during the day</li>
                <li>Carry a water bottle to school</li>
              </ul>
              <div className="hp-habit-actions">
                <button className="hp-btn-sm hp-btn-blue">&#9654; Watch 1-min Video</button>
                <button className="hp-btn-sm hp-btn-green">&#128221; Try Classroom Activity</button>
                <button className="hp-btn-sm hp-btn-light">&#128172; Share with Parents</button>
              </div>
            </div>

            <div className="hp-dashboard">
              <h3>School Well-being Score</h3>
              <div className="hp-panel-sub">For principals and school committees</div>
              <div className="hp-score-display">
                <div className="hp-score-num">78</div>
                <div className="hp-score-label">
                  <strong>Good Progress</strong>
                  Based on 5 indicators this month
                </div>
              </div>
              <ul className="hp-indicator-list">
                <li>Participation in school meals<div className="hp-indicator-bar"><div className="hp-fill" style={{ width: '85%', background: '#2E7D32' }}></div></div></li>
                <li>Healthy tiffin adoption<div className="hp-indicator-bar"><div className="hp-fill" style={{ width: '65%', background: '#F57C00' }}></div></div></li>
                <li>Nutrition education sessions<div className="hp-indicator-bar"><div className="hp-fill" style={{ width: '90%', background: '#4CAF50' }}></div></div></li>
                <li>Movement breaks conducted<div className="hp-indicator-bar"><div className="hp-fill" style={{ width: '72%', background: '#1565C0' }}></div></div></li>
                <li>Parent engagement activities<div className="hp-indicator-bar"><div className="hp-fill" style={{ width: '55%', background: '#00897B' }}></div></div></li>
              </ul>
              <div className="hp-dashboard-actions">
                <button className="hp-btn-sm hp-btn-green">&#128203; Record Activity</button>
                <button className="hp-btn-sm hp-btn-light">&#128200; View Progress Report</button>
              </div>
            </div>
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
              <div className="hp-footer-logo">Eat Well &bull; Live Well Digital Platform</div>
              <p>An initiative developed by <strong>Food Future Foundation</strong>.<br />
              Implemented in partnership with <strong>Directorate of Education, Government of Delhi</strong>.</p>
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
            <span>&copy; 2026 Eat Well &bull; Live Well Programme. All rights reserved.</span>
            <div className="hp-footer-partners">
              <span className="hp-partner-badge">Food Future Foundation</span>
              <span className="hp-partner-badge">Govt. of Delhi</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
