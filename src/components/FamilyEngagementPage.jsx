import '../homepage.css';
import '../practices.css';

const PAGE_STYLE = {
  '--pp-color': '#00897B',
  '--pp-light': '#E0F2F1',
  '--pp-lighter': '#F2FFFE',
  '--pp-border': '#B2DFDB',
  '--pp-dark': '#004D40',
  '--pp-gradient': 'linear-gradient(135deg, #004D40 0%, #00897B 40%, #26A69A 100%)',
};

const TILES = [
  { icon: '\uD83C\uDF71', label: 'Healthy Tiffin' },
  { icon: '\uD83E\uDD5C', label: 'Healthy Snacks' },
  { icon: '\uD83C\uDFE0', label: 'Habits Beyond Classroom' },
  { icon: '\uD83D\uDCE2', label: 'School-Family Communication' },
];

import { useEffect } from 'react';

export default function FamilyEngagementPage({ onBack, onNavigate, scrollTo: scrollTarget }) {
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
            <h1>&#128104;&#8205;&#128105;&#8205;&#128103; Family Engagement</h1>
            <p>Strengthening collaboration between school, family, and community to support healthy habits and well-being beyond the classroom.</p>
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

      {/* Category 1 – Healthy Tiffin */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>Healthy Tiffin</h3>
              <p>Guidance for preparing balanced, nutritious tiffin boxes at home.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Balanced Tiffin Ideas</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Combine carbohydrates + protein + vegetables in every tiffin</li>
                <li><span className="pp-res-bullet"></span>Add a fruit or handful of nuts as a side</li>
              </ul>

              <h4 style={{ marginTop: 18 }}>Quick Healthy Recipes from Leftovers</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Dal Paratha &ndash; made from leftover dal</li>
                <li><span className="pp-res-bullet"></span>Khichdi Tikki &ndash; made from leftover khichdi</li>
              </ul>

              <h4 style={{ marginTop: 18 }}>Reducing Packaged Foods</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Swap chips and biscuits with fruits or homemade snacks</li>
                <li><span className="pp-res-bullet"></span>Limit foods high in sugar, salt, and fat</li>
                <li><span className="pp-res-bullet"></span>Avoid plastic containers &ndash; use steel or glass</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Example</div>
              <h4>Balanced Tiffin Idea</h4>
              <p>Chapati roll + vegetable filling + fruit</p>
              <ul>
                <li>Covers grains, vegetables, and fruit groups</li>
                <li>No packaged or processed ingredients</li>
                <li>Easy to prepare in 10 minutes</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 – Healthy Snacks */}
      <section className="pp-category" id="pp-cat-2">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">2</div>
            <div>
              <h3>Healthy Snacks</h3>
              <p>Nutritious snack options that children can enjoy at school and home.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Go-to Snack Ideas</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Fruits with nuts or seeds</li>
                <li><span className="pp-res-bullet"></span>Roasted chana, peanuts, or makhana</li>
                <li><span className="pp-res-bullet"></span>Vegetable sticks with curd dip</li>
                <li><span className="pp-res-bullet"></span>Sprouts chaat or boiled corn</li>
              </ul>

              <h4 style={{ marginTop: 18 }}>Quick Snacks from Leftovers</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Rice Bhel &ndash; from leftover rice</li>
                <li><span className="pp-res-bullet"></span>Roti Sandwich &ndash; from leftover roti</li>
                <li><span className="pp-res-bullet"></span>Dal Chilla &ndash; from leftover dal</li>
              </ul>

              <h4 style={{ marginTop: 18 }}>Reducing Packaged Food Consumption</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Replace packaged snacks with fresh, homemade alternatives</li>
                <li><span className="pp-res-bullet"></span>Read labels to avoid high sugar, salt, and fat content</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Example</div>
              <h4>Roasted Chana Mix</h4>
              <ul>
                <li>High protein and fibre</li>
                <li>No added sugar</li>
                <li>Easy to carry and store</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 – Habits Beyond the Classroom */}
      <section className="pp-category" id="pp-cat-3">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">3</div>
            <div>
              <h3>Habits Beyond the Classroom: Family &amp; Community</h3>
              <p>Extending healthy habits from school into homes and communities through awareness and engagement.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Example Poster Topics for Families</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Healthy Eating at Home</li>
                <li><span className="pp-res-bullet"></span>Smart Snack Swaps</li>
                <li><span className="pp-res-bullet"></span>Protein-Rich Breakfasts</li>
                <li><span className="pp-res-bullet"></span>Balanced Family Meals</li>
                <li><span className="pp-res-bullet"></span>Tips for Reducing Sugar</li>
                <li><span className="pp-res-bullet"></span>Family Mealtime Habits</li>
                <li><span className="pp-res-bullet"></span>Mindful Eating at Home</li>
                <li><span className="pp-res-bullet"></span>Local &amp; Seasonal Foods</li>
                <li><span className="pp-res-bullet"></span>Stay Active as a Family</li>
                <li><span className="pp-res-bullet"></span>Healthy Habits for the Whole Family</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128227; Community</div>
              <h4>Building Healthy Habits Together</h4>
              <p>Schools can share posters, tips, and resources with families to encourage healthy practices at home and in the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category 4 – School-Family Communication */}
      <section className="pp-category" id="pp-cat-4">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">4</div>
            <div>
              <h3>School-Family Communication</h3>
              <p>Keeping families informed and involved in school health initiatives.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Communication Channels</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Regular updates on school activities, events, and workshops</li>
                <li><span className="pp-res-bullet"></span>Timely alerts for health awareness events</li>
                <li><span className="pp-res-bullet"></span>Opportunities for families to participate in school wellness activities</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128227; Stay Connected</div>
              <h4>Stay Connected with Your School</h4>
              <ul>
                <li>Receive updates on school health activities</li>
                <li>Get alerts for health awareness events</li>
                <li>Participate in workshops and wellness programmes</li>
              </ul>
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
                <li><button onClick={() => onNavigate && onNavigate('school-food')}>Food Environment</button></li>
                <li><button onClick={() => onNavigate && onNavigate('active-schools')}>Active Schools</button></li>
                <li><button onClick={() => onNavigate && onNavigate('teacher-engagement')}>Teacher Support</button></li>
                <li><button style={{ fontWeight: 700, color: '#00897B' }}>Family Engagement</button></li>
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
