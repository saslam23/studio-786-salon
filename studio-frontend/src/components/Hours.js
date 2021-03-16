import React from 'react';
import {hours} from '../data-1';
import HoursFormat from './cards/HoursFormat';

const hoursLayout = (item) =>{
    return(
        <HoursFormat
        day={item.day}
        time={item.time}
        />
    )
}

export default function Hours() {
    return (
        <div className="hours-layout">
            <img className="hours-image" src="/assets/hours-image.webp" alt="hours"/>  
        <div className="hours-info">
        <p className="hours-info-heading">Our Doors Are Open</p>
            {hours.map(hoursLayout)}
        </div>
        </div>
    )
}
