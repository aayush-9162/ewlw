import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ALL_LESSONS from '../data/lessons.js';
import POSTER_IMAGES from '../data/posterImages.js';
import REINF_POSTER_IMAGES from '../data/reinfPosterImages.js';
import PPT_SLIDES from '../data/pptSlides.js';
import WORKSHEETS from '../data/worksheets.js';

function HabitPoster({ habit }) {
  const [overviewOpen, setOverviewOpen] = useState(false);
  const [tipsOpen, setTipsOpen] = useState(false);
  const habitIdx = (habit?.n || 1) - 1;
  const posterImage = POSTER_IMAGES[habitIdx];

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Habit Poster
      </h2>
      <div style={{ maxWidth: '860px' }}>
        <img
          src={posterImage}
          alt="Habit Poster"
          style={{ width: '100%', borderRadius: '14px', boxShadow: '0 8px 36px rgba(0,0,0,.15)', display: 'block' }}
        />
        <div className="poster-btn-row">
          <button className="poster-btn poster-btn-primary" onClick={() => setOverviewOpen(true)}>Know More</button>
          <button className="poster-btn poster-btn-secondary" onClick={() => setTipsOpen(true)}>Tips for Teachers</button>
        </div>
      </div>

      {/* Know More Modal */}
      <div className={`poster-overlay${overviewOpen ? ' active' : ''}`}>
        <div className="poster-modal">
          <button className="poster-modal-close" onClick={() => setOverviewOpen(false)}>&times;</button>
          <h3>Habit Overview</h3>
          <p>{habit?.why}</p>
        </div>
      </div>

      {/* Tips Modal */}
      <div className={`poster-overlay${tipsOpen ? ' active' : ''}`}>
        <div className="poster-modal">
          <button className="poster-modal-close" onClick={() => setTipsOpen(false)}>&times;</button>
          <h3>Tips for Teachers</h3>
          {habit?.tips && habit.tips.length > 0 ? (
            <ol style={{ paddingLeft: '18px' }}>
              {habit.tips.map((t, i) => (
                <li key={i} style={{ marginBottom: '6px' }}>{t}</li>
              ))}
            </ol>
          ) : (
            <p>Tips for this habit will be available soon.</p>
          )}
        </div>
      </div>
    </div>
  );
}

