import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Prompt,
} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { PageLayout } from './PageLayout';
import { RouteGuard } from './RouteGuard';
import { appRoles } from './AuthConfig';
import { SignInButton } from './SignInButtonRedirect';
import AppHeader from './Header';
import AppFooter from './Footer';
import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react';
import { ProfileContent } from './ProfileContent';
import { TodoList } from './ToDoList';
import { AzureStorageContent } from './AzureStorageContent';
import { Layout, Menu, Divider, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Row, Col } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

function App() {
  const history = useHistory();
  const handleMenuClick = () => history.push('/finance');

  return (
    <Router basename="/React-Msal-Azure-Static-App">
      <Layout className="mainLayout">
        <Header style={{ borderBottom: '2px solid #f8f8f8' }}>
          <AppHeader />
        </Header>

        <Content>
          <Layout>
            <Sider width={200} style={{ marginTop: '100px' }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%' }}
              >
                <SubMenu key="sub1" icon={<UserOutlined />} title="Admin Menu">
                  <Menu.Item key="1">
                    <Link to="/">Home</Link>
                  </Menu.Item>
                  <Menu.Item key="2">
                    <Link to="/finance">Finance</Link>
                  </Menu.Item>
                  <Menu.Item key="3">
                    <Link to="/project">Project Management</Link>
                  </Menu.Item>
                  <Menu.Item key="4">
                    <Link to="/Re-cm">RE-CM</Link>
                  </Menu.Item>
                  <Menu.Item key="5">
                    <Link to="/other">Other Menu</Link>
                  </Menu.Item>
                  <Menu.Item disabled={true} key="6" onClick={handleMenuClick}>
                    Button Click
                  </Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content
              style={{ marginTop: '100px', padding: '0 24px', minHeight: 480 }}
            >
              <Switch>
                <Route exact path="/">
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
                </Route>
                <RouteGuard
                  exact
                  path="/finance"
                  roles={[appRoles.Pradip_BPM_FileRead]}
                  component={TodoList}>

                </RouteGuard>
                <RouteGuard
                  exact
                  path="/project"
                  roles={[appRoles.VR_Package_Manager]}
                  component={AzureStorageContent}>

                  </RouteGuard>
                <Route path="*">
                  <NoMatch />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>No Match</h2>
    </div>
  );
}

export default App;
