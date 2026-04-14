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

const QUICK_BUTTONS = [
  { icon: '\uD83C\uDF71', label: 'Healthy Tiffin Ideas' },
  { icon: '\uD83C\uDFE0', label: 'Healthy Daily Routines' },
  { icon: '\uD83D\uDCD6', label: 'Parent Learning Resources' },
  { icon: '\uD83D\uDCE2', label: 'School Updates for Families' },
];

const TILES = [
  { icon: '\uD83C\uDF71', label: 'Healthy Tiffin & Meals' },
  { icon: '\uD83C\uDFE0', label: 'Healthy Daily Routines' },
  { icon: '\uD83D\uDCD6', label: 'Parent Awareness Resources' },
  { icon: '\uD83D\uDCE2', label: 'School-Family Communication' },
];

export default function FamilyEngagementPage({ onBack, onNavigate }) {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <div className="hp-wrap pp-page" style={PAGE_STYLE}>
      {/* Navbar */}
      <nav className="hp-navbar">
        <div className="hp-container">
          <button className="hp-nav-logo" onClick={onBack}>
            <img src="/ewlw_logo.png" alt="EWLW" className="hp-logo-icon" />
            <div className="hp-logo-text">
              Eat Well &bull; Live Well
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
            <p>Supporting parents and caregivers to reinforce healthy habits at home and strengthen school-family partnerships.</p>
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <div className="pp-quick">
        <div className="pp-quick-inner">
          <h2>&#9889; Quick Start</h2>
          <p>Jump into key activities and resources</p>
          <div className="pp-quick-grid">
            {QUICK_BUTTONS.map((b, i) => (
              <button key={i} className="pp-quick-btn">{b.icon} {b.label}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Tile Overview */}
      <section className="pp-tiles">
        <div className="hp-container">
          <h2>What&rsquo;s Inside</h2>
          <p>Explore all areas of Family Engagement</p>
          <div className="pp-tile-grid">
            {TILES.map((t, i) => (
              <div key={i} className="pp-tile" onClick={() => scrollTo(`pp-cat-${i + 1}`)}>
                <div className="pp-tile-icon">{t.icon}</div>
                <h4>{t.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category 1 – Healthy Tiffin & Meals */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>Healthy Tiffin &amp; Meals</h3>
              <p>Simple, practical ideas for preparing healthy tiffin and family meals.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Healthy Tiffin Ideas</li>
                <li><span className="pp-res-bullet"></span>Weekly Meal Suggestions</li>
                <li><span className="pp-res-bullet"></span>Reducing Packaged Foods</li>
                <li><span className="pp-res-bullet"></span>Simple Healthy Recipes</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Example</div>
              <h4>Quick Healthy Tiffin Idea</h4>
              <p>Chapati roll + vegetable filling + fruit</p>
              <ul>
                <li>Prep time: 10 minutes</li>
                <li>Balanced nutrition: grains, vegetables, fruit</li>
                <li>No packaged or processed ingredients</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 – Healthy Daily Routines */}
      <section className="pp-category" id="pp-cat-2">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">2</div>
            <div>
              <h3>Healthy Daily Routines</h3>
              <p>Guidance for families to build healthy daily habits at home.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Physical Activity at Home</li>
                <li><span className="pp-res-bullet"></span>Healthy Sleep Routines</li>
                <li><span className="pp-res-bullet"></span>Reducing Screen Time</li>
                <li><span className="pp-res-bullet"></span>Family Meal Practices</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127939; Daily Goal</div>
              <h4>30 Minutes of Physical Activity Daily</h4>
              <ul>
                <li>Walk or cycle to nearby places</li>
                <li>Play outdoor games as a family</li>
                <li>Simple exercises at home</li>
                <li>Reduce sitting time after school</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 – Parent Awareness Resources */}
      <section className="pp-category" id="pp-cat-3">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">3</div>
            <div>
              <h3>Parent Awareness Resources</h3>
              <p>Information to help parents make informed choices about nutrition and health.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Understanding Healthy Food Choices</li>
                <li><span className="pp-res-bullet"></span>Reading Food Labels</li>
                <li><span className="pp-res-bullet"></span>Reducing Sugar in Daily Diet</li>
                <li><span className="pp-res-bullet"></span>Choosing Healthy Snacks</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128218; Learning</div>
              <h4>Understanding Healthy Food Choices</h4>
              <ul>
                <li>Learn the difference between whole foods and processed foods</li>
                <li>Identify hidden sugars in everyday foods</li>
                <li>Choose healthier alternatives for common snacks</li>
                <li>Read labels before buying packaged food</li>
              </ul>
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
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>School Healthy Snack Guidelines</li>
                <li><span className="pp-res-bullet"></span>Weekly School Meal Information</li>
                <li><span className="pp-res-bullet"></span>Updates on School Activities</li>
                <li><span className="pp-res-bullet"></span>Health and Well-being Events</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128227; Updates</div>
              <h4>Stay Connected with Your School</h4>
              <ul>
                <li>Receive weekly school meal menus</li>
                <li>Get updates on health awareness events</li>
                <li>Learn about healthy snack guidelines</li>
                <li>Participate in school wellness activities</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Tools */}
      <section className="pp-tools">
        <div className="hp-container">
          <h2>&#128295; Parent Tools</h2>
          <p>Practical tools to support healthy habits at home</p>
          <div className="pp-tools-grid">
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#128197;</div>
              <div>
                <h4>Weekly Family Meal Planner</h4>
                <span>Plan balanced meals for the week</span>
              </div>
            </div>
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#127857;</div>
              <div>
                <h4>Healthy Tiffin Builder</h4>
                <span>Build balanced tiffin combinations</span>
              </div>
            </div>
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#128203;</div>
              <div>
                <h4>Printable Healthy Habit Charts</h4>
                <span>Track daily healthy habits</span>
              </div>
            </div>
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#128200;</div>
              <div>
                <h4>Family Activity Tracker</h4>
                <span>Monitor family wellness activities</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="pp-featured">
        <div className="hp-container">
          <div className="pp-featured-inner">
            <div className="pp-featured-icon">&#127869;</div>
            <div className="pp-featured-text">
              <h3>Featured: Share One Family Meal Each Day</h3>
              <p>Research shows that families who eat together regularly have healthier eating habits and stronger relationships. Try to share at least one meal together each day &mdash; talk, connect, and enjoy home-cooked food as a family.</p>
              <button className="pp-featured-btn">Learn More &#8594;</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hp-footer">
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
                <li><button onClick={onBack}>Home</button></li>
                <li><button>Student Learning</button></li>
                <li><button>Healthy Practices</button></li>
                <li><button>Resources</button></li>
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
