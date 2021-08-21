import React, { useContext } from "react";
import ReactSlider from "react-slider";
import styled from "styled-components";
import SettingsContext from "../Components/SettingsContext";
import BackButton from "../Components/BackButton";

const Settings = () => {
  const settingsInfo = useContext(SettingsContext);
  return (
    <SettingsStyled>
      <label>work: {settingsInfo.workMinutes}:00</label>
      <ReactSlider
        className="work-slider"
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <label>break: {settingsInfo.breakMinutes}:00 </label>
      <ReactSlider
        className="break-slider"
        thumbClassName={"thumb"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div className="back-button">
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </SettingsStyled>
  );
};

const SettingsStyled = styled.div`
  text-align: left;
  .work-slider {
    height: 40px;
    border: 2px solid green;
    border-radius: 20px;
  }
  .break-slider {
    height: 40px;
    border: 2px solid red;
    border-radius: 20px;
  }
  .thumb {
    background-color: blue;
    cursor: pointer;
    width: 40px;
    height: 40px;
    height: 40px;
    border-radius: 20px;
  }
  .back-button {
    text-align: center;
    margin-top: 20px;
  }
`;
export default Settings;
