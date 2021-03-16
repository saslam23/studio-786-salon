import React from 'react';
import {services} from '../data-1';
import ServiceCard from './cards/ServicesCard';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Services() {
const serviceMenu = (serviceType) =>{
 return( <ServiceCard
  header={serviceType.header}
  services={serviceType.services}
  />
  )
} 


  return (
    <div>
      <div className="services"></div>
      <div className="services-margin services-wrapper">
      <h1 style={{paddingBottom:'4rem'}}>Services</h1>
      <Container>  
      <Row>
      {services.map(serviceMenu)}
      </Row>
      </Container> 
      </div>
    </div>
  )
}


// For the rows, we want to return all the items and they're inside an array. Then we'll use the props method
// to call the array.
