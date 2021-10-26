import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import error from '../../Images/page error/404.svg'

const NotFound = () => {
    return (
        <Container className='my-4'>
            <img src={error} className='w-75' alt="" />
            <h2>Sorry ! The Page not Found </h2>
            <p>The link you followed probably broken or the page has been not exist</p>
            <Link to='/home'>
                <button className='bg-danger border rounded text-white'>Go Home</button>
            </Link>
        </Container>
    );
};

export default NotFound;