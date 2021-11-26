import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const SignUp = () => {
    const { user, error, handleGetEmail, signInWithGoogle, handleGetPassword, handleRegistration, toggleLoginAndOut, isLogin } = useAuth();
    //redirect user after login
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || '/home';

    //redirect after sign in or login with google
    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(result => {
                history.push(redirect_url);
            })
    }
    return (
        <div className='container py-5'>
            <div className="row">
                <div className="col-md-6">
                    <img className='w-100 m-auto' src="https://i.ibb.co/jfBrDWJ/login.jpg" alt="img" />
                </div>
                <div className="col-md-6">
                    <div className="title">
                        <img className='my-3 w-50' src="https://i.ibb.co/Bf76rnj/logo.jpg" alt="logo" />
                        <h1 >Please <span className='pColor'>{isLogin ? 'Login' : 'Register'}</span >...</h1>
                    </div>
                    {
                        user.email &&
                        <div className='my-2'>
                            <h4 className='text-success'>Successfully</h4>
                            <div>
                                <Link to='/home'>
                                    <button><i className="fas fa-arrow-left pe-1"></i>Back To Home</button>
                                </Link>
                            </div>
                        </div>
                    }
                    <form onSubmit={handleRegistration} className="row g-3">
                        <span className="text-danger">{error}</span>
                        <div className="col-md-12">
                            <label htmlFor="inputEmail4" className="form-label">Email</label>
                            <input onBlur={handleGetEmail} type="email" className="form-control" id="inputEmail4" required />
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="inputPassword4" className="form-label">Password</label>
                            <input onBlur={handleGetPassword} type="password" className="form-control" id="inputPassword4" required />
                        </div>
                        <div className="col-12 d-flex align-items-center">
                            <div>
                                {isLogin ?
                                    <button className='login me-3' type="submit"><i className="fas fa-sign-in-alt me-1"></i>Login</button>
                                    :
                                    <button className='login me-3' type="submit"><i className="fas fa-user-plus me-1"></i>Register</button>
                                }
                            </div>
                            <div className="form-check">
                                <input onChange={toggleLoginAndOut} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                <label className="form-check-label" htmlFor="exampleCheck1">Have an account?</label>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <div><h5>--------OR--------</h5></div>
                            <button onClick={handleSignInWithGoogle} className='signUp mt-1'><i className="fab fa-google-plus-g me-1"></i>Login with google</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;