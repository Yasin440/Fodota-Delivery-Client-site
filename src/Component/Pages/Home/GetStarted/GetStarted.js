import React from 'react';
import './GetStarted.css';

const GetStarted = () => {
    return (
        <div className='getStarted-area pt-5'>
            <div className="row container m-auto py-5 ">
                <div className="col-md-6">
                    <p className='pColor fw-bold'>PIZZA DELIVERY</p>
                    <h1 className='my-3'>Get Started Today!</h1>
                    <h3>Everything you need to build an amazing food restaurant responsive website.</h3>
                    <p className='text-muted mt-4'>Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.</p>
                    <div className="row py-4">
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/LPkT19z/get-Start00.png" alt="img" />
                            <h4>Food Order</h4>
                            <p className='text-muted mt-4'>Food is the necessity of life. It provides nutrition, sustenance growth to human body. Food can be classified.</p>
                        </div>
                        <div className="col-md-6">
                            <img src="https://i.ibb.co/7yWSFgj/get-Start02.png" alt="img" />
                            <h4>Promote Restaurant</h4>
                            <p className='text-muted mt-4'>Food can be classified into cereals, pulses, nuts and oilseeds, vegetable, fruits, milk and milk products and flesh food.</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 text-center sideImg">
                    <img src="https://i.ibb.co/JmHMPLr/section2.jpg" alt="img" />
                </div>
            </div>
        </div>
    );
};

export default GetStarted;