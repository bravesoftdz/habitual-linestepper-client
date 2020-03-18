import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';

// import config from './appConfigs/awsConfig';

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

console.log('PROCESS: ', process.env);

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
    region: process.env.REGION,
    userPoolId: process.env.USER_POOL_ID,
    identityPoolId: process.env.IDENTITY_POOL_ID,
    userPoolWebClientId: process.env.APP_CLIENT_ID
  },
  Storage: {
    region: process.env.REGION,
    bucket: process.env.MEDIA_BUCKET,
    identityPoolId: process.env.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: 'blogs',
        endpoint: process.env.API_URL,
        region: process.env.REGION
      }
    ]
  }
});

// Amplify.configure({
//   Auth: {
//     mandatorySignIn: true,
//     region: config.REGION,
//     userPoolId: config.cognito.USER_POOL_ID,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID,
//     userPoolWebClientId: config.cognito.APP_CLIENT_ID
//   },
//   Storage: {
//     region: config.REGION,
//     bucket: config.s3.MEDIA_BUCKET,
//     identityPoolId: config.cognito.IDENTITY_POOL_ID
//   },
//   API: {
//     endpoints: [
//       {
//         name: 'blogs',
//         endpoint: config.apiGateway.API_URL,
//         region: config.REGION
//       }
//     ]
//   }
// });

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
