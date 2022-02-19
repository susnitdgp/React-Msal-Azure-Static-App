import React , { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { storageRequest } from "./AuthConfig";
import { Card ,Button} from 'antd';
import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { UserOutlined, SolutionOutlined, LoadingOutlined, SmileOutlined } from '@ant-design/icons';

import { FetchData } from "./FetchData";
import { FetchProject } from "./FetchProject";

const { Step } = Steps;
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

      <Card title="Project Management" bordered={true} style={{ width: "100%" }}>

      <Steps>
        <Step status="finish" title="Login" icon={<UserOutlined />} />
        <Step status="finish" title="Verification" icon={<SolutionOutlined />} />
        <Step status="process" title="Pay" icon={<LoadingOutlined />} />
        <Step status="wait" title="Done" icon={<SmileOutlined />} />
      </Steps>
      

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
          
            <FetchProject/>
          
        </TabPane>
        <TabPane tab="Finance Data" disabled key="2">
          Tab 2
        </TabPane>
        <TabPane tab="Other Department" key="3">
          
        <FetchData/>

        </TabPane>
      </Tabs>

      </Card>


      </>

    )

}