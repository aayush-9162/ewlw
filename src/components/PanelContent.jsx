import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ALL_LESSONS from '../data/lessons.js';
import { loadPoster, loadReinfPoster, loadLessonImages, loadPptSlides, loadWorksheets, loadShwcModule2, loadKnowMoreSlides } from '../data/lazyData.js';
import HABIT_VIDEOS from '../data/habitVideos.js';
import HABIT_QUIZZES from '../data/habitQuizzes.js';
import KNOW_MORE_DATA from '../data/knowMoreData.js';

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

function HabitPoster({ habit }) {
  const habitIdx = (habit?.n || 1) - 1;
  const posterImage = useLazy(loadPoster, habitIdx);

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Habit Poster
      </h2>
      <div style={{ maxWidth: '860px' }}>
        {posterImage ? (
          <img src={posterImage} alt="Habit Poster"
            style={{ width: '100%', borderRadius: '14px', boxShadow: '0 8px 36px rgba(0,0,0,.15)', display: 'block' }} />
        ) : (
          <div style={{ width: '100%', aspectRatio: '3/4', background: '#f0f0f0', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>Loading...</div>
        )}
      </div>
    </div>
  );
}

function KnowMoreScreen({ habit }) {
  const habitIdx = (habit?.n || 1) - 1;
  const kmData = KNOW_MORE_DATA[habitIdx];
  const posterImage = useLazy(loadPoster, habitIdx);
  const [kmSlides, setKmSlides] = useState(null);

  useEffect(() => {
    if (kmData?.hasSlides) loadKnowMoreSlides().then(setKmSlides);
  }, [kmData]);

  if (!kmData) {
    return (
      <div className="section-content-card">
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 900, marginBottom: '12px' }}>Know More</h3>
        <p style={{ fontSize: '.88rem', color: '#666' }}>Detailed content for this habit will be available soon.</p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>
        Know More — {habit?.name}
      </h2>
      <div className="km-grid">

        {/* Panel 1: Document */}
        <div className="km-card">
          <div className="km-card-header km-card-header--blue">
            <span className="km-card-icon">&#x1F4D6;</span>
            <span className="km-card-title">{kmData.document.title}</span>
          </div>
          <div className="km-card-body km-card-body--scroll">
            {kmData.document.sections.map((sec, i) => (
              <div key={i} className="km-doc-section">
                <h4 className="km-doc-heading">{sec.heading}</h4>
                {sec.text && <p className="km-doc-text">{sec.text}</p>}
                {sec.list && (
                  <ul className="km-doc-list">
                    {sec.list.map((item, j) => <li key={j}>{item}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Panel 2: PPT Slides */}
        <div className="km-card">
          <div className="km-card-header km-card-header--orange">
            <span className="km-card-icon">&#x1F4CA;</span>
            <span className="km-card-title">Presentation</span>
          </div>
          <div className="km-card-body">
            {kmSlides ? (
              <PptSlideViewer slides={kmSlides} />
            ) : (
              <div style={{ padding: '40px', textAlign: 'center', color: '#aaa' }}>Loading slides...</div>
            )}
          </div>
        </div>

        {/* Panel 3: Video */}
        <div className="km-card">
          <div className="km-card-header km-card-header--red">
            <span className="km-card-icon">&#x1F3AC;</span>
            <span className="km-card-title">Video</span>
          </div>
          <div className="km-card-body">
            <div className="km-video-embed">
              <iframe
                src={`https://www.youtube.com/embed/${kmData.video.embedId}`}
                title={kmData.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="km-video-info">
              <h4 className="km-video-title">{kmData.video.title}</h4>
              <p className="km-video-desc">{kmData.video.description}</p>
            </div>
          </div>
        </div>

        {/* Panel 4: Habit Poster */}
        <div className="km-card">
          <div className="km-card-header km-card-header--green">
            <span className="km-card-icon">&#x1F5BC;</span>
            <span className="km-card-title">Habit Poster</span>
          </div>
          <div className="km-card-body" style={{ display: 'flex', justifyContent: 'center' }}>
            {posterImage ? (
              <img src={posterImage} alt="Habit Poster"
                style={{ width: '100%', maxWidth: '400px', borderRadius: '10px', boxShadow: '0 4px 16px rgba(0,0,0,.1)' }} />
            ) : (
              <div style={{ padding: '40px', textAlign: 'center', color: '#aaa' }}>Loading...</div>
            )}
          </div>
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

function QuizPanel({ quiz }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answered, setAnswered] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const total = quiz.questions.length;
  const q = quiz.questions[current];

  const pickOption = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    setAnswered(prev => [...prev, { qIdx: current, picked: idx, correct: idx === q.answer }]);
  };

  const nextQ = () => {
    if (current < total - 1) {
      setCurrent(c => c + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const restart = () => {
    setCurrent(0);
    setSelected(null);
    setAnswered([]);
    setShowResult(false);
  };

  const score = answered.filter(a => a.correct).length;

  if (showResult) {
    const pct = Math.round((score / total) * 100);
    const emoji = pct === 100 ? '\uD83C\uDF1F' : pct >= 60 ? '\uD83C\uDF89' : '\uD83D\uDCAA';
    return (
      <div className="quiz-result">
        <div className="quiz-result-emoji">{emoji}</div>
        <div className="quiz-result-title">
          {pct === 100 ? 'Perfect Score!' : pct >= 60 ? 'Great Job!' : 'Keep Learning!'}
        </div>
        <div className="quiz-result-score">{score} / {total}</div>
        <div className="quiz-result-bar-track">
          <div className="quiz-result-bar-fill" style={{ width: `${pct}%` }} />
        </div>
        <div className="quiz-result-msg">
          {pct === 100 ? 'You know everything about this habit!' :
           pct >= 60 ? 'You are doing well. Review and try again!' :
           'No worries! Read the habit poster and try again.'}
        </div>
        <button className="quiz-restart-btn" onClick={restart}>Play Again &#x1F504;</button>
      </div>
    );
  }

  const optionLabels = ['A', 'B', 'C', 'D'];

  return (
    <div className="quiz-container">
      <div className="quiz-progress-row">
        <div className="quiz-progress-text">Question {current + 1} of {total}</div>
        <div className="quiz-score-badge">{'\u2B50'} {answered.filter(a => a.correct).length}</div>
      </div>
      <div className="quiz-progress-track">
        <div className="quiz-progress-fill" style={{ width: `${((current + 1) / total) * 100}%` }} />
      </div>

      <div className="quiz-question-card">
        <div className="quiz-q-num">Q{current + 1}</div>
        <div className="quiz-q-text">{q.q}</div>
      </div>

      <div className="quiz-options">
        {q.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (selected !== null) {
            if (i === q.answer) cls += ' quiz-option--correct';
            else if (i === selected) cls += ' quiz-option--wrong';
            else cls += ' quiz-option--dimmed';
          }
          return (
            <button key={i} className={cls} onClick={() => pickOption(i)}>
              <span className="quiz-option-label">{optionLabels[i]}</span>
              <span className="quiz-option-text">{opt}</span>
              {selected !== null && i === q.answer && <span className="quiz-option-icon">{'\u2705'}</span>}
              {selected !== null && i === selected && i !== q.answer && <span className="quiz-option-icon">{'\u274C'}</span>}
            </button>
          );
        })}
      </div>

      {selected !== null && (
        <div className={`quiz-explain ${selected === q.answer ? 'quiz-explain--correct' : 'quiz-explain--wrong'}`}>
          <div className="quiz-explain-icon">{selected === q.answer ? '\uD83C\uDF1F' : '\uD83D\uDCA1'}</div>
          <div className="quiz-explain-text">{q.explain}</div>
        </div>
      )}

      {selected !== null && (
        <button className="quiz-next-btn" onClick={nextQ}>
          {current < total - 1 ? 'Next Question \u2192' : 'See Results \uD83C\uDFC6'}
        </button>
      )}
    </div>
  );
}

function AdditionalResources({ habit, openSection }) {
  const habitIdx = (habit?.n || 1) - 1;
  const slides = useLazy(loadPptSlides, habitIdx);
  const hasSlides = slides && slides.length > 0;
  const wsData = useLazy(loadWorksheets, habitIdx);
  const videos = HABIT_VIDEOS[habitIdx] || [];
  const quizData = HABIT_QUIZZES[habitIdx] || null;
  const hasShwc = habitIdx === 6;

  const [shwcPages, setShwcPages] = useState(null);
  useEffect(() => {
    if (hasShwc) loadShwcModule2().then(setShwcPages);
  }, [hasShwc]);

  const sections = [
    { key: 'ppt', label: 'Presentation', icon: '\uD83D\uDCCA' },
    { key: 'ws', label: 'Worksheets', icon: '\uD83D\uDCC4' },
    { key: 'ic', label: 'Videos', icon: '\uD83C\uDFA5' },
  ];
  if (quizData) {
    sections.push({ key: 'quiz', label: 'Quiz', icon: '\uD83C\uDFAF' });
  }
  if (hasShwc) {
    sections.push({ key: 'shwc', label: 'SHWC Module 2', icon: '\uD83D\uDCD8' });
  }

  const [activeSection, setActiveSection] = useState(openSection || 'ppt');

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
          videos.length > 0 ? (
            <div className="videos-grid">
              {videos.map((v, i) => (
                <div key={i} className="video-card">
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className="video-thumb-link">
                    <img
                      src={`https://img.youtube.com/vi/${v.embedId}/hqdefault.jpg`}
                      alt={v.title}
                      className="video-thumb-img"
                    />
                    <div className="video-play-btn"></div>
                  </a>
                  <div className="video-card-body">
                    <h4 className="video-card-title">{v.title}</h4>
                    <p className="video-card-desc">{v.description}</p>
                    <a href={v.url} target="_blank" rel="noopener noreferrer" className="video-card-link">
                      Watch on YouTube &#8599;
                    </a>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="section-content-card">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 900, marginBottom: '12px' }}>Videos</h3>
              <p style={{ fontSize: '.88rem', color: '#666', lineHeight: 1.7 }}>
                Video resources for this habit will be available soon.
              </p>
            </div>
          )
        )}

        {activeSection === 'quiz' && quizData && (
          <QuizPanel quiz={quizData} />
        )}

        {activeSection === 'shwc' && (
          <div className="shwc-pages">
            {shwcPages ? shwcPages.map((src, i) => (
              <img key={i} src={src} alt={`SHWC Module 2 — Page ${i + 1}`} />
            )) : (
              <div style={{ width: '100%', aspectRatio: '3/4', background: '#f0f0f0', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#aaa' }}>Loading...</div>
            )}
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
        <span className="sc-title">{PANEL_NAMES[panelNum] || ''}</span>
      </div>
      <div className="sc-body">
        {panelNum === 1 && openSection === 'knowmore' && <KnowMoreScreen habit={habit} />}
        {panelNum === 1 && openSection !== 'knowmore' && <HabitPoster habit={habit} />}
        {panelNum === 2 && <LessonsPanel habit={habit} openLessonNum={openLessonNum} />}
        {panelNum === 3 && <AdditionalResources habit={habit} openSection={openSection} />}
        {panelNum === 4 && <ReinforcementFeedback habit={habit} openSection={openSection} />}
      </div>
    </div>
  );
}
