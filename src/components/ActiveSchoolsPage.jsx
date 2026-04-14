import '../homepage.css';
import '../practices.css';

const PAGE_STYLE = {
  '--pp-color': '#1565C0',
  '--pp-light': '#E3F2FD',
  '--pp-lighter': '#F5F9FF',
  '--pp-border': '#BBDEFB',
  '--pp-dark': '#0D47A1',
  '--pp-gradient': 'linear-gradient(135deg, #0D47A1 0%, #1565C0 40%, #1E88E5 100%)',
};

const QUICK_BUTTONS = [
  { icon: '\uD83C\uDFC3', label: '2-Minute Movement Break' },
  { icon: '\uD83E\uDDD8', label: 'Stretch & Yoga Routine' },
  { icon: '\uD83C\uDF2C\uFE0F', label: 'Breathing Exercise' },
  { icon: '\uD83E\uDDD8\u200D\u2642\uFE0F', label: 'Mindfulness Break' },
  { icon: '\uD83D\uDCC5', label: 'Daily Activity Routine' },
];

const TILES = [
  { icon: '\uD83C\uDFC3', label: 'Movement Breaks' },
  { icon: '\uD83E\uDDD8', label: 'Stretching & Yoga' },
  { icon: '\uD83C\uDF2C\uFE0F', label: 'Breathing & Mindfulness' },
  { icon: '\uD83D\uDCC5', label: 'Daily Activity Routines' },
];

export default function ActiveSchoolsPage({ onBack, onNavigate }) {
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
            <h1>&#127939; Active Schools</h1>
            <p>Introduce short movement, stretching, breathing, and mindfulness activities that support physical activity, emotional well-being, and improved classroom concentration.</p>
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
          <p>Explore all areas of Active Schools</p>
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

      {/* Category 1 – Movement Breaks */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>Movement Breaks</h3>
              <p>Short, energising activities to get students moving and re-focused in the classroom.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>2-Minute Classroom Energiser</li>
                <li><span className="pp-res-bullet"></span>Move and Clap Activity</li>
                <li><span className="pp-res-bullet"></span>Jump and Freeze Game</li>
                <li><span className="pp-res-bullet"></span>Coordination Challenge</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127939; Activity</div>
              <h4>2-Min Classroom Energiser</h4>
              <ul>
                <li>Duration: 2 minutes</li>
                <li>Suitable for: Primary &amp; Middle School</li>
                <li>No equipment needed</li>
                <li>Can be done standing beside desks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 – Stretching & Yoga */}
      <section className="pp-category" id="pp-cat-2">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">2</div>
            <div>
              <h3>Stretching &amp; Yoga</h3>
              <p>Gentle stretching and yoga routines suitable for the classroom setting.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Morning Stretch Routine</li>
                <li><span className="pp-res-bullet"></span>Neck and Shoulder Stretch</li>
                <li><span className="pp-res-bullet"></span>Tree Pose Balance Activity</li>
                <li><span className="pp-res-bullet"></span>Simple Classroom Yoga</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#129495; Activity</div>
              <h4>Morning Stretch Routine</h4>
              <ul>
                <li>Duration: 3 minutes</li>
                <li>Includes neck rolls, arm stretches, side bends</li>
                <li>Great for starting the school day</li>
                <li>Printable instructions available</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 – Breathing & Mindfulness */}
      <section className="pp-category" id="pp-cat-3">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">3</div>
            <div>
              <h3>Breathing &amp; Mindfulness</h3>
              <p>Calming activities to support emotional regulation and concentration.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Balloon Breathing Exercise</li>
                <li><span className="pp-res-bullet"></span>Calm Counting Breath</li>
                <li><span className="pp-res-bullet"></span>One-Minute Quiet Reflection</li>
                <li><span className="pp-res-bullet"></span>Guided Relaxation Activity</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127748; Activity</div>
              <h4>Balloon Breathing Exercise</h4>
              <ul>
                <li>Inhale slowly, imagining inflating a balloon</li>
                <li>Hold for 2 seconds</li>
                <li>Exhale slowly, releasing the balloon</li>
                <li>Repeat 5 times for calm and focus</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 4 – Daily Activity Routines */}
      <section className="pp-category" id="pp-cat-4">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">4</div>
            <div>
              <h3>Daily Activity Routines</h3>
              <p>Structured daily routines integrating movement and mindfulness into the school day.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Primary School Routine</li>
                <li><span className="pp-res-bullet"></span>Middle School Routine</li>
                <li><span className="pp-res-bullet"></span>Movement Break Schedule</li>
                <li><span className="pp-res-bullet"></span>Weekly Activity Planner</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128197; Sample Routine</div>
              <h4>Primary School Daily Routine</h4>
              <table className="pp-menu-table">
                <tbody>
                  <tr><td>8:30 AM</td><td>Morning Stretch (3 min)</td></tr>
                  <tr><td>10:00 AM</td><td>Movement Break (2 min)</td></tr>
                  <tr><td>12:00 PM</td><td>Breathing Exercise (2 min)</td></tr>
                  <tr><td>2:00 PM</td><td>Mindfulness Break (3 min)</td></tr>
                </tbody>
              </table>
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
                <li><button style={{ fontWeight: 700, color: '#1565C0' }}>Active Schools</button></li>
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
