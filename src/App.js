import React, { useState, useEffect } from 'react';
import { Auth } from 'aws-amplify';

import { AuthContext } from './appConfigs/contextProvider';
import { Main } from './components/main/Main';

import useCurrentDimensions from './hooks/getWindowDimensions';

function App() {
  const [isAuthenticated, userHasAuthenticated] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(true);
  const { dispatch } = React.useContext(AuthContext);

  let windowDimensions = useCurrentDimensions();

  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      await Auth.currentSession();
      dispatch({ type: 'RESUME_SESSION' });
    } catch (e) {
      if (e !== 'No current user') {
        console.log(e);
      }
    }

    setIsAuthenticating(false);
  };

  return (
    <>
      <Main
        windowHeight={windowDimensions.windowHeight}
        windowWidth={windowDimensions.windowWidth}
        appProps={{ isAuthenticated, userHasAuthenticated, isAuthenticating }}
      />
    </>
  );
}

export default App;
