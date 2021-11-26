import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../../Hooks/useAuth';

const AddMoreFood = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const confirm = window.confirm('Are you inserted right img URL & other data?');
        if (confirm) {
            fetch('https://polar-brushlands-97321.herokuapp.com/services', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(event => {
                    if (event.insertedId) {
                        alert("You Food Added to our Services");
                        reset();
                    }
                })
        }
    }
    return (
        <div className='placeOrder container'>
            <div className='text-center py-5'>
                <h1 className='pColor'>Add More Food as Service</h1>
                <p className='text-muted'>As a user you can add you favorite food item and place order.</p>
            </div>
            <div className='form w-'>
                <form className='w-50 m-auto' onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' placeholder='Your Name' defaultValue={user.displayName} {...register("user-name")} required />
                    <input type='text' placeholder='Email' defaultValue={user.email} {...register("email")} required />
                    <input type='text' placeholder='Food Name' {...register("name")} required />
                    <input placeholder='Valid Img URL' {...register("picture")} required />
                    <textarea type='text' placeholder='Food Description' {...register("details")} required />
                    <input type='number' placeholder='Hopeful Price' {...register("price")} required />
                    <div className='pb-5'><button type='submit'>Add Service</button></div>
                </form>
            </div>
        </div>
    );
};

export default AddMoreFood;