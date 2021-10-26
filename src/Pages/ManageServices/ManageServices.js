import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handelDelete = (id) => {
        const url = `http://localhost:5000/services/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('Are want to delete')
                    const remaining = services.filter(service => service._id !== id)
                    setServices(remaining)
                }

            })
    }
    return (
        <div>
            <h1>THis is menage service</h1>
            {services.map(service => <div key={service._id}>
                <h4>{service.name}</h4>
                <button onClick={() => handelDelete(service._id)}>Delete</button>
            </div>)}
        </div>
    );
};

export default ManageServices;