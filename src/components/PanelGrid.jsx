import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HABIT_ICONS } from '../data/domains.js';
import INTRO_THUMBS from '../data/introThumbs.js';
import REINF_THUMBS from '../data/reinfThumbs.js';
import { ALL_LESSON_TITLES } from '../data/lessons.js';
import HABIT_QUIZZES from '../data/habitQuizzes.js';
import KNOW_MORE_DATA from '../data/knowMoreData.js';
import SHW_DATA from '../data/shwData.js';
import { loadPoster } from '../data/lazyData.js';

function PosterLightbox({ habitIdx, onClose }) {
  const [fullImg, setFullImg] = useState(null);
  useEffect(() => {
    loadPoster(habitIdx).then(setFullImg);
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [habitIdx, onClose]);

  return createPortal(
    <div className="poster-lightbox" onClick={onClose}>
      <div className="poster-lightbox-inner" onClick={e => e.stopPropagation()}>
        <button className="poster-lightbox-close" onClick={onClose}>&#x2715; Close</button>
        {fullImg ? (
          <img src={fullImg} alt="Habit Poster" className="poster-lightbox-img" />
        ) : (
          <div style={{ width: '100%', aspectRatio: '3/4', background: 'rgba(255,255,255,.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontSize: '.9rem' }}>Loading...</div>
        )}
      </div>
    </div>,
    document.body
  );
}

export default function PanelGrid({ domain, cluster, habit, onBack, onOpenPanel, onOpenLesson }) {
  const [showPoster, setShowPoster] = useState(false);
  const [whyExpanded, setWhyExpanded] = useState(false);
  const habitIconSrc = typeof habit.iconIdx !== 'undefined' && HABIT_ICONS[habit.iconIdx]
    ? HABIT_ICONS[habit.iconIdx] : null;

  const habitIdx = (habit.n || 1) - 1;
  const lessonTitles = ALL_LESSON_TITLES[habitIdx] || [];
  const introThumb = INTRO_THUMBS[habitIdx];
  const reinfThumb = REINF_THUMBS[habitIdx];

  const decorIcons = ['🍎', '🥦', '🏃', '💪', '🌿', '🥗'];

  return (
    <div>
      <div className="sp-hero" style={{ background: domain.bg }}>
        <div className="sp-hero-decor">
          {decorIcons.map((icon, i) => <span key={i}>{icon}</span>)}
        </div>
        <button className="sp-back" onClick={onBack}>&#8592; Back to Habits</button>
        <div className="sp-crumb">
          <span>{domain.label}</span>
          <span className="sp-crumb-sep">/</span>
          <span className="sp-crumb-cur">{habit.name}</span>
        </div>
        <div className="sp-habit-header">
          <div className="sp-habit-icon">
            {habitIconSrc ? (
              <img src={habitIconSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            ) : (
              <div className="emoji-icon">{habit.emoji || '\u2605'}</div>
            )}
          </div>
          <div>
            <div className="sp-habit-num">
              HABIT {habit.n < 10 ? '0' : ''}{habit.n} &middot; {cluster.word}
            </div>
            <div className="sp-habit-name">{habit.name}</div>
          </div>
        </div>

        <div className="sp-why-row">
          {introThumb && (
            <div className="sp-poster-thumb" onClick={() => setShowPoster(true)}>
              <img src={introThumb} alt="Habit Poster" />
              <div className="sp-poster-thumb-overlay">
                <span>&#x1F50D;</span>
              </div>
            </div>
          )}
          <div className="sp-why-col">
            <div className="sp-why-box">
              <span className="sp-why-label">Why This Habit Matters</span>
              <span>{habit.why}</span>
              {whyExpanded && habit.tips && (
                <ul className="sp-why-tips">
                  {habit.tips.slice(0, 3).map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              )}
            </div>
            <div className="sp-why-actions">
              <button className="sp-readmore" onClick={() => setWhyExpanded(e => !e)}>
                {whyExpanded ? '\u2191 Less' : 'Read More \u2192'}
              </button>
              <button className="sp-knowmore-btn" onClick={() => onOpenPanel(1, 'knowmore')}>
                &#x1F4DA; Know More
              </button>
            </div>
          </div>
        </div>
      </div>

      {showPoster && (
        <PosterLightbox habitIdx={habitIdx} onClose={() => setShowPoster(false)} />
      )}

      <div className="panels-outer">
        <div className="panels-grid">

          {/* Panel 2 — Lessons */}
          <div className="pcard" style={{ '--pcard-bg': '#E3EFFC', '--pcard-fg': '#1A5FA8' }}>
            <div className="pcard-thumb pcard-thumb--blue">
              {introThumb && <img src={introThumb} alt="" style={{ opacity: 0.6 }} />}
              <div className="pcard-thumb-overlay">
                <span style={{ fontSize: '2rem' }}>&#x1F4D6;</span>
                <span style={{ fontWeight: 700, fontSize: '.85rem', color: '#fff' }}>6 Lessons</span>
              </div>
            </div>
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#3A7FD5' }}></span>Lessons</div>
              <div className="pcard-btns">
                {lessonTitles.map((lt, li) => (
                  <button key={li} className="pcard-btn pcard-btn--lesson" onClick={() => onOpenLesson(li + 1)}>
                    <span className="pcard-btn-num" style={{ background: '#3A7FD5' }}>{li + 1}</span><span className="pcard-btn-text">{lt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 3 — Additional Resources */}
          <div className="pcard" style={{ '--pcard-bg': '#FFF0E0', '--pcard-fg': '#B85C10' }}>
            <div className="pcard-thumb pcard-thumb--orange">
              {introThumb && <img src={introThumb} alt="" style={{ opacity: 0.5 }} />}
              <div className="pcard-thumb-overlay">
                <span style={{ fontSize: '2rem' }}>&#x1F4DA;</span>
                <span style={{ fontWeight: 700, fontSize: '.85rem', color: '#fff' }}>Resources</span>
              </div>
            </div>
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#E07830' }}></span>Additional Resources</div>
              <div className="pcard-btns">
                <button className="pcard-btn" onClick={() => onOpenPanel(3, 'ppt')}>&#x1F4CA; Presentation</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(3, 'ws')}>&#x1F4C4; Worksheets</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(3, 'ic')}>&#x1F3A5; Videos</button>
                {HABIT_QUIZZES[habitIdx] && (
                  <button className="pcard-btn" onClick={() => onOpenPanel(3, 'quiz')}>&#x1F3AF; Quiz</button>
                )}
                {SHW_DATA[habitIdx] && (
                  <button className="pcard-btn" onClick={() => onOpenPanel(3, 'shw')}>&#x1F3EB; SHW Curriculum</button>
                )}
                {habitIdx === 6 && (
                  <button className="pcard-btn" onClick={() => onOpenPanel(3, 'shwc')}>&#x1F4D8; SHWC Module 2</button>
                )}
              </div>
            </div>
          </div>

          {/* Panel 4 — Reinforcement & Feedback */}
          <div className="pcard" style={{ '--pcard-bg': '#DBF5EC', '--pcard-fg': '#17896A' }}>
            <div className="pcard-thumb pcard-thumb--green">
              {reinfThumb && <img src={reinfThumb} alt="" />}
            </div>
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#22A882' }}></span>Reinforcement & Feedback</div>
              <div className="pcard-btns">
                <button className="pcard-btn" onClick={() => onOpenPanel(4, 'reinf')}>&#x1F5BC; Reinforcement Poster</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(4, 'feedback')}>&#x1F4AC; Feedback</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
