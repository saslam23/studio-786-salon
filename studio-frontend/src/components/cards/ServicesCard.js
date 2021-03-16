import React from 'react';
import Col from 'react-bootstrap/Col';


export default function ServicesCard(props) {
    return (
        <div>
            <Col md={4}>
            <h2 className="service-header">{props.header}</h2>
           <p className="service-names">{props.services.map(item => <li style={{paddingBottom:'10px'}}>{item}</li>)}</p>
           </Col>
        </div>
    )
}
