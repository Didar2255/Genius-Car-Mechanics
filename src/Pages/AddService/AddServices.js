import axios from 'axios';
import React from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import './AddServices.css'

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Successfully insert')
                    reset();
                }
            })
    };
    return (
        <div className='add-service'>
            <Container className='my-4'>
                <h2>Added new Services Here</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='Enter service name' />
                    <textarea {...register("description",)} placeholder='Enter Description' />
                    <input {...register("serviceImg",)} placeholder='Enter Service Url' />
                    <input type="number" {...register("price")} placeholder='Enter Service Price' />
                    <input type="submit" />
                </form>
            </Container>
        </div>
    );
};

export default AddServices;