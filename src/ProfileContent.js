import React , { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./AuthConfig";
import { Button } from 'antd';



/**
 * Renders a button which, when selected, will open a popup for logout
 */
export const ProfileContent = () => {

  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestAccessToken() {
    const request = {
        ...loginRequest,
        account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenSilent(request).then((response) => {
        setAccessToken(response.accessToken);
    }).catch((e) => {
        instance.acquireTokenPopup(request).then((response) => {
            setAccessToken(response.accessToken);
        });
    });
}
    
  return (
    <>
        <h5 className="card-title">Welcome {name}</h5>
        {accessToken ? 
            <p>Access Token Acquired! {accessToken}</p>
            
            :
            <Button variant="secondary" onClick={RequestAccessToken}>Request Access Token</Button>

            
        }
    </>
  );


}