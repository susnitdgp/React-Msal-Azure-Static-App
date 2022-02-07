import React from "react";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { InteractionStatus, InteractionType } from "@azure/msal-browser";
import { Empty } from 'antd';

import { loginRequest } from "./AuthConfig";


export const TodoList = () => {
    const authRequest = {
        ...loginRequest
    };

    return (
        
        <Empty description={false} />
        
      )
};