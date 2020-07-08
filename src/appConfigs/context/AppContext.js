import React from 'react';

import {
  AuthContext,
  authReducer,
  initialAuthState,
} from './authContext/authContext';
import {
  MainMenuContext,
  initialMainMenuState,
  mainMenuReducer,
} from './mainMenuContext/mainMenuContext';

const AppContext = ({ children }) => {
  const [authState, authDispatch] = React.useReducer(
    authReducer,
    initialAuthState
  );
  const [mainMenuState, mainMenuDispatch] = React.useReducer(
    mainMenuReducer,
    initialMainMenuState
  );

  return (
    <AuthContext.Provider
      value={{
        authState,
        authDispatch,
      }}
    >
      <MainMenuContext.Provider value={{ mainMenuState, mainMenuDispatch }}>
        {children}
      </MainMenuContext.Provider>
    </AuthContext.Provider>
  );
};

export default AppContext;
