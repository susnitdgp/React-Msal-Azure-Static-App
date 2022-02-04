import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionType } from "@azure/msal-browser";

import { loginRequest } from "./AuthConfig";


export const TodoList = () => {
    const authRequest = {
        ...loginRequest
    };

    return (
        
            <p>TODO LIST</p>
        
      )
};