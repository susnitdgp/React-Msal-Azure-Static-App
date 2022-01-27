import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./AuthConfig";
import { Button } from 'antd';

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will open a popup for login
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button type="primary" onClick={() => handleLogin(instance)}>
            Sign In Using  Popup
        </Button>
    );
}