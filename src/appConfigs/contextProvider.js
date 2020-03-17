import React from 'react';
import { Auth } from 'aws-amplify';

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
      return {
        ...state,
        isAuthenticated: true,
        userEmail: action.payload.attributes.email,
        token: action.payload.signInUserSession.idToken.jwtToken,
        errorMessage: null
      };
    case 'LOGOUT':
      Auth.signOut();
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
