import './PlaceOrder.css';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../../Hooks/useAuth';
import { useParams } from 'react-router';

const PlaceOrder = () => {
    const { user, services } = useAuth();
    const { ordered_id } = useParams();
    const { register, handleSubmit, reset } = useForm();

    //get food pack details
    const foodDetails = services.filter(service => service._id === ordered_id);

    //SEND ordered data to DB through BackEnd
    const onSubmit = data => {
        const result = window.confirm('Are you sure to punches order??');
        if (result) {
            data.status = "pending";
            data.foodDetails = foodDetails[0];
            fetch('https://polar-brushlands-97321.herokuapp.com/ordered_food', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            reset();
            alert('Ordered Placed Successfully');
        }
    };

    return (
        <div className='placeOrder container'>
            <div className='text-center py-5'>
                <h1 className='pColor'>Order Now,Get Fast Delivery</h1>
                <p className='text-muted'>Make sure you are providing right info for fast delivery.</p>
            </div>
            <div className='form w-'>
                <form className='w-50 m-auto' onSubmit={handleSubmit(onSubmit)}>

                    <input placeholder='Name' defaultValue={user.displayName} {...register("name")} required />
                    <input placeholder='Email' defaultValue={user.email} {...register("email")} required />
                    <input placeholder='Address' {...register("address")} required />
                    <textarea type='text' placeholder='Special Direction' {...register("special_direction")} />
                    <input type='number' placeholder='Phone Number' {...register("phone_number")} required />
                    <div className='pb-5'><button type='submit'>Place Order</button></div>
                </form>
            </div>
        </div>
    );
};

export default PlaceOrder;