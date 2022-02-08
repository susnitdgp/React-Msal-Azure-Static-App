import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from 'antd';


function handleLogout(instance) {
    instance.logoutRedirect({ postLogoutRedirectUri: "/" }).catch(e => {
        console.error(e);
    });
}

/**
 * Renders a button which, when selected, will redirect the page to the logout prompt
 */
export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
        <Button type="primary" onClick={() => handleLogout(instance)}>Sign out using Redirect</Button>
    );
}