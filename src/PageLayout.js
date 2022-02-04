import React from "react";

import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from "./SignInButtonPopup";
import { SignOutButton } from "./SignOutButtonPopup";
import {  Divider} from 'antd';

/**
 * Renders the navbar component with a sign-in button if a user is not authenticated
 */
export const PageLayout = (props) => {
    
    const isAuthenticated = useIsAuthenticated();

    return (
        <>
            <h5>
                <center>
                    Welcome to the Microsoft Authentication Library For React Tutorial
                </center>
                <Divider/>
            </h5>
            <div bg="primary" variant="dark">
                <a className="navbar-brand" href="/">MSAL React Tutorial</a>
                <br/>
                { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
            </div>
            
            <br />
            <br />
            {props.children}
        </>
    );
};
