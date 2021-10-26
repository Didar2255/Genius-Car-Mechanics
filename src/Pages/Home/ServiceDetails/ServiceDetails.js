import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const [service, setService] = useState({})
    const history = useHistory()
    const { serviceId } = useParams()
    const hendelClick = () => {
        history.push('/home')
    }
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    return (
        <div >
            <Container>
                <Card style={{ width: '18rem' }} className='service-card'>
                    <Card.Img variant="top" src={service.serviceImg} />
                    <Card.Body>
                        <Card.Title>{service.name}</Card.Title>
                        <Card.Text>
                            <h6>Price :{service.price}</h6>
                            {service.description}
                        </Card.Text>
                        <button className='btn btn-primary' onClick={hendelClick}>Go to Home</button>
                    </Card.Body>
                </Card>

            </Container>
        </div>
    );
};

export default ServiceDetails;