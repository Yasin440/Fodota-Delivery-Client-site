import React from 'react';
import './Category.css';

const Category = () => {
    return (
        <div className='category-area pb-5'>
            <div className='text-center py-5'>
                <p className='fw-bold pt-5 pColor'>TOP FOODS</p>
                <h1>Our Categories</h1>
            </div>
            <div className='row container-fluid'>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/J74x2Jk/category8.png" alt="img" />
                    <h2>Pizza</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/X576zzj/category7.png" alt="img" />
                    <h2>Broast</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/WsfdXxD/category6.png" alt="img" />
                    <h2>Chicken</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/Ht5bhFc/category5.png" alt="img" />
                    <h2>Burger</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/GHfzGvr/category4.png" alt="img" />
                    <h2>Snakes</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/NLfph33/category3.png" alt="img" />
                    <h2>Sandwitchs</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/5s7rgmK/category2.png" alt="img" />
                    <h2>Pasta</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-center py-4">
                    <img src="https://i.ibb.co/6tgny1h/category.png" alt="img" />
                    <h2>Desserts</h2>
                    <p className='fw-bold text-muted'>Check For Order</p>
                </div>
            </div>
        </div>
    );
};

export default Category;