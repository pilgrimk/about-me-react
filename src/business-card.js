import React from 'react';

function BusinessCard(props) {
    return (
        <div className='business-card'>
            <div>
                <img className='profile-pic' src={props.src} alt="Me" />
            </div>
            <div>
                <div className='name'> {props.name} </div>
            </div>
            <div>
                <div className='jobTitle'> {props.jobTitle} - {props.company}</div>
                <div className='location'> {props.city}, {props.state}</div>
            </div>
        </div>
    );
}

export default BusinessCard;