import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './Feed.css'

const Feed = (props) => {
    const {name,img,email,company,address} = props.feed;
    return (
        <div className="feedBody">
         <div>
             <img src={img} alt=""/>
         </div>
          <div>
            <h3 className="name">{name} </h3>
            <h5>From : {address.city}<br/>Email : {email}</h5>       
            <h6>Earns {company.salary} a year!</h6>
     
            <button 
                className="buttonClass"
                onClick={ () => props.buttonAdd(props.feed)}
                ><FontAwesomeIcon icon={faUserPlus}/> Add Friend </button>
          </div>
          </div>
    );
};

export default Feed;