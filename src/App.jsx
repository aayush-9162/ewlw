import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import DomainLanding from './components/DomainLanding.jsx';
import HabitTiles from './components/HabitTiles.jsx';
import PanelGrid from './components/PanelGrid.jsx';
import PanelContent from './components/PanelContent.jsx';
import { DOMAINS } from './data/domains.js';

export default function App() {
  const [screen, setScreen] = useState('domains');
  const [currentDomain, setCurrentDomain] = useState(null);
  const [currentCluster, setCurrentCluster] = useState(null);
  const [currentHabit, setCurrentHabit] = useState(null);
  const [currentPanel, setCurrentPanel] = useState(null);
  const [openLessonNum, setOpenLessonNum] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [screen]);

  const openDomain = (key) => {
    setCurrentDomain(DOMAINS[key]);
    setScreen('habits');
  };

  const backToDomains = () => {
    setScreen('domains');
  };

  const openHabit = (ci, hi) => {
    const cluster = currentDomain.clusters[ci];
    const habit = cluster.habits[hi];
    setCurrentCluster(cluster);
    setCurrentHabit(habit);
    setScreen('panels');
  };

  const backToHabits = () => {
    setScreen('habits');
  };

  const [openSection, setOpenSection] = useState(null);

  const openPanel = (n, section) => {
    setCurrentPanel(n);
    setOpenLessonNum(null);
    setOpenSection(section || null);
    setScreen('content');
  };

  const openLesson = (n) => {
    setCurrentPanel(2);
    setOpenLessonNum(n);
    setOpenSection(null);
    setScreen('content');
  };

  const backToPanels = () => {
    setScreen('panels');
  };

  return (
    <>
      <Header showFaqBtn={screen === 'domains'} />
      {screen === 'domains' && (
        <DomainLanding onOpenDomain={openDomain} />
      )}
      {screen === 'habits' && currentDomain && (
        <HabitTiles
          domain={currentDomain}
          onBack={backToDomains}
          onOpenHabit={openHabit}
        />
      )}
      {screen === 'panels' && currentDomain && currentHabit && (
        <PanelGrid
          domain={currentDomain}
          cluster={currentCluster}
          habit={currentHabit}
          onBack={backToHabits}
          onOpenPanel={openPanel}
          onOpenLesson={openLesson}
        />
      )}
      {screen === 'content' && currentPanel && (
        <PanelContent
          panelNum={currentPanel}
          domain={currentDomain}
          habit={currentHabit}
          onBack={backToPanels}
          openLessonNum={openLessonNum}
          openSection={openSection}
        />
      )}
    </>
  );
}
