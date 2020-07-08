import React from 'react';

export const MainMenuContext = React.createContext();

export const initialMainMenuState = { index: 0, isOpen: false };

export const mainMenuReducer = (state, action) => {
  switch (action.type) {
    case 'SET_MENU_OPEN':
      return {
        ...state,
        index: action.index,
        isOpen: true,
      };

    case 'SET_MENU_CLOSED':
      return {
        ...state,
        index: 0,
        isOpen: false,
      };

    default:
      return state;
  }
};
