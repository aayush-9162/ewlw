import { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx';
import HabitTiles from './components/HabitTiles.jsx';
import PanelGrid from './components/PanelGrid.jsx';
import PanelContent from './components/PanelContent.jsx';
import PracticeTiles from './components/PracticeTiles.jsx';
import PracticeContentView from './components/PracticeContentView.jsx';
import AboutPage from './components/AboutPage.jsx';
import { DOMAINS } from './data/domains.js';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [currentDomain, setCurrentDomain] = useState(null);
  const [currentCluster, setCurrentCluster] = useState(null);
  const [currentHabit, setCurrentHabit] = useState(null);
  const [currentPanel, setCurrentPanel] = useState(null);
  const [openLessonNum, setOpenLessonNum] = useState(null);
  const [openSection, setOpenSection] = useState(null);
  const [currentPractice, setCurrentPractice] = useState(null);
  const [currentPracticeTile, setCurrentPracticeTile] = useState(null);

  // Refs to track indices for history reconstruction
  const domainKeyRef = useRef(null);
  const clusterIdxRef = useRef(null);
  const habitIdxRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [screen]);

  // ── Browser history management ──
  useEffect(() => {
    window.history.replaceState({ screen: 'home' }, '');

    const handlePop = (e) => {
      const s = e.state || { screen: 'home' };

      if (s.screen === 'habits' && s.domainKey) {
        domainKeyRef.current = s.domainKey;
        setCurrentDomain(DOMAINS[s.domainKey]);
        setScreen('habits');
      } else if (s.screen === 'panels' && s.domainKey != null) {
        const domain = DOMAINS[s.domainKey];
        domainKeyRef.current = s.domainKey;
        clusterIdxRef.current = s.ci;
        habitIdxRef.current = s.hi;
        setCurrentDomain(domain);
        setCurrentCluster(domain.clusters[s.ci]);
        setCurrentHabit(domain.clusters[s.ci].habits[s.hi]);
        setScreen('panels');
      } else if (s.screen === 'content' && s.domainKey != null) {
        const domain = DOMAINS[s.domainKey];
        domainKeyRef.current = s.domainKey;
        clusterIdxRef.current = s.ci;
        habitIdxRef.current = s.hi;
        setCurrentDomain(domain);
        setCurrentCluster(domain.clusters[s.ci]);
        setCurrentHabit(domain.clusters[s.ci].habits[s.hi]);
        setCurrentPanel(s.panel);
        setOpenLessonNum(s.lesson || null);
        setOpenSection(s.section || null);
        setScreen('content');
      } else if (s.screen === 'practice-tiles' && s.practiceKey) {
        setCurrentPractice(s.practiceKey);
        setScreen('practice-tiles');
      } else if (s.screen === 'practice-content' && s.practiceKey) {
        setCurrentPractice(s.practiceKey);
        setCurrentPracticeTile(s.practiceTile);
        setScreen('practice-content');
      } else if (s.screen === 'about') {
        setScreen('about');
      } else {
        setScreen('home');
      }
    };

    window.addEventListener('popstate', handlePop);
    return () => window.removeEventListener('popstate', handlePop);
  }, []);

  // ── Navigation helpers ──
  const goBack = () => window.history.back();

  const goHome = () => {
    setScreen('home');
    window.history.pushState({ screen: 'home' }, '');
  };

  const openAbout = () => {
    setScreen('about');
    window.history.pushState({ screen: 'about' }, '');
  };

  // ── Domain / Habit flow ──
  const openDomain = (key) => {
    domainKeyRef.current = key;
    setCurrentDomain(DOMAINS[key]);
    setScreen('habits');
    window.history.pushState({ screen: 'habits', domainKey: key }, '');
  };

  const openHabit = (ci, hi) => {
    clusterIdxRef.current = ci;
    habitIdxRef.current = hi;
    const cluster = currentDomain.clusters[ci];
    const habit = cluster.habits[hi];
    setCurrentCluster(cluster);
    setCurrentHabit(habit);
    setScreen('panels');
    window.history.pushState({ screen: 'panels', domainKey: domainKeyRef.current, ci, hi }, '');
  };

  const openPanel = (n, section) => {
    setCurrentPanel(n);
    setOpenLessonNum(null);
    setOpenSection(section || null);
    setScreen('content');
    window.history.pushState({
      screen: 'content', domainKey: domainKeyRef.current,
      ci: clusterIdxRef.current, hi: habitIdxRef.current,
      panel: n, section: section || null,
    }, '');
  };

  const openLesson = (n) => {
    setCurrentPanel(2);
    setOpenLessonNum(n);
    setOpenSection(null);
    setScreen('content');
    window.history.pushState({
      screen: 'content', domainKey: domainKeyRef.current,
      ci: clusterIdxRef.current, hi: habitIdxRef.current,
      panel: 2, lesson: n,
    }, '');
  };

  // ── Practice flow ──
  const openPractice = (key, scrollTarget) => {
    setCurrentPractice(key);
    if (scrollTarget) {
      setCurrentPracticeTile(scrollTarget - 1);
      setScreen('practice-content');
      window.history.pushState({ screen: 'practice-content', practiceKey: key, practiceTile: scrollTarget - 1 }, '');
    } else {
      setScreen('practice-tiles');
      window.history.pushState({ screen: 'practice-tiles', practiceKey: key }, '');
    }
  };

  const openPracticeTile = (tileIndex) => {
    setCurrentPracticeTile(tileIndex);
    setScreen('practice-content');
    window.history.pushState({ screen: 'practice-content', practiceKey: currentPractice, practiceTile: tileIndex }, '');
  };

  return (
    <>
      {screen === 'home' && (
        <Homepage onOpenDomain={openDomain} onOpenPractice={openPractice} onOpenAbout={openAbout} />
      )}
      {['habits', 'panels', 'content'].includes(screen) && (
        <Header showFaqBtn={false} />
      )}
      {screen === 'habits' && currentDomain && (
        <HabitTiles
          domain={currentDomain}
          onBack={goBack}
          onOpenHabit={openHabit}
        />
      )}
      {screen === 'panels' && currentDomain && currentHabit && (
        <PanelGrid
          domain={currentDomain}
          cluster={currentCluster}
          habit={currentHabit}
          onBack={goBack}
          onOpenPanel={openPanel}
          onOpenLesson={openLesson}
        />
      )}
      {screen === 'content' && currentPanel && (
        <PanelContent
          panelNum={currentPanel}
          domain={currentDomain}
          habit={currentHabit}
          onBack={goBack}
          openLessonNum={openLessonNum}
          openSection={openSection}
        />
      )}
      {screen === 'practice-tiles' && currentPractice && (
        <PracticeTiles
          practiceKey={currentPractice}
          onBack={goBack}
          onGoHome={goHome}
          onSelectTile={openPracticeTile}
          onNavigate={openPractice}
        />
      )}
      {screen === 'practice-content' && currentPractice && currentPracticeTile !== null && (
        <PracticeContentView
          practiceKey={currentPractice}
          tileIndex={currentPracticeTile}
          onBack={goBack}
          onBackToHome={goHome}
          onNavigate={openPractice}
        />
      )}
      {screen === 'about' && (
        <AboutPage
          onBack={goBack}
          onGoHome={goHome}
          onOpenDomain={openDomain}
          onOpenPractice={openPractice}
        />
      )}
    </>
  );
}
