import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const { _id, name, details, price, picture } = props.service;
    return (
        <div className='col-md-6 col-sm-12'>
            <div className="card">
                <div className="row p-4">
                    <div className="col-lg-5 col-md-12">
                        <img src={picture} className="img-fluid" alt="img" />
                    </div>
                    <div className="col-lg-7 col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">{name}</h5>
                            <p className="card-text">{details}</p>
                            <p className="card-text">Price: ${price}</p>
                        </div>
                        <Link to={`/details/${_id}`}><button>Preview To Order</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;