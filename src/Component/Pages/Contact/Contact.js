import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact pb-5">
            <div className='container'>
                <div className='text-center'>
                    <div className="title pt-5"><h1>How Can We Help?</h1></div>
                    <div>
                        <p className='text-muted w-50 m-auto py-3'>If you’ve got a question, a comment or just want to talk more about your fitness goals
                            leave us a message and we’ll be sure to get in touch.</p>
                    </div>
                </div>
                <div className='m-auto form'>
                    <fieldset>
                        <div>
                            <label>Name</label>
                            <input type="text" required />
                        </div>
                        <div>
                            <label>Email</label>
                            <input type="email" required />
                        </div>
                        <div>
                            <label>Website(if any)</label>
                            <input type="text" required />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div>
                            <label>Message</label>
                            <textarea type="text" required />
                        </div>
                        <form className="d-flex">
                            <button className="submit"><i className="fa fa-paper-plane me-1"></i>Submit</button>
                        </form>
                    </fieldset>
                </div>
            </div>
        </div>
    );
};

export default Contact;