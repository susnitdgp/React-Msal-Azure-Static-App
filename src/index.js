import React from "react";
import ReactDOM from "react-dom";
import 'antd/dist/antd.css';
import './style.css';

import { PublicClientApplication,EventType } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./AuthConfig";

import App from "./App";

export const msalInstance = new PublicClientApplication(msalConfig);


// Account selection logic is app dependent. Adjust as needed for different use cases.
const accounts = msalInstance.getAllAccounts();

if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload.account) {
    const account = event.payload.account;
    msalInstance.setActiveAccount(account);
  }

  if (event.eventType === EventType.LOGIN_FAILURE) {
    console.log(JSON.stringify(event));
  }
});

ReactDOM.render(
<React.StrictMode>
  <MsalProvider instance={msalInstance}>
      <App />
  </MsalProvider>
</React.StrictMode>,
  document.getElementById("root")
  );
