import '../homepage.css';
import '../practices.css';

const PAGE_STYLE = {
  '--pp-color': '#7B1FA2',
  '--pp-light': '#F3E5F5',
  '--pp-lighter': '#FBF5FF',
  '--pp-border': '#E1BEE7',
  '--pp-dark': '#4A148C',
  '--pp-gradient': 'linear-gradient(135deg, #4A148C 0%, #7B1FA2 40%, #9C27B0 100%)',
};

const QUICK_BUTTONS = [
  { icon: '\uD83D\uDCCB', label: 'Classroom Activity Guides' },
  { icon: '\uD83D\uDCDA', label: 'Integrate Habits into Subjects' },
  { icon: '\uD83D\uDCC2', label: 'Teaching Resource Library' },
  { icon: '\uD83C\uDF93', label: 'Teacher Orientation' },
];

const TILES = [
  { icon: '\uD83D\uDCCB', label: 'Classroom Activities' },
  { icon: '\uD83D\uDCDA', label: 'Integrating Habits in Subjects' },
  { icon: '\uD83D\uDCC2', label: 'Teacher Resource Library' },
  { icon: '\uD83C\uDF93', label: 'Teacher Orientation' },
];

export default function TeacherEngagementPage({ onBack, onNavigate }) {
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
            <h1>&#128218; Teacher Support</h1>
            <p>Supporting teachers to integrate healthy habits and well-being practices into everyday classroom learning.</p>
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
          <p>Explore all areas of Teacher Support</p>
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

      {/* Category 1 – Classroom Activity Guides */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>Classroom Activity Guides</h3>
              <p>Ready-to-use activity guides for teachers to facilitate health and well-being discussions.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Healthy Food Habits Discussion</li>
                <li><span className="pp-res-bullet"></span>Reflecting on Daily Routines</li>
                <li><span className="pp-res-bullet"></span>Food Waste Awareness Activity</li>
                <li><span className="pp-res-bullet"></span>Understanding Food Labels</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Activity</div>
              <h4>Healthy Food Habits Discussion</h4>
              <ul>
                <li>Duration: 10 minutes</li>
                <li>Suitable for: Primary &amp; Middle School</li>
                <li>Encourages students to share their daily food habits</li>
                <li>Includes guided questions for teachers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 – Integrating Habits in Subjects */}
      <section className="pp-category" id="pp-cat-2">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">2</div>
            <div>
              <h3>Integrating Habits in Subjects</h3>
              <p>Ideas for weaving health and well-being topics into existing school subjects.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Science: Food Groups and Nutrition</li>
                <li><span className="pp-res-bullet"></span>Social Studies: Food Systems and Sustainability</li>
                <li><span className="pp-res-bullet"></span>Language: Writing on Healthy Lifestyles</li>
                <li><span className="pp-res-bullet"></span>Environmental Studies: Reducing Food Waste</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128300; Cross-Curricular</div>
              <h4>Science: Food Groups and Nutrition</h4>
              <ul>
                <li>Classify foods into groups (carbohydrates, proteins, fats, vitamins)</li>
                <li>Students analyse their own tiffin contents</li>
                <li>Create a balanced meal poster as group activity</li>
                <li>Aligns with NCERT Science curriculum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 – Teacher Resource Library */}
      <section className="pp-category" id="pp-cat-3">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">3</div>
            <div>
              <h3>Teacher Resource Library</h3>
              <p>A collection of videos, posters, cards, and guides to support classroom teaching.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Short Educational Videos</li>
                <li><span className="pp-res-bullet"></span>Classroom Posters</li>
                <li><span className="pp-res-bullet"></span>Printable Activity Cards</li>
                <li><span className="pp-res-bullet"></span>Teacher Discussion Guides</li>
                <li><span className="pp-res-bullet"></span>Student Worksheets</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128230; Resource Types</div>
              <h4>Available Formats</h4>
              <ul>
                <li>Video: 1-3 minute educational clips</li>
                <li>Posters: Printable A3 and A4 sizes</li>
                <li>Activity Cards: Ready-to-use classroom activities</li>
                <li>Worksheets: Student reflection and practice sheets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 4 – Teacher Orientation */}
      <section className="pp-category" id="pp-cat-4">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">4</div>
            <div>
              <h3>Teacher Orientation</h3>
              <p>Introduction and training materials for teachers new to the EWLW programme.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Introduction to EWLW</li>
                <li><span className="pp-res-bullet"></span>Supporting Healthy Habits in Schools</li>
                <li><span className="pp-res-bullet"></span>Examples of School Activities</li>
                <li><span className="pp-res-bullet"></span>FAQ</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127891; Orientation</div>
              <h4>Getting Started with EWLW</h4>
              <ul>
                <li>Understand the EWLW framework and goals</li>
                <li>Learn how to integrate habits into daily teaching</li>
                <li>Explore real examples from participating schools</li>
                <li>Access answers to common questions</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Teacher Tools */}
      <section className="pp-tools">
        <div className="hp-container">
          <h2>&#128295; Teacher Tools</h2>
          <p>Practical tools to help plan and deliver classroom activities</p>
          <div className="pp-tools-grid">
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#127922;</div>
              <div>
                <h4>Classroom Activity Generator</h4>
                <span>Get a random classroom activity</span>
              </div>
            </div>
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#127183;</div>
              <div>
                <h4>Printable Activity Cards</h4>
                <span>Download and print activity cards</span>
              </div>
            </div>
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#128197;</div>
              <div>
                <h4>Weekly Classroom Activity Planner</h4>
                <span>Plan activities for the week</span>
              </div>
            </div>
            <div className="pp-tool-card">
              <div className="pp-tool-icon">&#128221;</div>
              <div>
                <h4>Habit Reflection Worksheet</h4>
                <span>Student self-reflection sheets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Activity */}
      <section className="pp-featured">
        <div className="hp-container">
          <div className="pp-featured-inner">
            <div className="pp-featured-icon">&#9999;&#65039;</div>
            <div className="pp-featured-text">
              <h3>Featured Activity: Food Waste Reflection Activity</h3>
              <p>A guided classroom discussion where students reflect on food waste at school and home, and brainstorm practical steps to reduce it. Includes a printable worksheet for students to track their food waste for one week.</p>
              <button className="pp-featured-btn">Try This Activity &#8594;</button>
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
                <li><button style={{ fontWeight: 700, color: '#7B1FA2' }}>Teacher Support</button></li>
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
