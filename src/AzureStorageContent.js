import React , { useState } from "react";
import { useMsal } from "@azure/msal-react";
import { storageRequest } from "./AuthConfig";
import { Card ,Button} from 'antd';


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

      <Card title="Project Management" bordered={false} style={{ width: 300 }}>
      

      <h5 className="card-title">Welcome {name}</h5>
       
        {accessToken}
        <Button type="primary" onClick={RequestAccessToken}>Request Access Token</Button>

      </Card>


      </>

    )

}