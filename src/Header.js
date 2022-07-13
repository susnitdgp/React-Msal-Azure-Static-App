import React, { useState } from 'react';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react';

import { SignInButton } from './SignInButtonRedirect';
import { Anchor, Drawer, Button } from 'antd';
import { useIsAuthenticated } from "@azure/msal-react";
import { SignOutButton } from "./SignOutRedirect";
import { funtionRequest } from "./AuthConfig";

const { Link } = Anchor;

function AppHeader() {
  const isAuthenticated = useIsAuthenticated();

  const { instance, accounts, inProgress } = useMsal();
  const currentAccount = instance.getActiveAccount();
  const name = accounts[0] && accounts[0].name;

  const [visible, setVisible] = useState(false);

  function RequestAccessToken() {
    
        const request = {
            ...funtionRequest,
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

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <i className="fas fa-bolt"></i>
          <a href="http://google.com">Vendor Rating</a>
        </div>
        <div className="mobileHidden">
          <Anchor targetOffset="65">
            <Link href="#hero" title="Home" />
            <Link href="#about" title="About" />
            <Link href="#feature" title="Features" />
            <Link href="#works" title="How it works" />
            <Link href="#faq" title="FAQ" />
            <Link href="#pricing" title="Pricing" />
            <Link href="#contact" title="Contact" />
          </Anchor>
          

          {/* Block Comment here 

          <div style={{border: "1px solid grey"}}>
            <UnauthenticatedTemplate>
            <p>You are not signed in! Please sign in.</p>
            <SignInButton />
          </UnauthenticatedTemplate>
          <AuthenticatedTemplate>
            <p>You are signed in!</p>
            <h5 className="card-title">Welcome {name}</h5> 
            
            

            { isAuthenticated ? <SignOutButton /> : <SignInButton /> }
          </AuthenticatedTemplate>
        </div>

        */}

          
          
        

        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <i className="fas fa-bars"></i>
          </Button>
          <Drawer
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor targetOffset="65">
              <Link href="#hero" title="Home" />
              <Link href="#about" title="About" />
              <Link href="#feature" title="Features" />
              <Link href="#works" title="How it works" />
              <Link href="#faq" title="FAQ" />
              <Link href="#pricing" title="Pricing" />
              <Link href="#contact" title="Contact" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default AppHeader;
