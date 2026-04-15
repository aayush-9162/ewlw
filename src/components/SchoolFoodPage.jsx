import '../homepage.css';
import '../practices.css';

const PAGE_STYLE = {
  '--pp-color': '#F57C00',
  '--pp-light': '#FFF3E0',
  '--pp-lighter': '#FFFBF5',
  '--pp-border': '#FFE0B2',
  '--pp-dark': '#E65100',
  '--pp-gradient': 'linear-gradient(135deg, #E65100 0%, #F57C00 40%, #FF9800 100%)',
};

const TILES = [
  { icon: '\uD83C\uDF72', label: 'School Meals' },
  { icon: '\uD83C\uDF7D', label: 'Meal Environment' },
  { icon: '\uD83C\uDFEA', label: 'Healthy School Canteens' },
  { icon: '\uD83D\uDCCA', label: 'Visual Cues in School' },
  { icon: '\u2705', label: 'Food Compliance' },
];

import { useEffect } from 'react';

export default function SchoolFoodPage({ onBack, onNavigate, scrollTo: scrollTarget }) {
  const scrollToEl = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  useEffect(() => {
    if (scrollTarget) {
      setTimeout(() => document.getElementById(`pp-cat-${scrollTarget}`)?.scrollIntoView({ behavior: 'smooth' }), 300);
    }
  }, [scrollTarget]);

  return (
    <div className="hp-wrap pp-page" style={PAGE_STYLE}>
      {/* Navbar */}
      <nav className="hp-navbar">
        <div className="hp-container">
          <button className="hp-nav-logo" onClick={onBack}>
            <img src="/ewlw_logo.png" alt="EWLW" className="hp-logo-icon" />
            <div className="hp-logo-text">
              Eat Well. Live Well.
              <small>Healthy Habits for Schools</small>
            </div>
          </button>
          <div className="hp-nav-right">
            <button className="pp-back-btn" onClick={onBack} style={{ background: 'var(--pp-color)', border: 'none', color: '#fff', borderRadius: 'var(--radius-sm)', padding: '8px 18px', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' }}>
              &larr; Back to Home
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pp-hero">
        <div className="hp-container">
          <div className="pp-hero-inner">
            <h1>&#127838; School Food Environment</h1>
            <p>A healthy school food environment ensures that students eat safe, nutritious food and develop lifelong healthy eating habits.</p>
          </div>
        </div>
      </section>

      {/* Tile Overview */}
      <div className="pp-quick">
        <div className="pp-quick-inner">
          <div className="pp-tile-grid">
            {TILES.map((t, i) => (
              <div key={i} className="pp-tile" onClick={() => scrollToEl(`pp-cat-${i + 1}`)}>
                <div className="pp-tile-icon">{t.icon}</div>
                <h4>{t.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Category 1 – School Meals */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>School Meals</h3>
              <p>School meal programmes play an important role in providing balanced nutrition, food safety, and healthy eating habits among students.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Strengthen quality, acceptance, and nutritional value of school meals</li>
                <li><span className="pp-res-bullet"></span>Monitor quality, menu balance, hygiene, and portion sizes</li>
                <li><span className="pp-res-bullet"></span>Ensure clean cooking areas, hygienic handling, and safe storage</li>
                <li><span className="pp-res-bullet"></span>Promote use of local and seasonal foods</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Focus Areas</div>
              <h4>Key Priorities for School Meals</h4>
              <ul>
                <li>Balanced nutrition in every meal</li>
                <li>Food safety and hygiene standards</li>
                <li>Use of fresh, local, and seasonal ingredients</li>
                <li>Regular monitoring and quality checks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 – Meal Environment */}
      <section className="pp-category" id="pp-cat-2">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">2</div>
            <div>
              <h3>Meal Environment</h3>
              <p>Encouraging a calm and positive eating space where students do not waste food, practice mindful eating, and focus on proper chewing habits.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Key Practices</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Create a calm and positive eating space</li>
                <li><span className="pp-res-bullet"></span>Encourage students to eat without rushing</li>
                <li><span className="pp-res-bullet"></span>Promote mindful eating and proper chewing habits</li>
                <li><span className="pp-res-bullet"></span>Reduce food waste during meal times</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Mindful Eating</div>
              <h4>Building a Positive Meal Environment</h4>
              <p>A supportive meal environment helps students develop a healthy relationship with food, reduces waste, and encourages them to appreciate and enjoy their meals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 – Healthy School Canteens */}
      <section className="pp-category" id="pp-cat-3">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">3</div>
            <div>
              <h3>Healthy School Canteens</h3>
              <p>School canteens should support healthy food choices and reduce unhealthy options.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Promote fresh, home-style, and nutritious foods</li>
                <li><span className="pp-res-bullet"></span>Ensure safe preparation and clean serving</li>
                <li><span className="pp-res-bullet"></span>Reduce high-fat, high-sugar, and processed foods</li>
              </ul>
              <h4 style={{ marginTop: 18 }}>Additional Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Healthy Canteen Menu Examples</li>
                <li><span className="pp-res-bullet"></span>Foods to Encourage</li>
                <li><span className="pp-res-bullet"></span>Foods to Limit</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#9989; Canteen Guidelines</div>
              <h4>Healthy Canteen Priorities</h4>
              <ul>
                <li>Offer fresh fruits and home-style snacks</li>
                <li>Limit fried, sugary, and processed items</li>
                <li>Maintain hygiene in food preparation and serving</li>
                <li>Display healthy options prominently</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 4 – Visual Cues in School Environment */}
      <section className="pp-category" id="pp-cat-4">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">4</div>
            <div>
              <h3>Visual Cues in School Environment</h3>
              <p>Visual reminders help students make better food choices.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Visual Tools</h4>
              <ul>
                <li><span className="pp-res-bullet"></span><strong>Sugar Board</strong> &ndash; Shows the sugar content in common foods and drinks</li>
                <li><span className="pp-res-bullet"></span><strong>Oil Board</strong> &ndash; Displays oil usage awareness for everyday foods</li>
                <li><span className="pp-res-bullet"></span><strong>Traffic Light System (FSSAI-based)</strong></li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128225; Traffic Light System</div>
              <h4>FSSAI-Based Traffic Light Guide</h4>
              <ul>
                <li><strong style={{ color: '#388E3C' }}>Green</strong> &ndash; Eat often (fresh fruits, vegetables, whole grains)</li>
                <li><strong style={{ color: '#F9A825' }}>Yellow</strong> &ndash; Eat sometimes (moderate fat/sugar foods)</li>
                <li><strong style={{ color: '#D32F2F' }}>Red</strong> &ndash; Eat rarely (high fat, high sugar, processed foods)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 5 – Food Compliance in School */}
      <section className="pp-category" id="pp-cat-5">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">5</div>
            <div>
              <h3>Food Compliance in School</h3>
              <p>Ensuring food brought or sold in school follows healthy guidelines.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Key Focus Areas</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Monitoring tiffin boxes for balanced and healthy content</li>
                <li><span className="pp-res-bullet"></span>Reducing unhealthy packaged snacks in school</li>
                <li><span className="pp-res-bullet"></span>Promoting awareness about healthy food choices</li>
                <li><span className="pp-res-bullet"></span>Encouraging healthy alternatives to junk food</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#9989; Compliance</div>
              <h4>Supporting Healthy Food Compliance</h4>
              <p>Schools can encourage healthier food habits by monitoring what students bring and buy, while promoting awareness and offering better alternatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hp-footer">
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
                <a href="https://www.linkedin.com/company/food-future-foundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a href="https://www.instagram.com/foodfuturefoundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              </div>
            </div>
            <div className="hp-footer-col">
              <h4>Platform</h4>
              <ul>
                <li><button onClick={onBack}>Home</button></li>
                <li><button onClick={() => { onBack(); setTimeout(() => document.getElementById('hp-learning')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Student Learning</button></li>
                <li><button onClick={() => { onBack(); setTimeout(() => document.getElementById('hp-practices')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Healthy Practices</button></li>
                <li><button onClick={() => { onBack(); setTimeout(() => document.getElementById('hp-resources')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Resources</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Practices</h4>
              <ul>
                <li><button style={{ fontWeight: 700, color: '#F57C00' }}>Food Environment</button></li>
                <li><button onClick={() => onNavigate && onNavigate('active-schools')}>Active Schools</button></li>
                <li><button onClick={() => onNavigate && onNavigate('teacher-engagement')}>Teacher Support</button></li>
                <li><button onClick={() => onNavigate && onNavigate('family-engagement')}>Family Engagement</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Links</h4>
              <ul>
                <li><button>About</button></li>
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
