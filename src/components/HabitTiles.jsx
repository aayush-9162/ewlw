import { HABIT_ICONS, HABIT_TILE_COLORS } from '../data/domains.js';

export default function HabitTiles({ domain, onBack, onOpenHabit }) {
  return (
    <div>
      <div className="sh-hero" style={{ background: domain.bg }}>
        <div className="nav-crumb">
          <button className="back-pill" onClick={onBack}>&#8592; All Domains</button>
        </div>
        <div className="sh-title">{domain.label}</div>
        <div className="sh-sub">{domain.sub}</div>
      </div>
      <div className="habits-section">
        {domain.clusters.map((cluster, ci) => (
          <div key={ci}>
            <div className="hs-cluster-header">
              <span className="hs-cluster-num">{cluster.num}</span>
              <h3 className="hs-cluster-name" style={{ color: cluster.color }}>{cluster.word}</h3>
              <div className="hs-divider"></div>
            </div>
            <div className="habit-tiles-grid">
              {cluster.habits.map((h, hi) => {
                const firstChar = h.name.charAt(0);
                const restName = h.name.slice(1);
                const tileBg = HABIT_TILE_COLORS[h.n] || cluster.color;
                return (
                  <div
                    key={hi}
                    className="ht"
                    style={{ background: tileBg }}
                    onClick={() => onOpenHabit(ci, hi)}
                  >
                    <div className="ht-top">
                      <div className="ht-name">
                        <span className="first-char">{firstChar}</span>{restName}
                      </div>
                    </div>
                    <div className="ht-icon-area">
                      {typeof h.iconIdx !== 'undefined' && HABIT_ICONS[h.iconIdx] ? (
                        <img src={HABIT_ICONS[h.iconIdx]} alt="" />
                      ) : (
                        <span className="emoji-icon">{h.emoji || '\u2605'}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
