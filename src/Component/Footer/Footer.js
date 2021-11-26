import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container text-center">
                <img className='w-25' src="https://i.ibb.co/Bf76rnj/logo.jpg" alt="logo" />
                <p className='text-muted'>One is to focus on the quality of your meat. If you can call out organic beef, sustainable farming.</p>
                <p className='mb-0'><span className='fw-bold'>Phone:</span>+92300-400-2333</p>
                <p><span className='fw-bold'>Email:</span>foodota@example.com</p>
                <p className='text-muted py-2'>&copy; Copyright reserved to Foodota</p>
            </div>
        </div>
    );
};

export default Footer;