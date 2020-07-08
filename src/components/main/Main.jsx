import React from 'react';
import { Transition } from 'react-spring/renderprops';

import { Socials } from '../socials/Socials';
import { MenuPanel } from './menuPanel/MenuPanel';
import { AboutPanel } from './aboutPanel/AboutPanel';
import Login from './menuPanel/common/login/Login';

import { AuthContext } from '../../appConfigs/context/authContext/authContext';
import { MainMenuContext } from '../../appConfigs/context/mainMenuContext/mainMenuContext';

import './main.css';

export const Main = ({ windowHeight, windowWidth }) => {
  const { authState } = React.useContext(AuthContext);
  const { mainMenuState, mainMenuDispatch } = React.useContext(MainMenuContext);

  let { isAuthenticated } = authState;

  return (
    <div className="main-root">
      <div className="menu-routes">
        <>
          {mainMenuState.index === 0 && mainMenuState.isOpen ? (
            <button
              onClick={() => mainMenuDispatch({ type: 'SET_MENU_CLOSED' })}
            >
              x
            </button>
          ) : null}
          <button
            onClick={() =>
              mainMenuDispatch({
                type: 'SET_MENU_OPEN',
                index: 0,
              })
            }
          >
            <span>PROJECTS</span>
          </button>
        </>
        <button
          onClick={() =>
            mainMenuDispatch({
              type: 'SET_MENU_OPEN',
              index: 1,
            })
          }
        >
          <span>BLOG</span>
        </button>
        {isAuthenticated ? (
          <button
            onClick={() =>
              mainMenuDispatch({
                type: 'SET_MENU_OPEN',
                index: 2,
              })
            }
          >
            <span>PERSONAL</span>
          </button>
        ) : null}
        <Socials />
        <Login />
      </div>

      <div className="content">
        <Transition
          items={!mainMenuState.isOpen}
          from={{ transform: `translate(${-windowWidth}px, 0)`, opacity: 0 }}
          enter={{ transform: 'translate(0px,0)', opacity: 1 }}
          leave={{ transform: `translate(${-windowWidth}px, 0)`, opacity: 0 }}
          config={{ duration: 400 }}
        >
          {(toggle) =>
            toggle &&
            ((props) => (
              <div style={props}>
                <div className="about-me">
                  <AboutPanel />
                </div>
              </div>
            ))
          }
        </Transition>

        <Transition
          items={mainMenuState.isOpen}
          from={{
            width: '100%',
            transform: `translate(${windowWidth}px, 0)`,
            opacity: 0,
          }}
          enter={{ width: '100%', transform: 'translate(0px,0)', opacity: 1 }}
          leave={{
            width: '100%',
            transform: `translate(${windowWidth}px, 0)`,
            opacity: 0,
          }}
          config={{ duration: 500 }}
        >
          {(toggle) =>
            toggle &&
            ((props) => (
              <div style={props}>
                <MenuPanel
                  menuKey={mainMenuState}
                  handleClose={() =>
                    mainMenuDispatch({ type: 'SET_MENU_CLOSED' })
                  }
                  windowWidth={windowWidth}
                />
              </div>
            ))
          }
        </Transition>
      </div>
    </div>
  );
};
