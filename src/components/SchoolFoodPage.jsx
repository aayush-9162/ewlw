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

const QUICK_BUTTONS = [
  { icon: '\uD83C\uDF71', label: 'Healthy Tiffin Ideas' },
  { icon: '\uD83C\uDF4E', label: 'Healthy Snack Options' },
  { icon: '\uD83C\uDF72', label: 'School Meal Information' },
  { icon: '\uD83C\uDFEA', label: 'Healthy Canteen Guidance' },
  { icon: '\uD83C\uDFF7\uFE0F', label: 'Learn to Read Food Labels' },
];

const TILES = [
  { icon: '\uD83C\uDF71', label: 'Healthy Tiffin' },
  { icon: '\uD83C\uDF4E', label: 'Healthy Snacks' },
  { icon: '\uD83C\uDF72', label: 'School Meals' },
  { icon: '\uD83C\uDFEA', label: 'Healthy School Canteens' },
  { icon: '\uD83C\uDFF7\uFE0F', label: 'Food Label Learning' },
];

export default function SchoolFoodPage({ onBack, onNavigate }) {
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
            <h1>&#127838; School Food Environment</h1>
            <p>Promoting healthy food choices through balanced tiffin, nutritious snacks, safe school meals, and informed food awareness.</p>
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
          <p>Explore all areas of the School Food Environment</p>
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

      {/* Category 1 – Healthy Tiffin */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>Healthy Tiffin</h3>
              <p>Ideas and guidance for preparing balanced, nutritious tiffin boxes at home.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Balanced Tiffin Combinations</li>
                <li><span className="pp-res-bullet"></span>Quick Healthy Recipes</li>
                <li><span className="pp-res-bullet"></span>Weekly Healthy Tiffin Planner</li>
                <li><span className="pp-res-bullet"></span>Reducing Packaged Foods</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Example</div>
              <h4>Balanced Tiffin Idea</h4>
              <p>Chapati roll + vegetables + fruit</p>
              <ul>
                <li>Prep time: 10 minutes</li>
                <li>Covers grains, vegetables, and fruit groups</li>
                <li>No packaged or processed items</li>
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
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Fruits and Nut Snacks</li>
                <li><span className="pp-res-bullet"></span>Roasted Chana and Sprouts</li>
                <li><span className="pp-res-bullet"></span>Traditional Snacks (Poha, Upma, Idli)</li>
                <li><span className="pp-res-bullet"></span>Jaggery-Based Snacks</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Example</div>
              <h4>Roasted Chana Mix</h4>
              <ul>
                <li>High protein</li>
                <li>No added sugar</li>
                <li>Easy to carry</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 – School Meals */}
      <section className="pp-category" id="pp-cat-3">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">3</div>
            <div>
              <h3>School Meals</h3>
              <p>Information about school meal programmes, nutrition, and food safety.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Weekly School Meal Menu</li>
                <li><span className="pp-res-bullet"></span>Food Groups in Balanced Meals</li>
                <li><span className="pp-res-bullet"></span>Nutrition in School Meals</li>
                <li><span className="pp-res-bullet"></span>Meal Hygiene and Safety</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Weekly Menu Example</div>
              <h4>Sample Weekly School Meal Menu</h4>
              <table className="pp-menu-table">
                <tbody>
                  <tr><td>Mon</td><td>Dal / Rice / Vegetable</td></tr>
                  <tr><td>Tue</td><td>Kadhi Chawal</td></tr>
                  <tr><td>Wed</td><td>Chole Chawal</td></tr>
                  <tr><td>Thu</td><td>Rajma Rice / Sabzi</td></tr>
                  <tr><td>Fri</td><td>Puri / Aloo Sabzi / Fruit</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Category 4 – Healthy Canteens */}
      <section className="pp-category" id="pp-cat-4">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">4</div>
            <div>
              <h3>Healthy School Canteens</h3>
              <p>Guidance for making school canteens healthier for students.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Healthy Canteen Menu Examples</li>
                <li><span className="pp-res-bullet"></span>Foods to Encourage</li>
                <li><span className="pp-res-bullet"></span>Foods to Limit</li>
                <li><span className="pp-res-bullet"></span>Vendor Guidance</li>
                <li><span className="pp-res-bullet"></span>Canteen Self-Assessment</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#9989; Canteen Checklist</div>
              <h4>Healthy Canteen Self-Assessment</h4>
              <ul>
                <li>Fruits available daily?</li>
                <li>Sugary drinks restricted?</li>
                <li>Packaged junk food limited?</li>
                <li>Clean drinking water accessible?</li>
              </ul>
              <div className="pp-vendor-box">
                <h5>Vendor Support Resources</h5>
                <ul>
                  <li>Vendor training guide</li>
                  <li>Menu templates</li>
                  <li>Food safety checklist</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 5 – Food Label Learning */}
      <section className="pp-category" id="pp-cat-5">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">5</div>
            <div>
              <h3>Food Label Learning</h3>
              <p>Teaching students and parents to read and understand food labels.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>How to Read Ingredients</li>
                <li><span className="pp-res-bullet"></span>Identifying Sugar / Salt / Fat</li>
                <li><span className="pp-res-bullet"></span>Comparing Packaged Snacks</li>
                <li><span className="pp-res-bullet"></span>Food Label Quiz</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127942; Challenge</div>
              <h4>Food Label Challenge</h4>
              <p>Compare two snack packets and identify which one is healthier by checking:</p>
              <ul>
                <li>Sugar content per serving</li>
                <li>Number of artificial ingredients</li>
                <li>Total fat and sodium levels</li>
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
