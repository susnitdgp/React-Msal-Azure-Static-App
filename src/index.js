import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import './style.css';

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./AuthConfig";

import App from "./App";

const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render(
<React.StrictMode>
  <MsalProvider instance={msalInstance}>
      <App />
  </MsalProvider>
</React.StrictMode>,
  document.getElementById("root")
  );
