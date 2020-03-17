import React from "react";
import ReactDOM from "react-dom";
import Amplify from 'aws-amplify';

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faHome,
  faCode,
  faPenSquare
} from "@fortawesome/free-solid-svg-icons";
import {
  fab,
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";

import AppRoutes from "./routes/index";
import awsConfig from './appConfigs/awsConfig';
import * as serviceWorker from "./serviceWorker";

import "./index.css";

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
    region: awsConfig.cognito.REGION,
    userPoolId: awsConfig.cognito.USER_POOL_ID,
    identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID,
    userPoolWebClientId: awsConfig.cognito.APP_CLIENT_ID
  },
  Storage: {
    region: awsConfig.s3.REGION,
    bucket: awsConfig.s3.BUCKET,
    identityPoolId: awsConfig.cognito.IDENTITY_POOL_ID
  },
  API: {
    endpoints: [
      {
        name: "blogs",
        endpoint: awsConfig.apiGateway.URL,
        region: awsConfig.apiGateway.REGION
      },
    ]
  }
});

ReactDOM.render(
  <div className="container">
      <AppRoutes />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