function LessonsPanel({ habit, openLessonNum }) {
  const [openId, setOpenId] = useState(null);
  const lessonRefs = useRef({});
  const habitIdx = (habit?.n || 1) - 1;
  const lessons = ALL_LESSONS[habitIdx] || [];

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
        {lessons.map((lesson) => (
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
              {lesson.image && (
                <img
                  src={lesson.image}
                  alt={lesson.name}
                  style={{
                    width: '100%', borderRadius: '10px',
                    boxShadow: '0 4px 20px rgba(0,0,0,.12)', display: 'block', marginTop: '16px'
                  }}
                />
              )}
            </div>
          </div>
        ))}
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
          <span className="ws-tab-sub">Classes 3-5</span>
        </button>
        <button
          className={`ws-tab${level === 'level2' ? ' ws-tab--active' : ''}`}
          onClick={() => setLevel('level2')}
        >
          Level 2
          <span className="ws-tab-sub">Classes 6-8</span>
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

function AdditionalResources({ habit }) {
  const [expanded, setExpanded] = useState({});
  const toggle = (key) => setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  const fileInputRef = useRef(null);

  const habitIdx = (habit?.n || 1) - 1;
  const slides = PPT_SLIDES[habitIdx];
  const hasSlides = slides && slides.length > 0;
  const pptExpanded = !!expanded.ppt;
  const wsData = WORKSHEETS[habitIdx];

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '8px' }}>
        Additional Resources
      </h2>
      <p style={{ fontSize: '.88rem', color: '#666', marginBottom: '20px' }}>
        Explore all teaching and learning materials for this habit.
      </p>
      <div className="ar-grid">
        {/* Presentation */}
        <div className={`ar-card${pptExpanded ? ' ar-card--expanded' : ''}`} style={{ borderColor: '#5A5EC0' }}>
          <div className="ar-card-header" onClick={() => toggle('ppt')}>
            <div className="ar-card-icon">&#128202;</div>
            <div className="ar-card-title" style={{ color: '#5A5EC0' }}>
              Presentation
              {hasSlides && (
                <span style={{
                  marginLeft: '8px', fontSize: '.65rem', background: '#5A5EC0', color: '#fff',
                  padding: '2px 8px', borderRadius: '10px', verticalAlign: 'middle'
                }}>{slides.length} slides</span>
              )}
            </div>
            <div className="ar-card-desc">Classroom presentation slides for this habit.</div>
          </div>
          {pptExpanded && (
            <div style={{ marginTop: '14px' }}>
              {hasSlides ? (
                <PptSlideViewer slides={slides} />
              ) : (
                <div className="ppt-placeholder" style={{ padding: '24px' }}>
                  <div className="ppt-icon">&#128202;</div>
                  <div className="ppt-sub" style={{ fontSize: '.82rem' }}>
                    Presentation slides for this habit will be available soon.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Worksheets */}
        <div className={`ar-card${expanded.ws ? ' ar-card--expanded' : ''}`} style={{ borderColor: '#27AE60' }}>
          <div className="ar-card-header" onClick={() => toggle('ws')}>
            <div className="ar-card-icon">&#128196;</div>
            <div className="ar-card-title" style={{ color: '#27AE60' }}>
              Worksheets for Students
              {wsData && <span style={{ marginLeft: '8px', fontSize: '.65rem', background: '#27AE60', color: '#fff', padding: '2px 8px', borderRadius: '10px', verticalAlign: 'middle' }}>2 levels</span>}
            </div>
            <div className="ar-card-desc">Printable activity worksheets, observation tasks, and home activity cards.</div>
          </div>
          {expanded.ws && (
            <div style={{ marginTop: '14px' }}>
              {wsData ? (
                <WorksheetViewer data={wsData} />
              ) : (
                <div className="ws-placeholder" style={{ padding: '24px' }}>
                  <div className="ws-icon">&#128196;</div>
                  <div className="ws-sub" style={{ fontSize: '.82rem' }}>
                    Worksheets for this habit will be available soon.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Key Messages */}
        <div className="ar-card" style={{ borderColor: '#7B5EA7' }}>
          <div className="ar-card-header" onClick={() => toggle('km')}>
            <div className="ar-card-icon">&#128218;</div>
            <div className="ar-card-title" style={{ color: '#7B5EA7' }}>Key Messages for Families</div>
            <div className="ar-card-desc">Family engagement materials and home conversation guides.</div>
          </div>
          {expanded.km && (
            <div style={{ marginTop: '14px', padding: '14px', background: '#F8F4FF', borderRadius: '10px' }}>
              <p style={{ fontSize: '.84rem', color: '#555', lineHeight: 1.7 }}>
                Key messages and home activities to share with families, including conversation starters and
                observation tasks that reinforce healthy habits at home.
              </p>
            </div>
          )}
        </div>

        {/* Innovative Corner */}
        <div className="ar-card" style={{ borderColor: '#D4A017' }}>
          <div className="ar-card-header" onClick={() => toggle('ic')}>
            <div className="ar-card-icon">&#128161;</div>
            <div className="ar-card-title" style={{ color: '#D4A017' }}>Innovative Corner</div>
            <div className="ar-card-desc">Share creative work &mdash; posters, reels, photos, and family engagement ideas.</div>
          </div>
          {expanded.ic && (
            <div style={{ marginTop: '14px' }}>
              <div className="ic-share-grid" style={{ marginBottom: '14px' }}>
                <div className="ic-share-card"><div className="ic-share-icon">&#127912;</div><div className="ic-share-label">Posters</div></div>
                <div className="ic-share-card"><div className="ic-share-icon">&#127909;</div><div className="ic-share-label">Reels / Videos</div></div>
                <div className="ic-share-card"><div className="ic-share-icon">&#128247;</div><div className="ic-share-label">Photos</div></div>
                <div className="ic-share-card"><div className="ic-share-icon">&#127968;</div><div className="ic-share-label">Family Ideas</div></div>
              </div>
              <div className="ic-upload-box" onClick={() => fileInputRef.current?.click()} style={{ padding: '20px' }}>
                <div className="ic-upload-icon">&#128228;</div>
                <div className="ic-upload-title">Upload Your Work</div>
                <div style={{ marginTop: '8px' }}>
                  <span className="ic-format-badge">JPG</span>
                  <span className="ic-format-badge">PNG</span>
                  <span className="ic-format-badge">PDF</span>
                  <span className="ic-format-badge">MP4</span>
                </div>
                <input ref={fileInputRef} type="file" style={{ display: 'none' }} multiple accept=".jpg,.jpeg,.png,.pdf,.mp4" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReinforcementFeedback({ habit }) {
  const habitIdx = (habit?.n || 1) - 1;
  const reinfImage = REINF_POSTER_IMAGES[habitIdx];

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Reinforcement Poster
      </h2>
      <div style={{ maxWidth: '860px', marginBottom: '32px' }}>
        {reinfImage ? (
          <img
            src={reinfImage}
            alt="Reinforcement Poster"
            style={{ width: '100%', borderRadius: '14px', boxShadow: '0 8px 36px rgba(0,0,0,.15)', display: 'block' }}
          />
        ) : (
          <div style={{ padding: '48px', textAlign: 'center', background: '#f5f5f5', borderRadius: '14px', color: '#888' }}>
            <p style={{ fontSize: '1.1rem' }}>Reinforcement poster for this habit will be available soon.</p>
          </div>
        )}
      </div>
      <hr style={{ border: 'none', borderTop: '2px solid #eee', margin: '32px 0' }} />
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#1B72B8', marginBottom: '24px' }}>
        Feedback
      </h2>

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
        <textarea
          className="fb-input"
          rows="3"
          placeholder="Feedback: ___________________"
          style={{ resize: 'vertical', paddingTop: '8px' }}
        ></textarea>
      </div>

      <button className="fb-submit">Submit Feedback &#8594;</button>
    </div>
  );
}

const PANEL_COLORS = { 1: '#E05555', 2: '#3A7FD5', 3: '#E07830', 4: '#22A882' };
const PANEL_NAMES = { 1: 'Habit Poster', 2: 'Lessons', 3: 'Additional Resources', 4: 'Reinforcement & Feedback' };

export default function PanelContent({ panelNum, habit, onBack, openLessonNum }) {
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
        {panelNum === 1 && <HabitPoster habit={habit} />}
        {panelNum === 2 && <LessonsPanel habit={habit} openLessonNum={openLessonNum} />}
        {panelNum === 3 && <AdditionalResources habit={habit} />}
        {panelNum === 4 && <ReinforcementFeedback habit={habit} />}
      </div>
    </div>
  );
}
