import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./AuthConfig";
import { Button } from 'antd';

function handleLogin(instance) {
    instance.loginRedirect(loginRequest).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the login prompt
 */
export const SignInButton = () => {
    const { instance } = useMsal();

    return (
        <Button type="primary" onClick={() => handleLogin(instance)}>Sign in using Redirect</Button>
    );
}