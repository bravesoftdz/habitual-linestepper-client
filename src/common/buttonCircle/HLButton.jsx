import React from "react";

import "./ButtonCircle.css";

export const HLButton = ({ children, width, onClick }) => {
  return (
    <button
      // stle={{ width: `${width || "20px"}`, height: `${width || "20px"}` }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
