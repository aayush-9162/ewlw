import '../homepage.css';
import '../practices.css';

export default function AboutPage({ onBack, onGoHome, onOpenDomain, onOpenPractice }) {
  return (
    <div className="hp-wrap pp-page" style={{
      '--pp-color': '#2E7D32',
      '--pp-light': '#E8F5E9',
      '--pp-lighter': '#F1F8E9',
      '--pp-border': '#C8E6C9',
      '--pp-dark': '#1B5E20',
      '--pp-gradient': 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 40%, #43A047 100%)',
    }}>
      {/* Navbar */}
      <nav className="hp-navbar">
        <div className="hp-container">
          <button className="hp-nav-logo" onClick={onGoHome}>
            <img src="/ewlw_logo.png" alt="EWLW" className="hp-logo-icon" />
            <div className="hp-logo-text">
              Eat Well. Live Well.
              <small>Healthy Habits for Schools</small>
            </div>
          </button>
          <div className="pp-nav-back">
            <button className="pp-back-btn" onClick={onBack} style={{ background: 'var(--pp-color)', border: 'none', color: '#fff', borderRadius: 'var(--radius-sm)', padding: '8px 18px', fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer' }}>
              &larr; Back
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="pp-hero">
        <div className="hp-container">
          <div className="pp-hero-inner">
            <div className="pp-breadcrumb">
              <button onClick={onGoHome}>Home</button>
              <span className="pp-breadcrumb-sep">/</span>
              <span className="pp-breadcrumb-current">About</span>
            </div>
            <h1>About the Programme</h1>
            <p>Eat Well. Live Well. &mdash; Building healthy habits for lifelong well-being through everyday school practices.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '48px 24px' }}>

        {/* What is EWLW */}
        <section className="about-section">
          <h2 className="about-heading">What is Eat Well. Live Well.?</h2>
          <p className="about-text">
            <strong>Eat Well. Live Well. (EWLW)</strong> is a school-based programme designed to help students develop healthy habits that support their physical, mental, social, and environmental well-being. The programme provides structured learning resources, classroom tools, and practical activities that teachers can integrate into everyday school life.
          </p>
          <p className="about-text">
            EWLW goes beyond traditional health education by embedding well-being practices into the daily school routine. It addresses not only what students eat, but also how they move, think, rest, and interact with others and the environment around them.
          </p>
        </section>

        {/* The EWLW Framework */}
        <section className="about-section">
          <h2 className="about-heading">The EWLW Framework</h2>
          <p className="about-text">
            At the core of the programme is a comprehensive framework of <strong>35 habits</strong> organised across <strong>three domains</strong> of well-being:
          </p>
          <div className="about-domains">
            <div className="about-domain-card" style={{ background: 'linear-gradient(135deg, #E8733A, #C0392B)' }}>
              <span className="about-domain-icon">&#127793;</span>
              <h3>Personal Well-Being</h3>
              <p>21 habits across three clusters &mdash; <strong>ROUTINE</strong>, <strong>HEALTHY</strong>, and <strong>MINDFUL</strong> &mdash; that help students build lifelong health from within. These cover areas such as regular mealtimes, balanced nutrition, hydration, physical activity, sleep, hygiene, and emotional well-being.</p>
            </div>
            <div className="about-domain-card" style={{ background: 'linear-gradient(135deg, #C0459B, #8E44AD)' }}>
              <span className="about-domain-icon">&#129309;</span>
              <h3>Social Well-Being</h3>
              <p>7 life skills for responsible behaviour under the <strong>RESPECT</strong> cluster. These focus on citizenship, equality, gender respect, ethical media use, safety, and building a sense of social responsibility among students.</p>
            </div>
            <div className="about-domain-card" style={{ background: 'linear-gradient(135deg, #1ABC9C, #0E8A72)' }}>
              <span className="about-domain-icon">&#127757;</span>
              <h3>Planetary Well-Being</h3>
              <p>7 sustainability skills aligned with the LiFE (Lifestyle for Environment) mission under the <strong>SUSTAIN</strong> cluster. These encourage students to adopt environmentally responsible habits such as reducing food waste, saving water, and protecting natural resources.</p>
            </div>
          </div>
        </section>

        {/* What the Platform Offers */}
        <section className="about-section">
          <h2 className="about-heading">What the Digital Platform Offers</h2>
          <p className="about-text">
            The EWLW Digital Platform is an online resource hub that supports teachers, students, and families in implementing the programme. It provides:
          </p>
          <div className="about-features">
            <div className="about-feature">
              <span className="about-feature-icon">&#128214;</span>
              <div>
                <h4>Teaching &amp; Learning Resources</h4>
                <p>Habit notes, presentations, videos, posters, and worksheets for each of the 35 habits to support classroom delivery.</p>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">&#128221;</span>
              <div>
                <h4>Lesson Plans</h4>
                <p>Structured lesson plans for every habit, designed to guide teachers through classroom sessions with clear objectives and activities.</p>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">&#127963;</span>
              <div>
                <h4>Healthy School Practices</h4>
                <p>Implementation tools across four areas &mdash; School Food Environment, Active Schools, Teacher Support, and Family Engagement &mdash; to create healthier school environments.</p>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">&#128218;</span>
              <div>
                <h4>Resource Library</h4>
                <p>A collection of videos, activity cards, posters, teacher guides, and parent information sheets to support the programme across the school community.</p>
              </div>
            </div>
            <div className="about-feature">
              <span className="about-feature-icon">&#127919;</span>
              <div>
                <h4>Habit Quizzes</h4>
                <p>Interactive quizzes for each habit to reinforce learning and help students reflect on key concepts covered in the lessons.</p>
              </div>
            </div>
          </div>
        </section>

        {/* About FFF */}
        <section className="about-section">
          <h2 className="about-heading">About Food Future Foundation</h2>
          <div className="about-fff-card">
            <img src="/fff_logo.png" alt="Food Future Foundation" className="about-fff-logo" />
            <div>
              <p className="about-text">
                <strong>Food Future Foundation (FFF)</strong> is the organisation behind the Eat Well. Live Well. programme. FFF works to improve health and nutrition outcomes through education, awareness, and community engagement. The foundation develops evidence-based programmes that promote healthy eating, active lifestyles, and well-being among children and communities.
              </p>
              <p className="about-text">
                FFF designed the EWLW framework, developed all programme content, and built the digital platform to make these resources accessible to schools and educators.
              </p>
              <a href="https://foodfuturefoundation.org/" target="_blank" rel="noopener noreferrer" className="about-fff-link">
                Visit foodfuturefoundation.org &#8594;
              </a>
            </div>
          </div>
        </section>


      </div>

      {/* Footer */}
      <footer className="hp-footer">
        <div className="hp-container">
          <div className="hp-footer-top">
            <div className="hp-footer-brand">
              <div className="hp-footer-logo-row">
                <div className="hp-footer-logo">Eat Well. Live Well. Digital Platform</div>
              </div>
              <p>An initiative Implemented by <strong>CM Shri Schools education<br /><img src="/delhi_gov_logo.png" alt="Govt of NCT Delhi" className="hp-footer-inline-logo" /> Department, Government of NCT of Delhi</strong><span className="hp-footer-support">with support of <a href="https://foodfuturefoundation.org/" target="_blank" rel="noopener noreferrer" className="hp-footer-link"><strong>Food Future Foundation</strong></a>.</span></p>
              <div className="hp-social-links">
                <a href="https://www.linkedin.com/company/food-future-foundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
                <a href="https://www.instagram.com/foodfuturefoundation/" target="_blank" rel="noopener noreferrer" className="hp-social-icon" title="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
              </div>
            </div>
            <div className="hp-footer-col">
              <h4>Platform</h4>
              <ul>
                <li><button onClick={onGoHome}>Home</button></li>
                <li><button onClick={() => { onGoHome(); setTimeout(() => document.getElementById('hp-learning')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Student Learning</button></li>
                <li><button onClick={() => { onGoHome(); setTimeout(() => document.getElementById('hp-practices')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Healthy Practices</button></li>
                <li><button onClick={() => { onGoHome(); setTimeout(() => document.getElementById('hp-resources')?.scrollIntoView({ behavior: 'smooth' }), 100); }}>Resources</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Practices</h4>
              <ul>
                <li><button onClick={() => onOpenPractice('school-food')}>Food Environment</button></li>
                <li><button onClick={() => onOpenPractice('active-schools')}>Active Schools</button></li>
                <li><button onClick={() => onOpenPractice('teacher-engagement')}>Teacher Support</button></li>
                <li><button onClick={() => onOpenPractice('family-engagement')}>Family Engagement</button></li>
                <li><button onClick={() => onOpenPractice('whole-school')}>Whole-of-School</button></li>
              </ul>
            </div>
            <div className="hp-footer-col">
              <h4>Links</h4>
              <ul>
                <li><button style={{ fontWeight: 700, color: '#43A047' }}>About</button></li>
                <li><button>Programme Guidelines</button></li>
                <li><button>Contact Support</button></li>
                <li><button>Privacy Policy</button></li>
              </ul>
            </div>
          </div>
          <div className="hp-footer-bottom">
            <span>&copy; 2026 Eat Well. Live Well. Programme. All rights reserved.</span>
            <div className="hp-footer-partners">
              <span className="hp-partner-badge">Govt. of Delhi</span>
              <a href="https://foodfuturefoundation.org/" target="_blank" rel="noopener noreferrer" className="hp-partner-badge">Food Future Foundation</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
