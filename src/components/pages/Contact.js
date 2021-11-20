import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Contact() {
        const [formState, setFormState] = useState({name: '', email: '', message: '',});
        const { name, email, message } = formState
        const [errorMessage, setErrorMessage] = useState('');
    
        function handleChange(e) {
    
            setFormState({...formState, [e.target.name]: e.target.value})
        }
    
        function handleSubmit(e) {
            e.preventDefault();
            console.log(formState);
        }
    
    
        
        return (
            <section className="p-5 col-md-1 mx-auto">
                <h1 className="contact-container">Contact</h1>
                <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>

                    <div>
                        <label htmlFor="name">Name:</label>
                        </div>
                    <div>
                        <input className="form-input" type="text" name="name" defaultValue={name} onBlur={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="email">Email Address:</label>
                    </div>
                    <div>
                        <input className="form-input" type="email" name="email" defaultValue={email} onBlur={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                    </div>
                    <div>
                        <textarea className="form-input" name="message" rows="5" defaultValue={message} onBlur={handleChange} />
                        {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                        )}
                    </div>
                    <button type="submit">Submit</button>
                </form>
    
            </section>
        )
    };
    