import "./App.css";
import MainTimer from "./Components/MainTimer";
// import BreakTimer from "../../../pomodoro-app/src/Components/BreakTimer";
// import LongBreakTimer from "../../../pomodoro-app/src/Components/LongBreakTimer";
import React, { useState } from "react";
import Settings from "./pages/Settings";
import SettingsContext from "./Components/SettingsContext";

function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(25);
  const [breakMinutes, setBreakMinutes] = useState(5);
  const [setTimers, timers] = useState({
    mainLength: 25,
    breakLength: 5,
    LongBreakLength: 15,
  });
  return (
    <div className="App">
      <h2> Best Pomodoro Timer</h2>
      <main>
        <SettingsContext.Provider
          value={{
            showSettings,
            setShowSettings,
            workMinutes,
            breakMinutes,
            setWorkMinutes,
            setBreakMinutes,
          }}
        >
          {showSettings ? <Settings /> : <MainTimer />}
          {/* <BreakTimer />
          <LongBreakTimer /> */}
        </SettingsContext.Provider>
      </main>
    </div>
  );
}

export default App;
