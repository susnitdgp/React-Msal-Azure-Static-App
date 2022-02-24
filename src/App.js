import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  useHistory
} from 'react-router-dom';

import { RouteGuard } from './RouteGuard';
import { appRoles } from './AuthConfig';
import  HomePage  from './HomePage';
import AppHeader from './Header';
import AppFooter from './Footer';

import { TodoList } from './ToDoList';
import { AzureStorageContent } from './AzureStorageContent';
import { Layout, Menu } from 'antd';
import { UserOutlined } from '@ant-design/icons';




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
                <Route exact path="/" roles={[appRoles.PUBLIC]} component={HomePage}>

                  

                </Route>
                <RouteGuard
                  exact
                  path="/finance"
                  roles={[appRoles.VR_Finance_Coordinator]}
                  component={TodoList}>

                </RouteGuard>
                <RouteGuard
                  exact
                  path="/project"
                  roles={[appRoles.VR_Package_Manager]}
                  component={AzureStorageContent}>

                  </RouteGuard>
                <RouteGuard path="*" roles={[appRoles.PUBLIC]} component={NoMatch}>
                 
                </RouteGuard>

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
