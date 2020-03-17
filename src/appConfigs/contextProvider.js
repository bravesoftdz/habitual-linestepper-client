import React from 'react';

export const AuthContext = React.createContext(); // added this

const initialState = {
  isAuthenticated: false,
  userEmail: null,
  token: null,
  errorMessage: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      localStorage.setItem(
        'habitual-linestepper-token',
        JSON.stringify(action.payload.signInUserSession.idToken.jwtToken)
      );
      return {
        ...state,
        isAuthenticated: true,
        userEmail: action.payload.attributes.email,
        token: action.payload.signInUserSession.idToken.jwtToken,
        errorMessage: null
      };
    case 'LOGOUT':
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        userEmail: null,
        errorMessage: null
      };
    case 'RESUME_SESSION':
      return {
        ...state,
        isAuthenticated: true
      };
    case 'AUTH_ERROR':
      return {
        ...state,
        isAuthenticated: false,
        errorMessage: action.payload.message
      };
    default:
      return state;
  }
};

const AppContext = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  console.log('AUTH STATE: ', state);
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AppContext;
