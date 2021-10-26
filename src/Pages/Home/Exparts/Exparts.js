import React, { useEffect, useState } from 'react';
import Expart from '../Expart/Expart';

const Exparts = () => {

    const [exparts, setExparts] = useState([])
    useEffect(() => {
        fetch('./expart.json')
            .then(res => res.json())
            .then(data => setExparts(data))
    }, [])
    return (
        <div className='container my-4' id='exparts'>
            <h1 className='text-primary'>Our Exparts</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4">
                {
                    exparts.map(expart => <Expart
                        expart={expart}
                        key={expart.id}
                    ></Expart>)
                }
            </div>
        </div>
    );
};

export default Exparts;