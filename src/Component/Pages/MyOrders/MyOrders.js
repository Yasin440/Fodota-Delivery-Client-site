import useAuth from '../../../Hooks/useAuth';
import MyOrderCard from './MyOrderCard/MyOrderCard';

const MyOrders = () => {
    const { user, orderedFoods } = useAuth();
    const email = user.email;
    const foods = orderedFoods.filter(f => (f.email === email));
    return (
        <div className='services-area pb-5'>
            <div className='text-center py-5'>
                <p className='text-white fw-bold pt-5'>You can Know about your order from here</p>
                <h1 className='pColor'>Your Orders..</h1>
            </div>
            <div className='row g-5 container-fluid m-auto pb-5'>
                {
                    foods.map(food => <MyOrderCard
                        key={food._id}
                        food={food}
                    ></MyOrderCard>)
                }
            </div>
        </div>
    );
};

export default MyOrders;