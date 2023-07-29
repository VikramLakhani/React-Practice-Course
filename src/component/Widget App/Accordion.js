import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setactiveaindex] = useState(null);
  const onTitleClick = (index) => {
    // console.log("title clicked", index);
    setactiveaindex(index);
  };
  const renderdItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });
  return (
    <div className="ui styled accordion">
      {renderdItems}
      {/* <h1>{activeIndex}</h1> */}
    </div>
  );
};

export default Accordion;
