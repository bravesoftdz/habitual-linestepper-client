import React, { useState } from "react";
import { Transition } from 'react-spring/renderprops';

import { Socials } from "../socials/Socials";
import { MenuPanel } from "./menuPanel/MenuPanel";
import { AboutPanel } from "./aboutPanel/AboutPanel";

import './main.css'

export const Main = ({ windowHeight, windowWidth }) => {
  const [menu, setMenu] = useState({
    index: 0,
    isOpen: false,
  });


const handleMenu = (index) => {
  setMenu({index, isOpen: true });
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

      <div className="content">
          <Transition
            items={!menu.isOpen}
            from={{ transform: `translate(${-windowWidth}px, 0)`, opacity: 0 }}
            enter={{ transform:  "translate(0px,0)", opacity: 1 }}
            leave={{ transform: `translate(${-windowWidth}px, 0)`, opacity: 0  }}
            config={{ duration: 400 }}
          >
            {
              toggle => (
                toggle && (
                  props => 
                    <div style={props}>
                      <div className="about-me">
                        <AboutPanel />
                      </div>
                    </div>
                )
              )
            }
          </Transition>

          <Transition
            items={menu.isOpen}
            from={{ width: '100%', transform: `translate(${windowWidth}px, 0)`, opacity: 0 }}
            enter={{ width: '100%', transform:  "translate(0px,0)", opacity: 1 }}
            leave={{ width: '100%', transform: `translate(${windowWidth}px, 0)`, opacity: 0  }}
            config={{ duration: 500 }}
          >
            {
              toggle => toggle && ( props => 
                  <div style={props}>
                    <MenuPanel 
                      menuKey={menu} 
                      handleClose={() => setMenu({ index: 0, isOpen: false })} 
                      windowWidth={windowWidth} 
                    />
                  </div>
                ) 
            }
          </Transition>
      </div>
    </div>
  );
};
