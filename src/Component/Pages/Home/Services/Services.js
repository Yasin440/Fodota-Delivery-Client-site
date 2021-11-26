import useAuth from '../../../../Hooks/useAuth';
import Card from './Card/Card';
import './Services.css';

const Services = () => {
    const { services } = useAuth();

    return (
        <div className='services-area mt-5 pb-5'>
            <div className='text-center py-5'>
                <p className='text-white fw-bold pt-5'>On time Best Food Delivery</p>
                <h1 className='pColor'>Get Food At Home</h1>
            </div>
            <div className='row g-5 container-fluid m-auto pb-5'>
                {
                    services.map(service => <Card
                        key={service._id}
                        service={service}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Services;