import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faEnvelope,
  faHome,
  faCode,
  faPenSquare
} from '@fortawesome/free-solid-svg-icons';
import {
  fab,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import AppRoutes from './routes/index';
import * as serviceWorker from './serviceWorker';

import AppContext from './appConfigs/contextProvider';

import './index.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

library.add(
  fab,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
  faEnvelope,
  faHome,
  faCode,
  faPenSquare
);

Amplify.configure({
  Auth: {
    mandatorySignIn: true,
    region: process.env.REACT_APP_REGION,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_APP_CLIENT_ID
  },
  Storage: {
    region: process.env.REACT_APP_REGION,
    bucket: process.env.REACT_APP_MEDIA_BUCKET,
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: 'blogs',
        endpoint: process.env.REACT_APP_API_URL,
        region: process.env.REACT_APP_REGION
      }
    ]
  }
});

ReactDOM.render(
  <AppContext>
    <div className="container">
      <AppRoutes />
    </div>
  </AppContext>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
