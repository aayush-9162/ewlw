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

const TILES = [
  { icon: '\uD83C\uDF93', label: 'Teacher Orientation' },
  { icon: '\uD83D\uDCA1', label: 'Classroom Tips' },
  { icon: '\uD83D\uDD2C', label: 'Integrating Habits in Subjects' },
  { icon: '\uD83D\uDCCA', label: 'Assessment & Behaviour Change' },
];

import { useEffect } from 'react';

export default function TeacherEngagementPage({ onBack, onNavigate, scrollTo: scrollTarget }) {
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
            <h1>&#128218; Teacher Support</h1>
            <p>Supporting teachers to integrate healthy habits and well-being practices into everyday classroom learning.</p>
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

      {/* Category 1 – Teacher Orientation */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>Teacher Orientation</h3>
              <p>Introduction and training materials for teachers new to the EWLW programme.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Resources</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Understand EWLW Framework and goals</li>
                <li><span className="pp-res-bullet"></span>Navigation Guide</li>
                <li><span className="pp-res-bullet"></span>Learning Resources for Classroom Support Tools</li>
                <li><span className="pp-res-bullet"></span>Demo Class: Integrating Habits into Daily Teaching</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#127891; Orientation</div>
              <h4>Getting Started with EWLW</h4>
              <ul>
                <li>Understand the EWLW framework and goals</li>
                <li>Learn how to navigate the platform</li>
                <li>Explore classroom support tools and resources</li>
                <li>Watch a demo class on integrating habits into daily teaching</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 – Classroom Tips */}
      <section className="pp-category" id="pp-cat-2">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">2</div>
            <div>
              <h3>Classroom Tips</h3>
              <p>Ready-to-use, cluster-wise tips for integrating healthy habits into classroom discussions.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>ROUTINE Cluster</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Guide discussions on building consistent daily habits</li>
                <li><span className="pp-res-bullet"></span>Emphasise how routines improve focus</li>
                <li><span className="pp-res-bullet"></span>Encourage reflection on time management</li>
                <li><span className="pp-res-bullet"></span>Connect routines with well-being</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> Discuss how a fixed sleep and wake time helps students feel more alert and focused in class.</p>

              <h4>HEALTHY Cluster</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Facilitate conversations on balanced choices</li>
                <li><span className="pp-res-bullet"></span>Help students understand the link between food, energy, and growth</li>
                <li><span className="pp-res-bullet"></span>Encourage awareness of healthy vs unhealthy habits</li>
                <li><span className="pp-res-bullet"></span>Promote physical activity as part of daily life</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> Ask students to share one healthy meal they had today and what made it healthy.</p>

              <h4>MINDFUL Cluster</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Encourage awareness of thoughts, feelings, and actions</li>
                <li><span className="pp-res-bullet"></span>Create space for students to express freely</li>
                <li><span className="pp-res-bullet"></span>Discuss ways to stay calm under pressure</li>
                <li><span className="pp-res-bullet"></span>Build emotional regulation skills</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> After a short breathing activity, ask students how it felt and what they noticed.</p>

              <h4>RESPECT Cluster</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Promote empathy, kindness, and inclusion</li>
                <li><span className="pp-res-bullet"></span>Encourage respectful communication</li>
                <li><span className="pp-res-bullet"></span>Build awareness of responsible behaviour</li>
                <li><span className="pp-res-bullet"></span>Reinforce relationships and teamwork</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 18 }}><strong>Example:</strong> Discuss what inclusion means and how students can make everyone feel welcome.</p>

              <h4>SUSTAIN Cluster</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Encourage responsible resource use</li>
                <li><span className="pp-res-bullet"></span>Build awareness of environmental impact</li>
                <li><span className="pp-res-bullet"></span>Promote sustainable daily habits</li>
                <li><span className="pp-res-bullet"></span>Connect individual actions with long-term wellbeing</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 6, marginBottom: 0 }}><strong>Example:</strong> Turning off lights when leaving a room, not wasting water, and reusing materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category 3 – Integrating Habits in Subjects */}
      <section className="pp-category" id="pp-cat-3">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">3</div>
            <div>
              <h3>Integrating Habits in Subjects</h3>
              <p>Ideas for weaving health and well-being topics into existing school subjects.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Subject Integration Ideas</h4>
              <ul>
                <li><span className="pp-res-bullet"></span><strong>Science:</strong> Food Groups and Nutrition &ndash; Classify foods, analyse tiffin contents, create balanced meal posters</li>
                <li><span className="pp-res-bullet"></span><strong>Social Studies:</strong> Food Systems and Sustainability &ndash; Explore where food comes from and the impact of food choices</li>
                <li><span className="pp-res-bullet"></span><strong>Language:</strong> Writing on Healthy Lifestyles &ndash; Essays, stories, and discussions on healthy habits</li>
                <li><span className="pp-res-bullet"></span><strong>Environmental Studies:</strong> Reducing Food Waste &ndash; Track and reduce food waste, understand environmental impact</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128300; Cross-Curricular</div>
              <h4>Example: Science &ndash; Food Groups and Nutrition</h4>
              <ul>
                <li>Classify foods into groups (carbohydrates, proteins, fats, vitamins)</li>
                <li>Students analyse their own tiffin contents</li>
                <li>Create a balanced meal poster as a group activity</li>
                <li>Aligns with NCERT Science curriculum</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Category 4 – Assessment & Behaviour Change */}
      <section className="pp-category" id="pp-cat-4">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">4</div>
            <div>
              <h3>Assessment &amp; Behaviour Change</h3>
              <p>Tools and methods to observe, assess, and support healthy habit adoption in the classroom.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>Assessment Tools</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Simple ways to observe habit adoption in students</li>
                <li><span className="pp-res-bullet"></span>Questions for classroom discussions on healthy habits</li>
                <li><span className="pp-res-bullet"></span>Student self-assessment ideas</li>
                <li><span className="pp-res-bullet"></span>Quick feedback tools for teachers</li>
              </ul>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128203; Assessment</div>
              <h4>Tracking Habit Adoption</h4>
              <ul>
                <li>Observe changes in student behaviour over time</li>
                <li>Use guided questions to spark discussions</li>
                <li>Encourage students to self-reflect on their habits</li>
                <li>Collect quick feedback to improve activities</li>
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
