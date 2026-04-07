import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { HABIT_ICONS } from '../data/domains.js';
import INTRO_THUMBS from '../data/introThumbs.js';

import { ALL_LESSON_TITLES } from '../data/lessons.js';
import HABIT_QUIZZES from '../data/habitQuizzes.js';
import KNOW_MORE_DATA from '../data/knowMoreData.js';
import SHW_DATA from '../data/shwData.js';
import { loadPoster } from '../data/lazyData.js';

function PanelInfoThumb({ bg, icon, summary, detail }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="pcard-info-thumb" style={{ background: bg }} onMouseLeave={() => setExpanded(false)}>
      <div className="pcard-info-icon">{icon}</div>
      <p className="pcard-info-summary">{summary}</p>
      {detail && !expanded && (
        <button className="pcard-info-toggle" onClick={(e) => { e.stopPropagation(); setExpanded(true); }}>
          &#x24D8; Read more
        </button>
      )}
      {detail && expanded && (
        <>
          <div className="pcard-info-detail">{detail}</div>
          <button className="pcard-info-toggle" onClick={(e) => { e.stopPropagation(); setExpanded(false); }}>
            &#x2191; Less
          </button>
        </>
      )}
    </div>
  );
}

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

  const decorIcons = ['🍎', '🥦', '🏃', '💪', '🌿', '🥗'];

  // Build gradient from cluster color
  const cc = cluster.color || '#E87820';
  const clusterBg = `linear-gradient(145deg, ${cc}, ${cc}AA)`;

  return (
    <div>
      <div className="sp-hero" style={{ background: clusterBg }}>
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
            <div className="sp-why-box" onMouseLeave={() => setWhyExpanded(false)}>
              <span className="sp-why-label">Why This Habit Matters</span>
              <span>{habit.why}</span>
              {whyExpanded && habit.tips && (
                <ul className="sp-why-tips">
                  {habit.tips.slice(0, 3).map((t, i) => <li key={i}>{t}</li>)}
                </ul>
              )}
              <button className="sp-readmore" onClick={() => setWhyExpanded(e => !e)}>
                {whyExpanded ? '\u2191 Less' : 'Read More \u2192'}
              </button>
            </div>
            <div className="sp-why-actions">
            </div>
          </div>
        </div>
      </div>

      {showPoster && (
        <PosterLightbox habitIdx={habitIdx} onClose={() => setShowPoster(false)} />
      )}

      <div className="panels-outer">
        <div className="panels-grid">

          {/* Panel 1 — Teaching & Learning Resources */}
          <div className="pcard" style={{ '--pcard-bg': '#E3EFFC', '--pcard-fg': '#1A5FA8' }}>
            <PanelInfoThumb
              bg="linear-gradient(135deg,#2563EB,#60A5FA)"
              icon="&#x1F4D6;"
              summary="Resources to help teachers understand the habit and prepare for classroom sessions."
              detail={<p>They provide clear explanations, engaging materials, and structured support to help teachers confidently deliver the lessons and reinforce the habit overall.</p>}
            />
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#3A7FD5' }}></span>Teaching & Learning Resources</div>
              <div className="pcard-btns">
                <button className="pcard-btn" onClick={() => onOpenPanel(1, 'note')}>&#x1F4D6; Habit Note</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(1, 'ppt')}>&#x1F4CA; Presentation</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(1, 'video')}>&#x1F3A5; Video</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(1, 'poster')}>&#x1F5BC; Additional Posters & Images</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(1, 'ws')}>&#x1F4C4; Worksheets</button>
              </div>
            </div>
          </div>

          {/* Panel 2 — Lesson Plans */}
          <div className="pcard" style={{ '--pcard-bg': '#FEF9E7', '--pcard-fg': '#7D6608' }}>
            <PanelInfoThumb
              bg="linear-gradient(135deg,#B8860B,#F0C850)"
              icon="&#x1F4DD;"
              summary="Six conversation-based lessons (6–8 minutes each), ideally one per day."
              detail={<ul><li>Teachers may cover more than one lesson in a day.</li><li>Not all lessons need to be taken up for lower classes.</li><li>As far as possible, all lessons for a habit should be conducted on consecutive days.</li></ul>}
            />
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#D4A017' }}></span>Lesson Plans</div>
              <div className="pcard-btns">
                {lessonTitles.map((lt, li) => (
                  <button key={li} className="pcard-btn pcard-btn--lesson" onClick={() => onOpenLesson(li + 1)}>
                    <span className="pcard-btn-num" style={{ background: '#D4A017' }}>{li + 1}</span><span className="pcard-btn-text">{lt}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Panel 3 — Reflection & Reinforcement */}
          <div className="pcard" style={{ '--pcard-bg': '#DBF5EC', '--pcard-fg': '#17896A' }}>
            <PanelInfoThumb
              bg="linear-gradient(135deg,#059669,#34D399)"
              icon="&#x1F5BC;"
              summary="After completing all lessons, one session can be used for reflection and reinforcement."
              detail={<p>Key messages and important goals are revisited to strengthen understanding. A habit reinforcement poster may be used to support this process. A simple Habit Quiz is also provided to engage students and reinforce the key ideas and practices covered in the lessons.</p>}
            />
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#22A882' }}></span>Reflection & Reinforcement</div>
              <div className="pcard-btns">
                <button className="pcard-btn" onClick={() => onOpenPanel(4, 'reinf')}>&#x1F5BC; Reinforcement Poster</button>
                {HABIT_QUIZZES[habitIdx] && (
                  <button className="pcard-btn" onClick={() => onOpenPanel(4, 'quiz')}>&#x1F3AF; Habit Quiz</button>
                )}
              </div>
            </div>
          </div>

          {/* Panel 4 — Additional Resources */}
          <div className="pcard" style={{ '--pcard-bg': '#FFF0E0', '--pcard-fg': '#B85C10' }}>
            <PanelInfoThumb
              bg="linear-gradient(135deg,#C2410C,#FB923C)"
              icon="&#x1F4DA;"
              summary="Aligned with the School Health and Wellness Programme curriculum and Dietary Guidelines for Indians."
              detail={<p>The FSSAI Eat Right India Activity Book provides activities mapped to relevant habits and skills, available on the portal.</p>}
            />
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#E07830' }}></span>Additional Resources</div>
              <div className="pcard-btns">
                {SHW_DATA[habitIdx] && (
                  <button className="pcard-btn" onClick={() => onOpenPanel(3, 'shw')}>&#x1F3EB; SHW Curriculum</button>
                )}
                <button className="pcard-btn" onClick={() => onOpenPanel(3, 'dgi')}>&#x1F4D7; Dietary Guidelines for Indians</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(3, 'fssai')}>&#x1F4D9; FSSAI Eat Right Activity Book</button>
              </div>
            </div>
          </div>

          {/* Panel 5 — Feedback from Teachers */}
          <div className="pcard" style={{ '--pcard-bg': '#F3E8FF', '--pcard-fg': '#6B21A8' }}>
            <PanelInfoThumb
              bg="linear-gradient(135deg,#7C3AED,#A78BFA)"
              icon="&#x1F4AC;"
              summary="Upload images, posters, videos, or reels to enrich the learning repository."
              detail={<p>Teachers are encouraged to share classroom content related to the habit or skill. Such contributions help continuously enrich and update the learning resources over time.</p>}
            />
            <div className="pcard-body">
              <div className="pcard-title"><span className="pcard-dot" style={{ background: '#7C3AED' }}></span>Feedback from Teachers</div>
              <div className="pcard-btns">
                <button className="pcard-btn" onClick={() => onOpenPanel(5, 'feedback')}>&#x1F4DD; Share Feedback</button>
                <button className="pcard-btn" onClick={() => onOpenPanel(5, 'upload')}>&#x1F4F7; Upload Content</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
