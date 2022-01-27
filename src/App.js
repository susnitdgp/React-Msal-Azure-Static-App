import React from "react";
import { PageLayout } from "./PageLayout";
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from "@azure/msal-react";
import { ProfileContent } from "./ProfileContent";

import { Layout, Menu, Divider,Button } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


function App() {

  return (
    

  <Layout>
   
    
    <Row>
      <Col span={4}>

      </Col>
     
      <Col span={16}>
      <Menu  selectedKeys='mail' mode="horizontal">
        <Menu.Item key="mail" icon={<MailOutlined />}>
          Navigation One
        </Menu.Item>
        <Menu.Item key="app" disabled icon={<AppstoreOutlined />}>
          Navigation Two
        </Menu.Item>
        <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Navigation Three - Submenu">
          <Menu.ItemGroup title="Item 1">
            <Menu.Item key="setting:1">Option 1</Menu.Item>
            <Menu.Item key="setting:2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Item 2">
            <Menu.Item key="setting:3">Option 3</Menu.Item>
            <Menu.Item key="setting:4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item key="alipay">
          <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
            Navigation Four - Link
          </a>
        </Menu.Item>
      </Menu>

      </Col>

      <Col span={4}>
      
      

      </Col>
    </Row>
     
      
    

    <Content style={{ padding: '0 50px' }}>
     
      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
          >
            <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
              <Menu.Item key="1">option1</Menu.Item>
              <Menu.Item key="2">option2</Menu.Item>
              <Menu.Item key="3">option3</Menu.Item>
              <Menu.Item key="4">option4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </SubMenu>
            <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
              <Menu.Item key="9">option9</Menu.Item>
              <Menu.Item key="10">option10</Menu.Item>
              <Menu.Item key="11">option11</Menu.Item>
              <Menu.Item key="12">option12</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
            
            
        <PageLayout>
          <AuthenticatedTemplate>
              <p>You are signed in!</p>
              <ProfileContent />
          </AuthenticatedTemplate>
          <Divider/>
          <UnauthenticatedTemplate>
              <p>You are not signed in! Please sign in.</p>
          </UnauthenticatedTemplate>
      </PageLayout>
        
        
        </Content>
      </Layout>
    </Content>

    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
      



  );
}

export default App;
