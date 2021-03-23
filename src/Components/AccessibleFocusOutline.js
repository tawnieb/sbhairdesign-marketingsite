import React, { useState, useEffect } from "react";

const AccessibleFocusOutline = ({ children }) => {
  const [enableOutline, setEnableOutline] = useState(false);

  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [enableOutline]);

  const handleKeydown = (e) => {
    const isTabEvent = e.keyCode === 9;
    if (isTabEvent) {
      setEnableOutline(true);
    } else {
      setEnableOutline(false);
    }
  };

  return (
    <span className={enableOutline ? "" : "no-outline-on-focus"}>
      {children}
    </span>
  );
};

export default AccessibleFocusOutline;
