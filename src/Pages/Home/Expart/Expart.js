import React from 'react';

const Expart = (props) => {
    const { img, name, expartize } = props.expart
    return (
        <div className="col-lg-4 col-sm-6 col-12">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title ">{name}</h5>
                    <p className="card-text text-danger">{expartize}</p>
                </div>
            </div>
        </div>
    );
};

export default Expart;