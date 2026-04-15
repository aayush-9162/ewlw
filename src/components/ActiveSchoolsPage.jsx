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

const TILES = [
  { icon: '\uD83C\uDFC3', label: 'Movement Breaks' },
  { icon: '\uD83E\uDDD8', label: 'Stretching & Yoga' },
  { icon: '\uD83C\uDF2C\uFE0F', label: 'Breathing & Mindfulness' },
  { icon: '\uD83D\uDCC5', label: 'Daily Activity Routines' },
];

import { useEffect } from 'react';

export default function ActiveSchoolsPage({ onBack, onNavigate, scrollTo: scrollTarget }) {
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
            <h1>&#127939; Active Schools</h1>
            <p>The Active Schools approach promotes the integration of physical activity and wellbeing practices into the daily school routine, ensuring that students remain physically active, mentally focused, and emotionally balanced throughout the school day.</p>
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

      {/* Category 1 – Movement Breaks */}
      <section className="pp-category" id="pp-cat-1">
        <div className="hp-container">
          <div className="pp-cat-header">
            <div className="pp-cat-num">1</div>
            <div>
              <h3>Movement Breaks</h3>
              <p>Short bursts of physical activity that help students re-energise during classroom learning.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>What Are Movement Breaks?</h4>
              <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
                Movement breaks involve short bursts of physical activity that increase blood circulation, improve oxygen flow to the brain, and help students refocus after extended periods of concentration.
              </p>
              <h4>Examples of Activities</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Jumping jacks</li>
                <li><span className="pp-res-bullet"></span>Marching in place</li>
                <li><span className="pp-res-bullet"></span>Arm circles</li>
                <li><span className="pp-res-bullet"></span>Cross-crawl movements</li>
              </ul>

              <div className="pp-info-section">
                <h4>Why Movement Breaks Help</h4>
                <ul>
                  <li>Provide a quick mental and physical reset</li>
                  <li>Improve focus and classroom engagement</li>
                  <li>Increase energy and alertness</li>
                  <li>Support better learning outcomes</li>
                </ul>
              </div>

              <div className="pp-info-section">
                <h4>Example 2-Minute Routine (Without Video)</h4>
                <div className="pp-routine-step"><strong>30 seconds</strong> Jumping jacks</div>
                <div className="pp-routine-step"><strong>30 seconds</strong> Stretch arms upward and bend sideways</div>
                <div className="pp-routine-step"><strong>30 seconds</strong> Cross-crawl march (touch opposite elbow to knee)</div>
                <div className="pp-routine-step"><strong>30 seconds</strong> Deep breathing and gentle shaking of arms and legs</div>
              </div>
            </div>
            <div>
              <div className="pp-example-card">
                <div className="pp-ex-badge">&#127909; Video Resource</div>
                <h4>Short Classroom Movement Break</h4>
                <p style={{ marginBottom: 10 }}>The Learning Station</p>
                <div className="pp-video-embed">
                  <iframe src="https://www.youtube.com/embed/JoF_d5sgGgc" title="Short Classroom Movement Break" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
                <div className="pp-info-section">
                  <h4>How to Use in School</h4>
                  <ul>
                    <li>Play the video and ask students to stand beside their desks and follow the movements</li>
                    <li>Encourage participation from all students</li>
                  </ul>
                </div>
              </div>
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
              <p>Simple body movements and poses that help improve flexibility, posture, and relaxation.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <h4>What Are Stretching &amp; Yoga Activities?</h4>
              <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
                Stretching and yoga activities involve simple body movements and poses that help improve flexibility, posture, and relaxation. They are especially useful after long periods of sitting and help develop balance, coordination, and body awareness.
              </p>
              <h4>Examples of Activities</h4>
              <ul>
                <li><span className="pp-res-bullet"></span>Tree pose</li>
                <li><span className="pp-res-bullet"></span>Side stretch</li>
                <li><span className="pp-res-bullet"></span>Forward bend</li>
                <li><span className="pp-res-bullet"></span>Gentle balance poses</li>
              </ul>

              <div className="pp-info-section">
                <h4>How to Use in School</h4>
                <ul>
                  <li>Ask students to stand beside their desks or in an open space in the classroom</li>
                  <li>Demonstrate simple stretches or play a short video guiding the poses</li>
                  <li>Encourage students to move slowly and focus on their breathing while stretching</li>
                  <li>The routine should take 2&ndash;3 minutes and can be repeated during longer sessions</li>
                </ul>
              </div>

              <div className="pp-info-section">
                <h4>Why Stretching &amp; Yoga Help</h4>
                <ul>
                  <li>Improve flexibility and posture</li>
                  <li>Reduce muscle fatigue and stiffness caused by prolonged sitting</li>
                  <li>Support balance and coordination</li>
                  <li>Promote relaxation and calmness, helping students refocus on learning</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="pp-example-card" style={{ marginBottom: 20 }}>
                <div className="pp-ex-badge">&#127909; Video Resource</div>
                <h4>Easy Yoga Poses for Kids</h4>
                <p style={{ marginBottom: 10 }}>Learn &amp; Shine with OVI</p>
                <div className="pp-video-embed">
                  <iframe src="https://www.youtube.com/embed/jO-jIFgGJ4k" title="Easy Yoga Poses for Kids" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
              </div>
              <div className="pp-example-card">
                <div className="pp-ex-badge">&#127909; Video Resource</div>
                <h4>Yoga for Right &amp; Left Brain Coordination</h4>
                <p style={{ marginBottom: 10 }}>Yoga Guppy</p>
                <div className="pp-video-embed">
                  <iframe src="https://www.youtube.com/embed/TVt905ndt4g" title="Yoga for Brain Coordination" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
              </div>
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
              <p>Simple practices that help students relax, stay calm, and manage their thoughts and emotions.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <div className="pp-info-section">
                <h4>Benefits of Mindfulness Breaks</h4>
                <ul>
                  <li>Reduces stress and anxiety</li>
                  <li>Improves attention and emotional control</li>
                  <li>Creates a calmer classroom environment</li>
                </ul>
              </div>

              <div className="pp-info-section">
                <h4>How to Use in Class</h4>
                <ul>
                  <li>Ask students to sit comfortably at their desks with feet on the floor</li>
                  <li>Encourage them to close their eyes or focus softly on one point</li>
                  <li>Guide them through slow breathing or a mindfulness video</li>
                  <li>Resume the lesson after the activity</li>
                </ul>
              </div>

              <p style={{ fontSize: '0.85rem', color: '#616161', lineHeight: 1.6, marginTop: 14 }}>
                Teachers may also use short guided meditation videos.
              </p>
            </div>
            <div>
              <div className="pp-example-card" style={{ marginBottom: 20 }}>
                <div className="pp-ex-badge">&#127909; Activity Video</div>
                <h4>Five Finger Breathing</h4>
                <p style={{ marginBottom: 10 }}>Yoga Guppy</p>
                <div className="pp-video-embed">
                  <iframe src="https://www.youtube.com/embed/CEOcsfGPQqg" title="Five Finger Breathing" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
              </div>
              <div className="pp-example-card">
                <div className="pp-ex-badge">&#127909; Guided Meditation</div>
                <h4>Guided Meditation for Children</h4>
                <p style={{ marginBottom: 10 }}>The Whole Child</p>
                <div className="pp-video-embed">
                  <iframe src="https://www.youtube.com/embed/iplZGpP2VO0" title="Guided Meditation for Children" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                </div>
              </div>
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
              <p>Simple activities integrated throughout the school day to keep students active and engaged.</p>
            </div>
          </div>
          <div className="pp-cat-body">
            <div className="pp-resource-list">
              <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
                While students are active during the PE period, they often remain seated for the rest of the day. To keep them active and engaged, simple activities can be integrated throughout the school day.
              </p>
              <p style={{ fontSize: '0.88rem', color: '#616161', lineHeight: 1.65, marginBottom: 14 }}>
                Schools can implement daily activities in two flexible ways:
              </p>

              <div className="pp-info-section">
                <h4>1. Day-wise Planning</h4>
                <p style={{ fontSize: '0.85rem', color: '#616161', marginBottom: 10 }}>Assign specific activities across the week.</p>
                <div className="pp-routine-step"><strong>Monday</strong> Movement Break</div>
                <div className="pp-routine-step"><strong>Tuesday</strong> Stretching &amp; Yoga</div>
                <div className="pp-routine-step"><strong>Wednesday</strong> Breathing Exercise</div>
                <div className="pp-routine-step"><strong>Thursday</strong> Mindfulness Activity</div>
                <div className="pp-routine-step"><strong>Friday</strong> Free Choice / Fun Activity</div>
              </div>

              <div className="pp-info-section">
                <h4>2. Time-wise Integration</h4>
                <p style={{ fontSize: '0.85rem', color: '#616161', marginBottom: 10 }}>Conduct activities at suitable times during the school day.</p>
                <div className="pp-routine-step"><strong>8:30 AM</strong> Morning Stretch (2&ndash;3 min)</div>
                <div className="pp-routine-step"><strong>10:00 AM</strong> Movement Break (2 min)</div>
                <div className="pp-routine-step"><strong>12:00 PM</strong> Breathing Exercise (2 min)</div>
                <div className="pp-routine-step"><strong>2:00 PM</strong> Mindfulness Break (2&ndash;3 min)</div>
              </div>
            </div>
            <div className="pp-example-card">
              <div className="pp-ex-badge">&#128161; Flexible Approach</div>
              <h4>Schools may choose the approach that best fits their schedule</h4>
              <ul>
                <li>If the day includes a PE period, the 2-minute wellbeing activity can be integrated as a warm-up or cool-down</li>
                <li>On days without PE, the activity may be conducted during morning assembly, mid-morning interval, after lunch, or during the zero period</li>
              </ul>
              <p style={{ fontSize: '0.85rem', color: '#757575', marginTop: 14, lineHeight: 1.6 }}>
                Schools may choose the approach that best fits their schedule and plan their routine accordingly.
              </p>
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
