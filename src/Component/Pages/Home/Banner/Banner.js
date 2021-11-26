import React from 'react';

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide container" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://i.ibb.co/cQCLWN4/Food-delivery-app-order-with-phone-Online-mobile-service-for-take-away-burger-and-pizza-Hungry-man-r.jpg" className="d-block w-100" alt="Slider" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/JC6tDBL/Closeup-of-unrecognizable-worker-wearing-protective-gloves-packaging-orders-at-wooden-table-in-food.jpg" className="d-block w-100" alt="Slider2" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/RNMZ24r/Image-of-a-young-food-delivery-man-riding-on-a-bicycle-in-the-downtown-area.jpg" className="d-block w-100" alt="Slider3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://i.ibb.co/crmFzkP/Beautiful-smiling-young-Asian-woman-grocery-shopping-online-with-mobile-app-device-on-smartphone-and.jpg" className="d-block w-100" alt="Slider4" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
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

export default Banner;