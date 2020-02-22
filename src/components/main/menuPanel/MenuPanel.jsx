import React from 'react'
import './menuPanel.css'

import menuItems from './menuConsts'

export const MenuPanel = ({ menuKey, handleClose }) => {
  return (
    <div className="menu-root" style={{backgroundColor: menuItems[menuKey.index].background }}>
      <div className="menu-flex-column"/>
        <div className="menu-inner-wrapper" >
          <div className="menu-title">
            <button onClick={() => handleClose()}>x</button>
            <h1 style={{ color: menuItems[menuKey.index].color, marginRight: "30px" }}>{menuItems[menuKey.index].title}</h1>
          </div>

          <div className="menu-content">
            {menuItems[menuKey.index].items.map(item => <span key={item}>item</span>)}
          </div>
        </div>
    </div>
  );
};
