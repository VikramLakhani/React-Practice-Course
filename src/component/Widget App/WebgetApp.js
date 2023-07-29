import React, { useState } from "react";
import Accordion from "./Accordion";
import SearchBar from "./SearchBar";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";
const items = [
  {
    title: "What is React?",
    content: "React is front-end Javascript library,",
  },
  {
    title: "Why use React?",
    content: "React is a favourite Js library among engineers.",
  },
  {
    title: "how do you use React?",
    content: "You use React by creating components.",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "red",
  },
  {
    label: "The Color Green",
    value: "green",
  },
  {
    label: "The Shade of blue",
    value: "blue",
  },
];

// const showAccordion = () => {
//   if (window.location.pathname === "/") {
//     return <Accordion items={items} />;
//   }
// };
// const showList = () => {
//   if (window.location.pathname === "/list") {
//     return <SearchBar />;
//   }
// };

// const showDropdown = () => {
//   if (window.location.pathname === "/dropdown") {
//     return;
//     // <Dropdown
//     //   options={options}
//     //   selected={selected}
//     //   onSelectedChange={setSelected}
//     // />
//   }
// };

// const showTranslate = () => {
//   if (window.location.pathname === "/translate") {
//     return <Translate />;
//   }
// };

const WebgetApp = () => {
  const [selected, setSelected] = useState(options[0]);
  // const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <SearchBar /> */}
      {/* <button onClick={() => setShowDropdown(!showDropdown)}>
        Toggle Dropdown
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      ) : null} */}
      {/* <Translate /> */}
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <SearchBar />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          Droplable="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default WebgetApp;
