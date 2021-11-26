import ManageOrderCard from './ManageOrderCard/ManageOrderCard';
import useAuth from '../../../Hooks/useAuth';

const ManageOrder = () => {
    const { orderedFoods } = useAuth();

    return (

        <div className='services-area pb-5'>
            <div className='text-center py-5'>
                <p className='text-white fw-bold pt-5'>Food Delivery On The Way..</p>
                <h1 className='pColor'>Manage All Order as Admin</h1>
            </div>
            <div className='row g-5 container-fluid m-auto pb-5'>
                {
                    orderedFoods.map(orderFood => <ManageOrderCard
                        key={orderFood._id}
                        orderFood={orderFood}
                    ></ManageOrderCard>)
                }

            </div>
        </div>
    );
};

export default ManageOrder;