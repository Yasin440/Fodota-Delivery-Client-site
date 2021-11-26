import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './Details.css';

const Details = () => {
    const { combo_id } = useParams();
    const [comboPack, setComboPack] = useState({});

    //load data from mongoDB with _id
    useEffect(() => {
        fetch(`https://polar-brushlands-97321.herokuapp.com/services/${combo_id}`)
            .then(res => res.json())
            .then(data => setComboPack(data))
    }, [combo_id])


    return (
        <div className='serviceDetails container m-auto my-5 pb-5'>
            <div className="serviceCard py-2">
                <div className="d-flex align-items-center row">
                    <div className='p-3 col-md-6'>
                        <img src={comboPack?.picture} alt="img" />
                    </div>
                    <div className="card-body col-md-6">
                        <h1 className="card-title pb-4 title">{comboPack?.name}</h1>
                        <h6 className="card-title py-1">Price: ${comboPack?.price}</h6>
                        <p className="card-text text-muted w-75">{comboPack?.details}</p>
                        <Link to={`/details/place-order/${combo_id}`}>
                            <button><i className="fas fa-truck-loading pe-1"></i>Order Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Details;