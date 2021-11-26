import React from 'react';
import './Carousel.css';

const Carousel = () => {
    return (
        <div className='container'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/nQVMtn6/carousel6-1.jpg" className="d-block w-100" alt="img" />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h1>Get yourself Fit</h1>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/pvnQjYv/carousel4-1.jpg" className="d-block w-100" alt="img" />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h1>Health is Wealth</h1>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/Qr9GWKX/carousel-1.jpg" className="d-block w-100" alt="img" />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h1>Break your weakness</h1>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/ssb8VS3/carousel3-1.jpg" className="d-block w-100" alt="img" />
                        <div className="carousel-caption d-none d-md-block mb-5">
                            <h1>Be confident be you</h1>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;