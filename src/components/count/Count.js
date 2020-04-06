import React from 'react';
import './Count.css'

const Count = (props) => {
    const count = props.c;

    //const totalTaka = count.reduce((total,newF) => total + newF.salary,0) 
    let total = 0;
    for(let i=0;i<count.length;i++){
        const lol=count[i];
        total = total+lol.company.salary;
    }

    return (
        <div>
        <h3> Added friends' summary </h3>
        <p>friends added : {count.length} </p>
        <p>total salary : {total}</p>
    </div>
    );
};

export default Count;