import React, { useState, useEffect } from "react";

function AccessibleFocusOutline({ children }) {
  const [enableOutline, setEnableOutline] = useState(false);
  const handleKeydown = (e) => {
    const isTabEvent = e.keyCode === 9;
    if (isTabEvent) {
      setEnableOutline(true);
    } else {
      setEnableOutline(false);
    }
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [enableOutline]);

  return (
    <span className={enableOutline ? "" : "no-outline-on-focus"}>
      {children}
    </span>
  );
}

export default AccessibleFocusOutline;
