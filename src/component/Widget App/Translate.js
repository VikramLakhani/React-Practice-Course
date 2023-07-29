import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";

const options = [
  {
    label: "Afrikaan",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "German",
    value: "de",
  },
  {
    label: "Urdu",
    value: "ur",
  },
  {
    label: "Sindhi",
    value: "sd",
  },
  {
    label: "Chinese",
    value: "zh-TW",
  },
  {
    label: "Punjabi",
    value: "pa",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState("");
  return (
    <div>
      <div className="ui form">
        <div className="ui field">
          <label>Enter Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
      </div>

      <Dropdown
        options={options}
        selected={language}
        onSelectedChange={setLanguage}
        TRlabel="Select a Language"
      />
      <hr />
      <h1 className="ui header">Output</h1>
      <Convert text={text} language={language} />
    </div>
  );
};

export default Translate;
