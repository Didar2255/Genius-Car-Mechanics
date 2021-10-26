import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { name, price, time, description, serviceImg, _id } = props.service

    const url = `/booking/${_id}`
    return (
        <div className='single-car'>
            <img src={serviceImg} alt="" />
            <h3>Name: {name}</h3>
            <h4>Time :{time}</h4>
            <h5>Price : {price}</h5>
            <p> {description}</p>
            <Link to={url}>
                <button className='btn btn-warning  rounded'>Book {name.toLowerCase()}</button>
            </Link>

        </div>
    );
};

export default Service;