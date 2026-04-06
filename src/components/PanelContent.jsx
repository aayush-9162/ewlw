import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ALL_LESSONS from '../data/lessons.js';
import { loadPoster, loadReinfPoster, loadLessonImages, loadPptSlides, loadWorksheets } from '../data/lazyData.js';

// Hook: load async data on mount/key change
function useLazy(loader, key) {
  const [data, setData] = useState(null);
  useEffect(() => {
    let cancelled = false;
    setData(null);
    loader(key).then(d => { if (!cancelled) setData(d); });
    return () => { cancelled = true; };
  }, [key]);
  return data;
}

function HabitPoster({ habit, openSection }) {
  const [activeSection, setActiveSection] = useState(openSection || 'poster');
  const habitIdx = (habit?.n || 1) - 1;
  const posterImage = useLazy(loadPoster, habitIdx);

  const sections = [
    { key: 'poster', label: 'Poster', icon: '\uD83D\uDDBC' },
    { key: 'knowmore', label: 'Know More', icon: '\uD83D\uDCDA' },
    { key: 'tips', label: 'Tips for Teachers', icon: '\uD83D\uDCA1' },
    { key: 'family', label: 'Key Messages for Families', icon: '\uD83C\uDFE0' },
  ];

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Habit Poster
      </h2>

      <div className="section-tabs">
        {sections.map(s => (
          <button key={s.key}
            className={`section-tab${activeSection === s.key ? ' section-tab--active' : ''}`}
            onClick={() => setActiveSection(s.key)}>
            <span className="section-tab-icon">{s.icon}</span>
            <span className="section-tab-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeSection === 'poster' && (
          <div style={{ maxWidth: '860px' }}>
            {posterImage ? (
              <img src={posterImage} alt="Habit Poster"
                style={{ width: '100%', borderRadius: '14px', boxShadow: '0 8px 36px rgba(0,0,0,.15)', display: 'block' }} />
            ) : (
              <div style={{ width: '100%', aspectRatio: '3/4', background: '#f0f0f0', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>Loading...</div>
            )}
          </div>
        )}

        {activeSection === 'knowmore' && (
          <div className="section-content-card">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 900, marginBottom: '12px' }}>Why This Habit Matters</h3>
            <p style={{ fontSize: '.92rem', color: '#444', lineHeight: 1.8 }}>{habit?.why}</p>
          </div>
        )}

        {activeSection === 'tips' && (
          <div className="section-content-card">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 900, marginBottom: '12px' }}>Tips for Teachers</h3>
            {habit?.tips && habit.tips.length > 0 ? (
              <ol style={{ paddingLeft: '20px', margin: 0 }}>
                {habit.tips.map((t, i) => (
                  <li key={i} style={{ fontSize: '.88rem', color: '#444', lineHeight: 1.8, marginBottom: '6px' }}>{t}</li>
                ))}
              </ol>
            ) : (
              <p style={{ color: '#888' }}>Tips for this habit will be available soon.</p>
            )}
          </div>
        )}

        {activeSection === 'family' && (
          <div className="section-content-card">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 900, marginBottom: '12px' }}>Key Messages for Families</h3>
            <p style={{ fontSize: '.88rem', color: '#444', lineHeight: 1.8 }}>
              Key messages and home activities to share with families, including conversation starters and
              observation tasks that reinforce healthy habits at home.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function LessonsPanel({ habit, openLessonNum }) {
  const [openId, setOpenId] = useState(null);
  const lessonRefs = useRef({});
  const habitIdx = (habit?.n || 1) - 1;
  const lessons = ALL_LESSONS[habitIdx] || [];
  const lessonImages = useLazy(loadLessonImages, habitIdx);

  useEffect(() => {
    if (openLessonNum) {
      const id = `h${habitIdx}l${openLessonNum}`;
      setOpenId(id);
      setTimeout(() => {
        lessonRefs.current[id]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    }
  }, [openLessonNum, habitIdx]);

  const toggleLesson = (id) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>Lessons</h2>
        <span style={{
          background: '#1C1A17', color: '#F9F5EC', fontFamily: "'DM Mono', monospace",
          fontSize: '.68rem', padding: '3px 12px', borderRadius: '100px'
        }}>Habit {habit?.n || 1}</span>
      </div>
      <div className="lesson-accordion">
        {lessons.map((lesson) => {
          const img = lessonImages ? lessonImages[lesson.num - 1] : null;
          return (
          <div
            key={lesson.id}
            ref={el => lessonRefs.current[lesson.id] = el}
            className={`lesson-item${openId === lesson.id ? ' open' : ''}`}
          >
            <div className="lesson-header" onClick={() => toggleLesson(lesson.id)}>
              <div className="lesson-num-badge">{lesson.num}</div>
              <div className="lesson-header-text">
                <div className="lesson-name">{lesson.name}</div>
                <div className="lesson-objective">{lesson.objective}</div>
              </div>
              <div className="lesson-chevron">&#9662;</div>
            </div>
            <div className="lesson-body" style={{ padding: '0 22px 22px' }}>
              {img ? (
                <img
                  src={img}
                  alt={lesson.name}
                  style={{
                    width: '100%', borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,.12)', display: 'block', marginTop: '16px'
                  }}
                />
              ) : openId === lesson.id ? (
                <div style={{ width: '100%', aspectRatio: '4/3', background: '#f5f5f5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#bbb', marginTop: '16px' }}>Loading...</div>
              ) : null}
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}

function SlideViewerCore({ slides, current, setCurrent, onFullscreen, showFullscreenBtn, exitBtn }) {
  const total = slides.length;
  const prev = useCallback(() => setCurrent(c => (c - 1 + total) % total), [total, setCurrent]);
  const next = useCallback(() => setCurrent(c => (c + 1) % total), [total, setCurrent]);
  const thumbsRef = useRef(null);

  useEffect(() => {
    if (thumbsRef.current) {
      const active = thumbsRef.current.children[current];
      if (active) active.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
  }, [current]);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [prev, next]);

  return (
    <>
      <div className="ppt-viewer-bar">
        <div className="ppt-slide-counter">Slide {current + 1} / {total}</div>
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
          {showFullscreenBtn && (
            <button className="ppt-btn" onClick={onFullscreen} title="Fullscreen">&#x26F6;</button>
          )}
          {exitBtn}
        </div>
      </div>
      <div className="ppt-slide-area">
        <button className="ppt-nav ppt-nav--prev" onClick={prev}>&#8249;</button>
        <img src={slides[current]} alt={`Slide ${current + 1}`} className="ppt-slide-img" />
        <button className="ppt-nav ppt-nav--next" onClick={next}>&#8250;</button>
      </div>
      <div className="ppt-thumbs" ref={thumbsRef}>
        {slides.map((s, i) => (
          <div key={i} onClick={() => setCurrent(i)}
            className={`ppt-thumb${i === current ? ' ppt-thumb--active' : ''}`}>
            <img src={s} alt="" />
          </div>
        ))}
      </div>
      <div className="ppt-progress">
        <div className="ppt-progress-bar" style={{ width: `${((current + 1) / total) * 100}%` }} />
      </div>
    </>
  );
}

function PptFullscreenOverlay({ slides, current, setCurrent, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div className="ppt-fullscreen-overlay" onClick={onClose}>
      <div className="ppt-fs-inner" onClick={(e) => e.stopPropagation()}>
        <SlideViewerCore
          slides={slides} current={current} setCurrent={setCurrent}
          onFullscreen={onClose} showFullscreenBtn={false}
          exitBtn={<button className="ppt-exit-btn" onClick={onClose}>&#x2716; Exit</button>}
        />
      </div>
    </div>,
    document.body
  );
}

function PptSlideViewer({ slides }) {
  const [current, setCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = useCallback(() => setIsFullscreen(true), []);
  const closeFullscreen = useCallback(() => setIsFullscreen(false), []);

  return (
    <>
      <div className="ppt-viewer">
        <SlideViewerCore
          slides={slides} current={current} setCurrent={setCurrent}
          onFullscreen={openFullscreen} showFullscreenBtn={true}
        />
      </div>
      {isFullscreen && (
        <PptFullscreenOverlay
          slides={slides} current={current} setCurrent={setCurrent}
          onClose={closeFullscreen}
        />
      )}
    </>
  );
}

function WorksheetViewer({ data }) {
  const [level, setLevel] = useState('level1');
  const pages = data[level] || [];

  return (
    <div className="ws-viewer">
      <div className="ws-tabs">
        <button
          className={`ws-tab${level === 'level1' ? ' ws-tab--active' : ''}`}
          onClick={() => setLevel('level1')}
        >
          Level 1
          <span className="ws-tab-sub">Classes 3-5 &middot; Ex I-III</span>
        </button>
        <button
          className={`ws-tab${level === 'level2' ? ' ws-tab--active' : ''}`}
          onClick={() => setLevel('level2')}
        >
          Level 2
          <span className="ws-tab-sub">Classes 6-8 &middot; Ex I-IV</span>
        </button>
      </div>
      <div className="ws-pages">
        {pages.map((src, i) => (
          <img key={`${level}-${i}`} src={src} alt={`${level} page ${i + 1}`} className="ws-page-img" />
        ))}
      </div>
    </div>
  );
}

function AdditionalResources({ habit, openSection }) {
  const [activeSection, setActiveSection] = useState(openSection || 'ppt');
  const habitIdx = (habit?.n || 1) - 1;
  const slides = useLazy(loadPptSlides, habitIdx);
  const hasSlides = slides && slides.length > 0;
  const wsData = useLazy(loadWorksheets, habitIdx);

  const sections = [
    { key: 'ppt', label: 'Presentation', icon: '\uD83D\uDCCA' },
    { key: 'ws', label: 'Worksheets', icon: '\uD83D\uDCC4' },
    { key: 'ic', label: 'Videos', icon: '\uD83C\uDFA5' },
  ];

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Additional Resources
      </h2>

      <div className="section-tabs">
        {sections.map(s => (
          <button key={s.key}
            className={`section-tab${activeSection === s.key ? ' section-tab--active' : ''}`}
            onClick={() => setActiveSection(s.key)}>
            <span className="section-tab-icon">{s.icon}</span>
            <span className="section-tab-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeSection === 'ppt' && (
          hasSlides ? (
            <PptSlideViewer slides={slides} />
          ) : (
            <div className="ppt-placeholder" style={{ padding: '24px' }}>
              <div className="ppt-icon">&#128202;</div>
              <div className="ppt-sub" style={{ fontSize: '.82rem' }}>
                Presentation slides for this habit will be available soon.
              </div>
            </div>
          )
        )}

        {activeSection === 'ws' && (
          wsData ? (
            <WorksheetViewer data={wsData} />
          ) : (
            <div className="ws-placeholder" style={{ padding: '24px' }}>
              <div className="ws-icon">&#128196;</div>
              <div className="ws-sub" style={{ fontSize: '.82rem' }}>
                Worksheets for this habit will be available soon.
              </div>
            </div>
          )
        )}

        {activeSection === 'ic' && (
          <div className="section-content-card">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 900, marginBottom: '12px' }}>Videos</h3>
            <p style={{ fontSize: '.88rem', color: '#666', lineHeight: 1.7 }}>
              Video resources for this habit will be available soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function ReinforcementFeedback({ habit, openSection }) {
  const [activeSection, setActiveSection] = useState(openSection || 'reinf');
  const habitIdx = (habit?.n || 1) - 1;
  const reinfImage = useLazy(loadReinfPoster, habitIdx);

  const sections = [
    { key: 'reinf', label: 'Reinforcement Poster', icon: '\uD83D\uDDBC' },
    { key: 'feedback', label: 'Feedback', icon: '\uD83D\uDCAC' },
  ];

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Reinforcement & Feedback
      </h2>

      <div className="section-tabs">
        {sections.map(s => (
          <button key={s.key}
            className={`section-tab${activeSection === s.key ? ' section-tab--active' : ''}`}
            onClick={() => setActiveSection(s.key)}>
            <span className="section-tab-icon">{s.icon}</span>
            <span className="section-tab-label">{s.label}</span>
          </button>
        ))}
      </div>

      <div style={{ marginTop: '20px' }}>
        {activeSection === 'reinf' && (
          <div style={{ maxWidth: '860px' }}>
            {reinfImage ? (
              <img src={reinfImage} alt="Reinforcement Poster"
                style={{ width: '100%', borderRadius: '14px', boxShadow: '0 8px 36px rgba(0,0,0,.15)', display: 'block' }} />
            ) : reinfImage === null ? (
              <div style={{ padding: '48px', textAlign: 'center', background: '#f5f5f5', borderRadius: '14px', color: '#888' }}>
                <p style={{ fontSize: '1.1rem' }}>Reinforcement poster for this habit will be available soon.</p>
              </div>
            ) : (
              <div style={{ width: '100%', aspectRatio: '3/4', background: '#f0f0f0', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>Loading...</div>
            )}
          </div>
        )}

        {activeSection === 'feedback' && (
          <div>
            <div className="fb-section">
              <div className="fb-section-title">1. Resource Type</div>
              <div className="fb-checkboxes">
                {['Lessons for Teachers', 'Poster', 'PPT', 'Worksheets', 'Family Engagement', 'Other'].map((item, i) => (
                  <label key={i} className="fb-check-item"><input type="checkbox" /> {item}</label>
                ))}
              </div>
            </div>
            <div className="fb-section">
              <div className="fb-section-title">2. Lessons for Teachers</div>
              <div className="fb-lessons-row">
                <span>Lesson:</span>
                {['L1', 'L2', 'L3', 'L4', 'L5', 'L6'].map((l, i) => (
                  <label key={i} className="fb-lesson-check"><input type="checkbox" /> {l}</label>
                ))}
              </div>
              <input className="fb-input" type="text" placeholder="Feedback: ___________________" />
            </div>
            <div className="fb-section">
              <div className="fb-section-title">3. Poster</div>
              <div className="fb-checkboxes" style={{ flexDirection: 'row', gap: '20px', marginBottom: '8px' }}>
                <span style={{ fontSize: '.86rem', fontWeight: 600 }}>Type:</span>
                <label className="fb-check-item"><input type="checkbox" /> Instruction</label>
                <label className="fb-check-item"><input type="checkbox" /> Reinforcement</label>
              </div>
              <input className="fb-input" type="text" placeholder="Feedback: ___________________" />
            </div>
            <div className="fb-section">
              <div className="fb-section-title">4. PPT</div>
              <input className="fb-input" type="text" placeholder="Feedback: ___________________" />
            </div>
            <div className="fb-section">
              <div className="fb-section-title">5. Family Engagement Activities</div>
              <input className="fb-input" type="text" placeholder="Feedback: ___________________" />
            </div>
            <div className="fb-section">
              <div className="fb-section-title">6. Any Other Feedback</div>
              <textarea className="fb-input" rows="3" placeholder="Feedback: ___________________"
                style={{ resize: 'vertical', paddingTop: '8px' }}></textarea>
            </div>
            <button className="fb-submit">Submit Feedback &#8594;</button>
          </div>
        )}
      </div>
    </div>
  );
}

const PANEL_COLORS = { 1: '#E05555', 2: '#3A7FD5', 3: '#E07830', 4: '#22A882' };
const PANEL_NAMES = { 1: 'Habit Poster', 2: 'Lessons', 3: 'Additional Resources', 4: 'Reinforcement & Feedback' };

export default function PanelContent({ panelNum, habit, onBack, openLessonNum, openSection }) {
  return (
    <div>
      <div className="sc-header">
        <button className="sc-back" onClick={onBack}>&#8592; Back</button>
        <span className="sc-badge" style={{ background: PANEL_COLORS[panelNum] || '#888' }}>
          Panel 0{panelNum}
        </span>
        <span className="sc-title">{PANEL_NAMES[panelNum] || ''}</span>
      </div>
      <div className="sc-body">
        {panelNum === 1 && <HabitPoster habit={habit} openSection={openSection} />}
        {panelNum === 2 && <LessonsPanel habit={habit} openLessonNum={openLessonNum} />}
        {panelNum === 3 && <AdditionalResources habit={habit} openSection={openSection} />}
        {panelNum === 4 && <ReinforcementFeedback habit={habit} openSection={openSection} />}
      </div>
    </div>
  );
}
