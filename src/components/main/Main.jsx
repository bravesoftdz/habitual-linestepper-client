import React, { useState } from "react";
import { Socials } from "../socials/Socials";
import { MenuPanel } from "./menuPanel/MenuPanel";

import './main.css'

export const Main = () => {
  const [menu, setMenu] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

const handleMenu = (index) => {
  setMenu(index);
  setMenuOpen(true)
}

  return (
    <div className="main-root">

        <div className="menu-routes">
          <button onClick={() => handleMenu(0)}>
            <p style={{ margin: 0 }}>PROJECTS</p>
          </button>
          <button onClick={() => handleMenu(1)}>
            <p style={{ margin: 0 }}>BLOG</p>
          </button>
          <Socials />
        </div>

      {menuOpen ? (
        <MenuPanel menuKey={menu} handleClose={() => setMenuOpen(false)}/>
      ) : null}
    </div>
  );
};
