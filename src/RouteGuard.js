import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { Empty } from 'antd';

export const RouteGuard = ({ Component, ...props }) => {

    const { instance } = useMsal();
    const [isAuthorized, setIsAuthorized] = useState(false);

    const onLoad = async () => {
        const currentAccount = instance.getActiveAccount();

        if (currentAccount && currentAccount.idTokenClaims['roles']) {
            let intersection = props.roles
                .filter(role => currentAccount.idTokenClaims['roles'].includes(role));

            if (intersection.length > 0) {
                setIsAuthorized(true);
            }
        }
    }

    useEffect(() => {
        onLoad();
    }, [instance]);

    return (
        <>
            {
                isAuthorized
                    ?
                    <Route {...props} render={routeProps => <Component {...routeProps} />} />
                    :
                    <Empty description={false} />
                    
            }
        </>
    );
};