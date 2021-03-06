import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import Loader from 'react-loader-spinner';

import { AuthContext } from '../../../../../appConfigs/context/authContext/authContext';

import './login.css';

const Login = () => {
  const { authState, authDispatch } = React.useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    return email.length > 0 && password.length > 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const auth = await Auth.signIn(email, password);

      if (auth != null) {
        authDispatch({
          type: 'LOGIN',
          payload: auth,
        });
        setIsLoading(false);
      }
    } catch (e) {
      authDispatch({
        type: 'AUTH_ERROR',
        payload: e,
      });
    }
  };

  return (
    <>
      {!authState.isAuthenticated ? (
        <div className="login-form-wrapper">
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" disabled={!validateForm()}>
              {isLoading ? (
                <Loader
                  type="Hearts"
                  color="#fff"
                  height={14}
                  width={53}
                  timeout={3000}
                />
              ) : (
                <span>GET IN</span>
              )}
            </button>
          </form>
        </div>
      ) : (
        <button
          type=""
          onClick={() =>
            authDispatch({
              type: 'LOGOUT',
            })
          }
        >
          {isLoading ? (
            <Loader
              type="Hearts"
              color="#fff"
              height={16}
              width={70}
              timeout={3000}
            />
          ) : (
            <span>GET OUT</span>
          )}
        </button>
      )}
    </>
  );
};

export default Login;
