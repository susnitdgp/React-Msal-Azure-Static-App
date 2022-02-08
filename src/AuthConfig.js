import { LogLevel } from "@azure/msal-browser";


export const msalConfig = {
  auth: {
    clientId: "d923d979-d308-4de8-b939-4ce0435521c6",
    authority: "https://login.microsoftonline.com/azuregoswami.com/", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://react-7cuyla.stackblitz.io/", // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: "https://react-7cuyla.stackblitz.io/", // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
            if (containsPii) {
                return;
            }
            switch (level) {
                case LogLevel.Error:
                    console.error(message);
                    return;
                case LogLevel.Info:
                    console.info(message);
                    return;
                case LogLevel.Verbose:
                    console.debug(message);
                    return;
                case LogLevel.Warning:
                    console.warn(message);
                    return;
            }
        }
    }
}
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
 scopes: ["openid"]
};

export const appRoles = {
  Pradip_BPM_FileRead: "Pradip.BPM.FileRead",
  Pradip_Portal_Read: "Pradip.Portal.Read"
}

export const storageRequest = {
  scopes: ["User.Read","https://storage.azure.com/user_impersonation"]
 };

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

export const azureFunctionConfig = {
  azureFunctionEndpoint: "https://graph.microsoft.com/v1.0/me"
};