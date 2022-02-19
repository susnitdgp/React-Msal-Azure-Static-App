import React , { useState,useEffect } from "react";
import { Badge, message} from 'antd';
import axios from 'axios';
import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';

const key = 'updatable';

export const FetchData=()=>{

    loadProgressBar();

    const [total, setTotal] = useState(120);

    useEffect(() => {
        message.loading({ content: 'Loading...', key });
        // GET request using axios inside useEffect React hook
        axios.get('https://api.npms.io/v2/search?q=react')
            .then(response => {
                console.log(response.data);
                setTotal(response.data.total);
                message.success({ content: 'Loaded!', key, duration: 2 });
            })
            .catch(err => {
                console.log("error: ", err.message);
              });
    
        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);
      


    return (
        
        <div>

            <Badge count={total} />

        </div>
        
      )


}