export const msalConfig = {
  auth: {
    clientId: "d923d979-d308-4de8-b939-4ce0435521c6",
    authority: "https://login.microsoftonline.com/112f2dfc-b078-4610-b12a-09ab93a6c933", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://polite-coast-0c9a10c10.1.azurestaticapps.net",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  }
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
 scopes: ["User.Read"]
};


export const storageRequest = {
  scopes: ["https://storage.azure.com/user_impersonation"]
 };

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me"
};

export const azureFunctionConfig = {
  azureFunctionEndpoint: "https://graph.microsoft.com/v1.0/me"
};