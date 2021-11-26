import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound py-5">
            <div className="row container">
                <img className='col-12 w-25 m-auto' src="https://i.ibb.co/0YSdHPx/404.jpg" alt="img" />
            </div>
            <div className='button'>
                <h2 className='pColor'>--Oops--</h2>
                <p>Nothing to found</p>
                <Link to='/home'>
                    <button><i className="fas fa-arrow-left pe-1"></i>Back To Home</button>
                </Link>
            </div>
        </div>
    );
};

export default NotFound;