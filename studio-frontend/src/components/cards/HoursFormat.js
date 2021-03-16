import React from 'react'

export default function HoursFormat(props) {
    return (
        <div className="hours-format">
            <p>{props.day}</p>
            &nbsp;
            <p>{props.time}</p>
        </div>
    )
}
