import React from 'react';
import useAuth from '../../../../Hooks/useAuth';

const Card = (props) => {
    const { name, details, price, picture } = props.orderFood?.foodDetails;
    const { orderedFoods, setOrderedFoods } = useAuth();

    //delete order by admin
    const handleDelete = () => {
        const confirm = window.confirm("Are You Sure To DELETE This Order..?");
        if (confirm) {
            fetch(`https://polar-brushlands-97321.herokuapp.com/ordered_food/${props.orderFood._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("DELETE Successfully");
                        const remain = orderedFoods.filter(orderedFood => orderedFood._id !== props.orderFood._id);
                        setOrderedFoods(remain);
                    }

                })
        }
    }
    //
    const handleApproved = () => {
        fetch(`https://polar-brushlands-97321.herokuapp.com/ordered_food/${props.orderFood._id}`, {
            method: 'PUT'
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Approved Successfully. Please ReloadPage..");
                }

            })
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
                            <small className="card-text fw-bold text-muted  "><small className="text-success">Order By:</small> {props.orderFood.name || props.orderFood.email}</small>
                            <p className="card-text fw-bold text-muted  "><small className="text-success">Status:</small> {props.orderFood.status}</p>
                            <p className="card-text">{details}</p>
                            <p className="card-text">Price: ${price}</p>
                        </div>
                        <div className="d-flex">
                            <button onClick={handleDelete} className='delete me-3'>Delete</button>
                            <button onClick={handleApproved} className='Approved'>Approved</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;