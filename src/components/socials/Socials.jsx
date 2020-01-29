import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { color, footerRightButtonConstants } from "./lib/buttonConsts";

import "./Socials.css";

export const Socials = () => {
  return (
    <div className="footer">
      {footerRightButtonConstants.map(({ icon, onClick, size }, i) => (
        <button key={`${i.toString()}`} onClick={() => onClick()}>
          <FontAwesomeIcon icon={icon} size={size} color={color} />
        </button>
      ))}
    </div>
  );
};
