import { DOMAINS } from '../data/domains.js';

const DOMAIN_CONFIG = {
  personal: {
    icon: '\u{1F958}',
    label: 'Domain 1',
    title: 'Personal Well-Being',
    desc: '21 Habits across ROUTINE, HEALTHY and MINDFUL \u2014 building lifelong health from within.',
    pill: '21 Habits \u00B7 3 Clusters',
    bg: 'linear-gradient(145deg,#C4622D,#E8906A)'
  },
  social: {
    icon: '\u{1F91D}',
    label: 'Domain 2',
    title: 'Social Well-Being',
    desc: '7 Life Skills for Responsible Behaviour (RESPECT) \u2014 citizenship, equality, and safety.',
    pill: '7 Life Skills \u00B7 RESPECT',
    bg: 'linear-gradient(145deg,#A0317A,#D060A0)'
  },
  planetary: {
    icon: '\u{1F30D}',
    label: 'Domain 3',
    title: 'Planetary Well-Being',
    desc: '7 Sustainability Skills aligned with LiFE (SUSTAIN) \u2014 protecting the planet we share.',
    pill: '7 Skills \u00B7 SUSTAIN',
    bg: 'linear-gradient(145deg,#1A6B60,#2D9A88)'
  }
};

export default function DomainLanding({ onOpenDomain }) {
  return (
    <div>
      <div style={{ padding: '40px 48px 16px' }}>
        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: '2.4rem',
          fontWeight: 900,
          color: '#1C1A17',
          lineHeight: 1.1,
          marginBottom: '8px'
        }}>
          Eat Well. <span style={{ color: '#27AE60' }}>Live Well.</span>
        </h1>
      </div>
      <div className="domain-row">
        {Object.entries(DOMAIN_CONFIG).map(([key, cfg]) => (
          <button
            key={key}
            className="domain-btn"
            style={{ background: cfg.bg }}
            onClick={() => onOpenDomain(key)}
          >
            <span className="db-icon">{cfg.icon}</span>
            <div className="db-label">{cfg.label}</div>
            <div className="db-title">{cfg.title}</div>
            <div className="db-desc">{cfg.desc}</div>
            <span className="db-pill">{cfg.pill}</span>
            <span className="db-arrow">&#8594;</span>
          </button>
        ))}
      </div>
    </div>
  );
}
