import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({
  options,
  selected,
  onSelectedChange,
  TRlabel,
  Droplable,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) {
        return;
      }
      // console.log(event.target);
      // console.log("Body Clicked");
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick);

    return () => {
      document.body.removeEventListener("click", onBodyClick);
    };

    // alert("ueseffect");
  }, []);
  const renderOption = options.map((option) => {
    if (option.value === selected.value) {
      return null;
    }
    return (
      <div
        key={option.value}
        onClick={() => onSelectedChange(option)}
        className="item"
      >
        {option.label}
      </div>
    );
  });
  // console.log(open);
  return (
    <div ref={ref} className="ui form">
      <div className="ui field">
        <label htmlFor="" className="label">
          {Droplable}
          {/* {TRlabel} */}
        </label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderOption}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
