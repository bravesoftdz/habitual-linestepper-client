import React from 'react';
import { useHistory } from 'react-router-dom';

import menuItems from './menuConsts';
import './menuPanel.css';

export const MenuPanel = ({ menuKey, handleClose }) => {
  const history = useHistory();

  return (
    <div
      className="menu-root"
      style={{
        backgroundColor:
          menuKey != null ? menuItems[menuKey.index].background : '',
      }}
    >
      <div className="menu-flex-column" />
      <div className="menu-inner-wrapper">
        <div className="menu-title">
          <button onClick={() => handleClose()}>x</button>
          <h1
            style={{
              color: menuKey != null ? menuItems[menuKey.index].color : '',
              marginRight: '30px',
            }}
          >
            {menuKey && menuItems[menuKey.index].title}
          </h1>
        </div>

        <div className="menu-content">
          {menuKey &&
            menuItems[menuKey.index].items.map((item) => (
              <button onClick={() => history.push(`/projects/${item.route}`)}>
                <span className="menu-item-text" key={item.name}>
                  {item.name}
                </span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};
