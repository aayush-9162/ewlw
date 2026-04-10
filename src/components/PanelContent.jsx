import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import ALL_LESSONS from '../data/lessons.js';
import { loadReinfPoster, loadLessonImages, loadPptSlides, loadWorksheets, loadShwcModule, loadKnowMoreSlides, loadDgiGuideline, loadTlrPosters, loadDartBook, loadGardenBook } from '../data/lazyData.js';
import HABIT_VIDEOS from '../data/habitVideos.js';
import HABIT_QUIZZES from '../data/habitQuizzes.js';
import KNOW_MORE_DATA from '../data/knowMoreData.js';
import SHW_DATA from '../data/shwData.js';
import DGI_DATA from '../data/dgiData.js';
import ADDITIONAL_VIDEOS from '../data/additionalVideos.js';

function SkeletonPoster() {
  return <div className="skeleton skeleton-poster"></div>;
}
function SkeletonSlide() {
  return <div className="skeleton skeleton-slide"></div>;
}
function SkeletonDoc() {
  return (
    <div className="skeleton skeleton-card" style={{ maxWidth: '700px' }}>
      <div className="skeleton-lines">
        <div className="skeleton skeleton-line" style={{ width: '40%', height: '18px' }}></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line" style={{ width: '50%' }}></div>
      </div>
    </div>
  );
}

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

