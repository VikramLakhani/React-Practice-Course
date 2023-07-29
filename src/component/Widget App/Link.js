import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = (event) => {
    if (event.metakey || event.ctrlKey) {
      return;
    }
    event.preventDefault();
    window.history.pushState({}, "", href);
    const nevEvent = new PopStateEvent("popstate");
    window.dispatchEvent(nevEvent);
  };
  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
