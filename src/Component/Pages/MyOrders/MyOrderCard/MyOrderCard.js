import React from 'react';

const MyOrderCard = (props) => {
    const { name, details, price, picture } = props.food.foodDetails;

    //delete order by user
    const handleDelete = () => {
        const confirm = window.confirm("Are You Sure To DELETE This Order..?");
        if (confirm) {
            fetch(`https://polar-brushlands-97321.herokuapp.com/ordered_food/${props.food._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("DELETE Successfully");

                    }

                })
        }
    }

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
                            <small className="card-text fw-bold text-muted  "><small className="text-success">Order By:</small> {props.food.name || props.food.email}</small>
                            <p className="card-text fw-bold text-muted  "><small className="text-success">Status:</small> {props.food.status}</p>
                            <p className="card-text">{details}</p>
                            <p className="card-text">Price: ${price}</p>
                        </div>
                        <button onClick={handleDelete} className='delete'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrderCard;