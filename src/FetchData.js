import React , { useState,useEffect } from "react";
import { Badge} from 'antd';
import axios from 'axios';

export const FetchData=()=>{

    const [total, setTotal] = useState(120);

    useEffect(() => {
        // GET request using axios inside useEffect React hook
        axios.get('https://api.npms.io/v2/search?q=react')
            .then(response => setTotal(response.data.total));
    
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
      


    return (
        
        <div>

            <Badge count={total} />

        </div>
        
      )


}