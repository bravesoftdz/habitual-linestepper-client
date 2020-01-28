import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { color, footerRightButtonConstants } from "./lib/buttonConsts";

import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      {footerRightButtonConstants.map(({ icon, onClick, size }, i) => (
        <button key={`${i.toString()}`} onClick={() => onClick()}>
          <FontAwesomeIcon icon={icon} size={size} color={color} />
        </button>
      ))}
    </footer>
  );
};
