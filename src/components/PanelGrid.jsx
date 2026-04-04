import { PANEL_DEFS, PANEL_GRADS, PANEL_BORDER_COLORS, HABIT_ICONS } from '../data/domains.js';
import { ALL_LESSON_TITLES } from '../data/lessons.js';

export default function PanelGrid({ domain, cluster, habit, onBack, onOpenPanel, onOpenLesson }) {
  const habitIconSrc = typeof habit.iconIdx !== 'undefined' && HABIT_ICONS[habit.iconIdx]
    ? HABIT_ICONS[habit.iconIdx]
    : null;

  const habitIdx = (habit.n || 1) - 1;
  const lessonTitles = ALL_LESSON_TITLES[habitIdx] || [];

  return (
    <div>
      <div className="sp-hero" style={{ background: domain.bg }}>
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
        <div className="sp-why-box">
          <span className="sp-why-label">Why This Habit Matters</span>
          <span>{habit.why}</span>
        </div>
      </div>
      <div className="panels-outer">
        <div className="panels-3x3">
          {PANEL_DEFS.map((pd) => {
            const bc = PANEL_BORDER_COLORS[pd.n] || pd.color;
            const thumbSrc = pd.getThumbSrc ? pd.getThumbSrc(habitIdx) : null;
            return (
              <div key={pd.n} className="panel-box" onClick={() => onOpenPanel(pd.n)}>
                <div
                  className={`pb-top${pd.thumbType === 'lessons' ? ' lessons-top' : ''}`}
                  style={{ background: PANEL_GRADS[pd.n] || pd.color }}
                >
                  {pd.thumbType === 'poster' && thumbSrc ? (
                    <img src={thumbSrc} className="pt-cover" alt="" />
                  ) : pd.thumbType === 'lessons' ? (
                    <div className="lesson-list-grid">
                      {lessonTitles.map((lt, li) => (
                        <div
                          key={li}
                          className="lesson-list-item"
                          onClick={(e) => { e.stopPropagation(); onOpenLesson(li + 1); }}
                        >
                          <span className="lesson-list-num">{li + 1}</span>
                          <span className="lesson-list-title">{lt}</span>
                        </div>
                      ))}
                    </div>
                  ) : pd.thumbType === 'poster' && !thumbSrc ? (
                    <div className="pb-panel-icon" style={{ fontSize: '2rem', opacity: 0.7 }}>&#128196;</div>
                  ) : (
                    <div className="pb-panel-icon">{pd.icon}</div>
                  )}
                </div>
                <div className="pb-label" style={{ borderTopColor: bc }}>
                  <div className="pb-label-name">{pd.name}</div>
                  <div className="pb-label-right">
                    <span className="pb-dot active" style={{ background: bc }}></span>
                    <span className="pb-dot" style={{ background: bc }}></span>
                    <span className="pb-dot" style={{ background: bc }}></span>
                    <span className="pb-arrow-circle" style={{ background: bc }}>&#8594;</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
