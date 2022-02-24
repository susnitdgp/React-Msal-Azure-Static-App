import React, { useState } from 'react';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react';

import { PageLayout } from './PageLayout';
import { SignInButton } from './SignInButtonRedirect';
import { ProfileContent } from './ProfileContent';
import { Divider } from 'antd';

function HomePage() {
  return (
    <PageLayout>
      <AuthenticatedTemplate>
        <p>You are signed in!</p>
        <ProfileContent />
      </AuthenticatedTemplate>
      <Divider />
      <UnauthenticatedTemplate>
        <p>You are not signed in! Please sign in.</p>
        <SignInButton />
      </UnauthenticatedTemplate>
    </PageLayout>
  );
}

export default HomePage;