function TeachingLearningResources({ habit, openSection }) {
  const habitIdx = (habit?.n || 1) - 1;
  const tlrPosters = useLazy(loadTlrPosters, habitIdx);
  const slides = useLazy(loadPptSlides, habitIdx);
  const hasSlides = slides && slides.length > 0;
  const wsData = useLazy(loadWorksheets, habitIdx);
  const videos = HABIT_VIDEOS[habitIdx] || [];
  const kmData = KNOW_MORE_DATA[habitIdx];
  const [kmSlides, setKmSlides] = useState(null);

  useEffect(() => {
    if (kmData?.hasSlides) loadKnowMoreSlides().then(setKmSlides);
  }, [kmData]);

  const sections = [
    { key: 'note', label: 'Habit Note', icon: '\uD83D\uDCD6' },
    { key: 'ppt', label: 'Presentation', icon: '\uD83D\uDCCA' },
    { key: 'video', label: 'Video', icon: '\uD83C\uDFA5' },
    { key: 'poster', label: 'Poster/Image', icon: '\uD83D\uDDBC' },
    { key: 'ws', label: 'Worksheets', icon: '\uD83D\uDCC4' },
  ];

  const [activeSection, setActiveSection] = useState(openSection || 'note');

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '6px' }}>
        Teaching & Learning Resources
      </h2>
      <p style={{ fontSize: '.82rem', color: '#666', lineHeight: 1.6, marginBottom: '18px', maxWidth: '760px' }}>
        These resources are designed to support teachers in understanding the habit and preparing effectively for classroom sessions. They provide clear explanations, engaging materials, and structured support to help teachers confidently deliver the lessons and reinforce the habit overall.
      </p>

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
        {activeSection === 'note' && (
          kmData ? (
            <div>
              <div className="km-grid">
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
                {kmData.video && (
                  <div className="km-card">
                    <div className="km-card-header km-card-header--red">
                      <span className="km-card-icon">&#x1F3AC;</span>
                      <span className="km-card-title">Video</span>
                    </div>
                    <div className="km-card-body">
                      <div className="km-video-embed">
                        <iframe
                          src={kmData.video.embedUrl}
                          title={kmData.video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                        />
                      </div>
                      <div className="km-video-info">
                        <h4 className="km-video-title">{kmData.video.title}</h4>
                        <p className="km-video-desc">{kmData.video.description}</p>
                      </div>
                    </div>
                  </div>
                )}
                {kmData.hasSlides && (
                  <div className="km-card">
                    <div className="km-card-header km-card-header--orange">
                      <span className="km-card-icon">&#x1F4CA;</span>
                      <span className="km-card-title">Presentation</span>
                    </div>
                    <div className="km-card-body">
                      {kmSlides ? (
                        <PptSlideViewer slides={kmSlides} />
                      ) : (
                        <SkeletonSlide />
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="section-content-card">
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 900, marginBottom: '12px' }}>Habit Note</h3>
              <p style={{ fontSize: '.88rem', color: '#666', lineHeight: 1.7 }}>
                Detailed habit note for this habit will be available soon.
              </p>
            </div>
          )
        )}

        {activeSection === 'ppt' && (
          hasSlides ? (
            <PptSlideViewer slides={slides} />
          ) : slides === null ? (
            <SkeletonSlide />
          ) : (
            <div className="ppt-placeholder" style={{ padding: '24px' }}>
              <div className="ppt-icon">&#128202;</div>
              <div className="ppt-sub" style={{ fontSize: '.82rem' }}>
                Presentation slides for this habit will be available soon.
              </div>
            </div>
          )
        )}

        {activeSection === 'video' && (
          videos.length > 0 ? (
            <div className="videos-grid">
              {videos.map((v, i) => (
                <div key={i} className="video-card">
                  <div className="video-embed">
                    <iframe
                      src={v.embedUrl}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="video-card-body">
                    <h4 className="video-card-title">{v.title}</h4>
                    <p className="video-card-desc">{v.description}</p>
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

        {activeSection === 'poster' && (
          <div style={{ maxWidth: '860px' }}>
            {tlrPosters && tlrPosters.length > 0 ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {tlrPosters.map((src, i) => (
                  <img key={i} src={src} alt={`Poster ${i + 1}`}
                    style={{ width: '100%', borderRadius: '14px', boxShadow: '0 8px 36px rgba(0,0,0,.15)', display: 'block' }} />
                ))}
              </div>
            ) : tlrPosters === null ? (
              <SkeletonPoster />
            ) : (
              <div className="section-content-card" style={{ maxWidth: '760px' }}>
                <p style={{ fontSize: '.88rem', color: '#666', lineHeight: 1.7 }}>
                  Posters and images for this habit will be available soon.
                </p>
              </div>
            )}
          </div>
        )}

        {activeSection === 'ws' && (
          wsData ? (
            <WorksheetViewer data={wsData} />
          ) : wsData === null ? (
            <SkeletonPoster />
          ) : (
            <div className="ws-placeholder" style={{ padding: '24px' }}>
              <div className="ws-icon">&#128196;</div>
              <div className="ws-sub" style={{ fontSize: '.82rem' }}>
                Worksheets for this habit will be available soon.
              </div>
            </div>
          )
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
    setOpenId(prev => {
      const newId = prev === id ? null : id;
      if (newId) {
        setTimeout(() => {
          lessonRefs.current[newId]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
      return newId;
    });
  };

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '24px' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700 }}>Lesson Plans</h2>
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
                <div style={{ marginTop: '16px' }}><SkeletonSlide /></div>
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
  const shwData = SHW_DATA[habitIdx] || null;
  const dgiData = DGI_DATA[habitIdx] || null;

  const [shwcModulePages, setShwcModulePages] = useState({});
  const [viewingModule, setViewingModule] = useState(null);
  const [scrollToPage, setScrollToPage] = useState(null);
  const pageRefs = useRef({});

  const [dgiPages, setDgiPages] = useState({});
  const [viewingGuideline, setViewingGuideline] = useState(null);

  const [otherBookPages, setOtherBookPages] = useState(null);

  useEffect(() => {
    if (habitIdx === 16) loadDartBook().then(p => { if (p) setOtherBookPages(p); });
    if (habitIdx === 30) loadGardenBook().then(p => { if (p) setOtherBookPages(p); });
  }, [habitIdx]);

  useEffect(() => {
    if (!shwData) return;
    shwData.modules.forEach(mod => {
      loadShwcModule(mod.moduleNum).then(pages => {
        if (pages) setShwcModulePages(prev => ({ ...prev, [mod.moduleNum]: pages }));
      });
    });
  }, [habitIdx]);

  const habitNum = habit?.n || 1;
  const allSections = [
    { key: 'shw', label: 'SHW Curriculum', icon: '\uD83C\uDFEB' },
    { key: 'dgi', label: 'Dietary Guidelines', icon: '\uD83D\uDCD7' },
    { key: 'fssai', label: 'Eat Right Activity Book', icon: '\uD83D\uDCD9' },
    { key: 'yellow', label: 'FSSAI Yellow Books', icon: '\uD83D\uDCD2' },
    { key: 'other', label: 'Other Resources', icon: '\uD83D\uDCC2' },
    { key: 'posters', label: 'Additional Posters', icon: '\uD83D\uDDBC' },
    { key: 'videos', label: 'Additional Videos', icon: '\uD83C\uDFA5' },
  ];
  const sectionVisibility = {
    shw: [7,22,23,24,25,26,27,28].includes(habitNum),
    dgi: [2,4,9,10,12,14,17,18,20,21,35].includes(habitNum),
    yellow: [1,2,4,5,6,8,9,10,12,17,18,20,21,32,35].includes(habitNum),
    other: [17,31].includes(habitNum),
  };
  const sections = allSections.filter(s => sectionVisibility[s.key] === undefined || sectionVisibility[s.key]);

  const defaultSection = openSection && sections.some(s => s.key === openSection) ? openSection : sections[0]?.key || 'shw';
  const [activeSection, setActiveSection] = useState(defaultSection);

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '6px' }}>
        Additional Resources
      </h2>
      <p style={{ fontSize: '.82rem', color: '#666', lineHeight: 1.6, marginBottom: '18px', maxWidth: '760px' }}>
        The EWLW programme content is aligned with the School Health and Wellness Programme curriculum and the Dietary Guidelines for Indians.
      </p>

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
        {activeSection === 'shw' && shwData ? (
          <div className="shw-content">
            {viewingModule !== null ? (
              <div className="shwc-module-viewer">
                <button className="shwc-back-btn" onClick={() => { setViewingModule(null); setScrollToPage(null); }}>
                  &#x2190; Back to SHW Curriculum
                </button>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, margin: '12px 0' }}>
                  Module {viewingModule} — {shwData.modules.find(m => m.moduleNum === viewingModule)?.title}
                </h3>
                <div className="shwc-pages">
                  {shwcModulePages[viewingModule] ? shwcModulePages[viewingModule].map((src, i) => (
                    <img key={i} ref={el => { pageRefs.current[i] = el; }} src={src} alt={`Module ${viewingModule} — Page ${i + 1}`} style={{ width: '100%', borderRadius: '10px', marginBottom: '12px' }}
                      onLoad={() => { if (scrollToPage === i) { pageRefs.current[i]?.scrollIntoView({ behavior: 'smooth', block: 'start' }); setScrollToPage(null); } }}
                    />
                  )) : (
                    <SkeletonPoster />
                  )}
                </div>
              </div>
            ) : (
              <>
                {shwData.modules.map((mod, mi) => (
                  <div key={mi} className="shw-module">
                    <div className="shw-module-header">
                      <span className="shw-module-badge">Module {mod.moduleNum}</span>
                      <h3 className="shw-module-title">{mod.title}</h3>
                    </div>
                    <p className="shw-module-desc">{mod.description}</p>
                    <div className="shw-activities">
                      <div className="shw-activities-label">Activities included:</div>
                      <ol className="shw-activities-list">
                        {mod.activities.map((act, ai) => {
                          const colonIdx = act.indexOf(':');
                          const hasPageLink = mod.activityPages && mod.activityPages[ai] !== undefined;
                          const onClickActivity = hasPageLink ? () => {
                            setScrollToPage(mod.activityPages[ai]);
                            setViewingModule(mod.moduleNum);
                            if (!shwcModulePages[mod.moduleNum]) {
                              loadShwcModule(mod.moduleNum).then(pages => {
                                if (pages) setShwcModulePages(prev => ({ ...prev, [mod.moduleNum]: pages }));
                              });
                            }
                          } : undefined;
                          if (colonIdx > 0) {
                            return <li key={ai}><span className={`shw-act-title${hasPageLink ? ' shw-act-link' : ''}`} onClick={onClickActivity}>{act.slice(0, colonIdx)}:</span> {act.slice(colonIdx + 1).trim()}</li>;
                          }
                          return <li key={ai}>{act}</li>;
                        })}
                      </ol>
                    </div>
                    <div className="shw-module-actions">
                      <button className="shw-fullmodule-btn" onClick={() => setViewingModule(mod.moduleNum)}>
                        &#x1F4D6; View Full Module
                      </button>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        ) : activeSection === 'shw' ? (
          <div className="section-content-card" style={{ maxWidth: '760px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 900, marginBottom: '12px' }}>School Health and Wellness Curriculum (SHWC)</h3>
            <p style={{ fontSize: '.85rem', color: '#444', lineHeight: 1.75 }}>
              The SHWC consists of <strong>11 modules with 5–6 activities in each module</strong>. Relevant modules and activities mapped to this habit will be available here soon.
            </p>
          </div>
        ) : null}

        {activeSection === 'dgi' && dgiData ? (
          <div className="shw-content">
            {viewingGuideline !== null ? (
              <div className="shwc-module-viewer">
                <button className="shwc-back-btn" onClick={() => setViewingGuideline(null)}>
                  &#x2190; Back to Guidelines
                </button>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, margin: '12px 0' }}>
                  Guideline {viewingGuideline} — {dgiData.guidelines.find(g => g.guidelineNum === viewingGuideline)?.title}
                </h3>
                <div className="shwc-pages">
                  {dgiPages[viewingGuideline] ? dgiPages[viewingGuideline].map((src, i) => (
                    <img key={i} src={src} alt={`Guideline ${viewingGuideline} — Page ${i + 1}`} style={{ width: '100%', borderRadius: '10px', marginBottom: '12px' }} />
                  )) : (
                    <SkeletonPoster />
                  )}
                </div>
                <a href="/DGI_2024.pdf" download className="shw-download-btn" style={{ display: 'inline-block', marginTop: '16px' }}>
                  &#x2B07; Download Full Dietary Guidelines
                </a>
              </div>
            ) : (
              <>
                {dgiData.guidelines.map((gl, gi) => (
                  <div key={gi} className="shw-module">
                    <div className="shw-module-header">
                      <span className="shw-module-badge" style={{ background: '#2E7D32' }}>Guideline {gl.guidelineNum}</span>
                      <h3 className="shw-module-title">{gl.title}</h3>
                    </div>
                    <p className="shw-module-desc">{gl.description}</p>
                    <div className="shw-activities">
                      <div className="shw-activities-label">Key points:</div>
                      <ul className="shw-activities-list">
                        {gl.details.map((d, di) => (
                          <li key={di}>{d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="shw-module-actions">
                      <button className="shw-fullmodule-btn" style={{ background: '#2E7D32' }} onClick={() => {
                        setViewingGuideline(gl.guidelineNum);
                        if (!dgiPages[gl.guidelineNum]) {
                          loadDgiGuideline(gl.guidelineNum).then(pages => {
                            if (pages) setDgiPages(prev => ({ ...prev, [gl.guidelineNum]: pages }));
                          });
                        }
                      }}>
                        &#x1F4D6; View Full Guideline
                      </button>
                      <a href="/DGI_2024.pdf" download className="shw-download-btn">
                        &#x2B07; Download Full Dietary Guidelines
                      </a>
                    </div>
                  </div>
                ))}
              </>
            )}
          </div>
        ) : activeSection === 'dgi' ? (
          <div className="section-content-card" style={{ maxWidth: '760px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 900, marginBottom: '12px' }}>Dietary Guidelines for Indians (DGI-2024)</h3>
            <p style={{ fontSize: '.85rem', color: '#444', lineHeight: 1.75, marginBottom: '14px' }}>
              The EWLW programme content is aligned with the <strong>Dietary Guidelines for Indians (DGI-2024)</strong>, which include <strong>17 national dietary guidelines</strong> providing evidence-based recommendations for healthy eating patterns suited to the Indian context.
            </p>
            <div className="shw-module-actions">
              <a href="/DGI_2024.pdf" target="_blank" rel="noopener noreferrer" className="shw-fullmodule-btn" style={{ background: '#2E7D32' }}>
                &#x1F4D6; View Full Guidelines
              </a>
              <a href="/DGI_2024.pdf" download className="shw-download-btn">
                &#x2B07; Download Full Dietary Guidelines
              </a>
            </div>
          </div>
        ) : null}

        {activeSection === 'fssai' && (
          <div className="section-content-card" style={{ maxWidth: '760px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 900, marginBottom: '12px' }}>Eat Right India Activity Book</h3>
            <p style={{ fontSize: '.85rem', color: '#444', lineHeight: 1.75 }}>
              The <strong>Food Safety and Standards Authority of India (FSSAI) Eat Right India Activity Book</strong> provides activities organised under <strong>7 themes for primary, middle, and senior classes</strong>. These activities are mapped to relevant habits and skills and are available on the portal.
            </p>
          </div>
        )}

        {activeSection === 'yellow' && (
          <div className="section-content-card" style={{ maxWidth: '760px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 900, marginBottom: '12px' }}>FSSAI Yellow Books for Schools</h3>
            <p style={{ fontSize: '.85rem', color: '#444', lineHeight: 1.75 }}>
              The <strong>FSSAI Yellow Books</strong> are resource books designed for <strong>primary, middle, and senior classes</strong>. They provide age-appropriate content on food safety, nutrition, and healthy eating habits to support classroom learning.
            </p>
          </div>
        )}

        {activeSection === 'other' && (
          <div className="shw-content">
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, margin: '0 0 12px' }}>
              {habitNum === 17 ? 'Detect Adulteration through Rapid Testing (DART) Book' : 'School Nutrition Garden Guidelines'}
            </h3>
            <div className="shwc-pages">
              {otherBookPages ? otherBookPages.map((src, i) => (
                <img key={i} src={src} alt={`Page ${i + 1}`} style={{ width: '100%', borderRadius: '10px', marginBottom: '12px' }} />
              )) : (
                <SkeletonPoster />
              )}
            </div>
          </div>
        )}

        {activeSection === 'posters' && (
          <div className="section-content-card" style={{ maxWidth: '760px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 900, marginBottom: '12px' }}>Additional Posters</h3>
            <p style={{ fontSize: '.85rem', color: '#444', lineHeight: 1.75 }}>
              Additional posters related to this habit will be available here soon.
            </p>
          </div>
        )}

        {activeSection === 'videos' && (() => {
          const addVids = ADDITIONAL_VIDEOS[habitIdx] || [];
          return addVids.length > 0 ? (
            <div className="videos-grid">
              {addVids.map((v, i) => (
                <div key={i} className="video-card">
                  <div className="video-embed">
                    <iframe
                      src={v.embedUrl}
                      title={v.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                  <div className="video-card-body">
                    <h4 className="video-card-title">{v.title}</h4>
                    <p className="video-card-desc">{v.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="section-content-card" style={{ maxWidth: '760px' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 900, marginBottom: '12px' }}>Additional Videos</h3>
              <p style={{ fontSize: '.85rem', color: '#444', lineHeight: 1.75 }}>
                Additional videos related to this habit will be available here soon.
              </p>
            </div>
          );
        })()}
      </div>
    </div>
  );
}

function ReflectionReinforcement({ habit, openSection }) {
  const habitIdx = (habit?.n || 1) - 1;
  const reinfImage = useLazy(loadReinfPoster, habitIdx);
  const quizData = HABIT_QUIZZES[habitIdx] || null;

  const sections = [
    { key: 'reinf', label: 'Reinforcement Poster', icon: '\uD83D\uDDBC' },
  ];
  if (quizData) {
    sections.push({ key: 'quiz', label: 'Habit Quiz', icon: '\uD83C\uDFAF' });
  }

  const [activeSection, setActiveSection] = useState(openSection || 'reinf');

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Reflection & Reinforcement
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
              <SkeletonPoster />
            )}
          </div>
        )}

        {activeSection === 'quiz' && (
          quizData ? (
            <QuizPanel quiz={quizData} />
          ) : (
            <div className="section-content-card" style={{ maxWidth: '760px' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 900, marginBottom: '12px' }}>Habit Quiz</h3>
              <p style={{ fontSize: '.85rem', color: '#444', lineHeight: 1.75 }}>
                The quiz for this habit will be available soon.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
}

function TeacherFeedback({ openSection }) {
  const [activeSection, setActiveSection] = useState(openSection || 'feedback');

  const sections = [
    { key: 'feedback', label: 'Share Feedback', icon: '\uD83D\uDCDD' },
    { key: 'upload', label: 'Upload Content', icon: '\uD83D\uDCF7' },
  ];

  return (
    <div>
      <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px' }}>
        Feedback from Teachers
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

        {activeSection === 'upload' && (
          <div className="tu-section">
            <div className="tu-card">
              <div className="tu-icon">&#x1F4E4;</div>
              <h3 className="tu-title">Contribute to the Learning Repository</h3>
              <p className="tu-desc">
                Teachers are encouraged to upload an image, poster, short video, or reel related to the habit or skill.
                Such contributions can be added to the portal's repository, helping to continuously enrich and update the learning resources over time.
              </p>
              <div className="tu-types">
                <div className="tu-type"><span className="tu-type-icon">&#x1F5BC;</span><span>Images</span></div>
                <div className="tu-type"><span className="tu-type-icon">&#x1F4CB;</span><span>Posters</span></div>
                <div className="tu-type"><span className="tu-type-icon">&#x1F3AC;</span><span>Videos</span></div>
                <div className="tu-type"><span className="tu-type-icon">&#x1F4F1;</span><span>Reels</span></div>
              </div>
              <label className="tu-upload-area">
                <input type="file" accept="image/*,video/*,.pdf" style={{ display: 'none' }} />
                <div className="tu-upload-inner">
                  <span className="tu-upload-icon">&#x2B06;</span>
                  <span className="tu-upload-text">Click to select a file or drag & drop here</span>
                  <span className="tu-upload-hint">Supported: Images, Videos, PDF (Max 50 MB)</span>
                </div>
              </label>
              <textarea className="fb-input" rows="2" placeholder="Add a brief description of your contribution..."
                style={{ resize: 'vertical', paddingTop: '8px', marginTop: '16px' }}></textarea>
              <button className="fb-submit" style={{ background: '#7C3AED' }}>Upload Contribution &#8594;</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const PANEL_NAMES = {
  1: 'Teaching & Learning Resources', 2: 'Lesson Plans', 3: 'Additional Resources',
  4: 'Reflection & Reinforcement', 5: 'Feedback from Teachers'
};

export default function PanelContent({ panelNum, domain, habit, onBack, openLessonNum, openSection }) {
  return (
    <div>
      <div className="sc-header">
        <button className="sc-back" onClick={onBack}>&#8592; Back</button>
        <div className="sc-breadcrumb">
          <span className="sc-crumb-domain">{domain?.label || ''}</span>
          <span className="sc-crumb-sep">/</span>
          <span className="sc-crumb-habit">{habit?.name || ''}</span>
          <span className="sc-crumb-sep">/</span>
          <span className="sc-crumb-panel">{PANEL_NAMES[panelNum] || ''}</span>
        </div>
      </div>
      <div className="sc-body">
        {panelNum === 1 && <TeachingLearningResources habit={habit} openSection={openSection} />}
        {panelNum === 2 && <LessonsPanel habit={habit} openLessonNum={openLessonNum} />}
        {panelNum === 3 && <AdditionalResources habit={habit} openSection={openSection} />}
        {panelNum === 4 && <ReflectionReinforcement habit={habit} openSection={openSection} />}
        {panelNum === 5 && <TeacherFeedback habit={habit} openSection={openSection} />}
      </div>
    </div>
  );
}
