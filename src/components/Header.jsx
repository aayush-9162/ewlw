import { useState } from 'react';
import FAQ_DATA from '../data/faqData.js';

export default function Header({ showFaqBtn }) {
  const [showFaq, setShowFaq] = useState(false);
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (i) => setOpenIdx(prev => prev === i ? null : i);

  return (
    <>
      <header className="site-header">
        <img src="/ewlw_logo.png" alt="EWLW" className="header-logo" />
        <div className="header-center-block">
          <div className="logo-main">Eat Well. <span>Live Well.</span></div>
          <div className="logo-sub">Personal Well-Being &nbsp;|&nbsp; Social Well-Being &nbsp;|&nbsp; Planetary Well-Being</div>
        </div>
        <img src="/fff_logo.png" alt="Food Future Foundation" className="header-logo-fff" />
      </header>
      {showFaqBtn && (
        <div className="faq-bar">
          <button className="faq-btn" onClick={() => setShowFaq(true)}>
            &#x2753; FAQs
          </button>
        </div>
      )}

      {showFaq && (
        <div className="faq-overlay" onClick={() => setShowFaq(false)}>
          <div className="faq-modal" onClick={e => e.stopPropagation()}>
            <button className="faq-close-btn" onClick={() => setShowFaq(false)}>&#x2715;</button>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: '20px' }}>
              Frequently Asked Questions
            </h2>
            <div className="faq-accordion">
              {FAQ_DATA.map((item, i) => (
                <div key={i} className={`faq-item${openIdx === i ? ' faq-item--open' : ''}`}>
                  <button className="faq-question" onClick={() => toggleFaq(i)}>
                    <span className="faq-q-num">{i + 1}</span>
                    <span className="faq-q-text">{item.q}</span>
                    <span className="faq-q-arrow">{openIdx === i ? '\u25B2' : '\u25BC'}</span>
                  </button>
                  {openIdx === i && (
                    <div className="faq-answer">
                      {item.a.split('\n').map((line, j) => (
                        <p key={j} style={{ margin: line === '' ? '8px 0' : '4px 0' }}>{line}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
