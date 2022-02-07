import React , { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { storageRequest } from "./AuthConfig";
import { Card ,Button} from 'antd';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';


const { TabPane } = Tabs;


export const AzureStorageContent = () => {


  const { instance, accounts, inProgress } = useMsal();
  const [accessToken, setAccessToken] = useState(null);

  const name = accounts[0] && accounts[0].name;

  function RequestAccessToken() {
    const request = {
        ...storageRequest,
        account: accounts[0]
    };

    // Silently acquires an access token which is then attached to a request for Microsoft Graph data
    instance.acquireTokenPopup(request).then((response) => {
      setAccessToken(response.accessToken);
    });
  }
  
   return(
      <>

      <Card title="Project Management" bordered={false} style={{ width: 800 }}>
      

      <h5 className="card-title">Welcome {name}</h5>
       
        {accessToken}
        <Button type="primary" onClick={RequestAccessToken}>Request Access Token</Button>


        <Tabs defaultActiveKey="1">
        <TabPane tab={
        <span>
          <AppleOutlined />
          Project Management
        </span>
      } key="1">
          Tab 1
        </TabPane>
        <TabPane tab="Finance Data" disabled key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Other Department" key="3">
          Tab 3
        </TabPane>
      </Tabs>

      </Card>


      </>

    )

}