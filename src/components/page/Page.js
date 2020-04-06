import React, { useState } from 'react';
import fakedata from '../../fakedata/userdata.json';
import './Page.css'
import Feed from '../feed/Feed';
import Count from '../count/Count';

const Page = () => {

    const [users,setUsers] = useState(fakedata);
    const [count,setCount] = useState([]);


    const handleAdd = (feed)=> {
        console.log("hello mama chole ashlam",feed);
        const newMaal = [...count,feed];
        setCount(newMaal);
    }

    return (
        <div className="pageContainer">
            <div className="feedContainer">
                {
                     users.map(f => <Feed 
                        buttonAdd = {handleAdd}
                        feed = {f}>

                        </Feed>)
                }
            </div>


            <div className="countContainer">
              <Count c={count}></Count>

            </div>
        </div>
    );
};

export default Page;