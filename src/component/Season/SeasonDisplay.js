import React from "react";
import "./SeasonDisplay.css";
const seasonConfig = {
  Summer: {
    text: "Let's hit the beach",
    iconName: "sun",
  },
  Winter: {
    text: "Burr, its chilly",
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "Summer" : "Winter";
  } else {
    return lat > 0 ? "Winter" : "Summer";
  }
};

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());

  // console.log(seasonConfig[season]);

  const { iconName, text } = seasonConfig[season];
  // const text = season === "Winter" ? "Burr, its chilly" : "Let's hit the beach";
  // const icon = season === "Winter" ? "snowflake" : "sun";
  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`}></i>
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`}></i>
    </div>
  );
};

export default SeasonDisplay;
