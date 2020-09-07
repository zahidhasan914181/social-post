import React from 'react';
import Profile from './images/Ellipse.png'
import './CommentsDetails.css'

const CommentsDetails = (props) => {
    let {id,email,body} = props.commentsDetails;
    return (
        <div className = "comment">
            <img src={Profile} alt="Profile"/>
            <h1>ID:{id}</h1>
            <p>E-mail:{email}</p>
            <p>Body:  {body}</p>
        </div>
    );
};

export default CommentsDetails;