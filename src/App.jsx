import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.jsx';
import Homepage from './components/Homepage.jsx';
import HabitTiles from './components/HabitTiles.jsx';
import PanelGrid from './components/PanelGrid.jsx';
import PanelContent from './components/PanelContent.jsx';
import SchoolFoodPage from './components/SchoolFoodPage.jsx';
import ActiveSchoolsPage from './components/ActiveSchoolsPage.jsx';
import TeacherEngagementPage from './components/TeacherEngagementPage.jsx';
import FamilyEngagementPage from './components/FamilyEngagementPage.jsx';
import { DOMAINS } from './data/domains.js';

export default function App() {
  const [screen, setScreen] = useState('home');
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

  const backToHome = () => {
    setScreen('home');
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

  const [practiceScrollTo, setPracticeScrollTo] = useState(null);

  const openPractice = (key, scrollTarget) => {
    setPracticeScrollTo(scrollTarget || null);
    setScreen(key);
  };

  return (
    <>
      {screen === 'home' && (
        <Homepage onOpenDomain={openDomain} onOpenPractice={openPractice} />
      )}
      {['habits', 'panels', 'content'].includes(screen) && (
        <Header showFaqBtn={false} />
      )}
      {screen === 'habits' && currentDomain && (
        <HabitTiles
          domain={currentDomain}
          onBack={backToHome}
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
      {screen === 'school-food' && (
        <SchoolFoodPage onBack={backToHome} onNavigate={openPractice} scrollTo={practiceScrollTo} />
      )}
      {screen === 'active-schools' && (
        <ActiveSchoolsPage onBack={backToHome} onNavigate={openPractice} scrollTo={practiceScrollTo} />
      )}
      {screen === 'teacher-engagement' && (
        <TeacherEngagementPage onBack={backToHome} onNavigate={openPractice} scrollTo={practiceScrollTo} />
      )}
      {screen === 'family-engagement' && (
        <FamilyEngagementPage onBack={backToHome} onNavigate={openPractice} scrollTo={practiceScrollTo} />
      )}
    </>
  );
}
