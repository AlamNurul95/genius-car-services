import React, { useRef } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Link, useNavigate } from 'react-router-dom';
import './Registration.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';


const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate = useNavigate();

    const navigateLog = event => {
        navigate('/login');

    }
    if (user) {
        navigate('/home');
    }
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        createUserWithEmailAndPassword(email, pass);

    }





    return (
        <div className='register-container'>
            <h2 className='my-5 text-primary'>Please Register</h2>
            <form onSubmit={handleSubmit} action="">
                <input type="text" name="" id="" placeholder='Your Name' />
                <input type="email" ref={emailRef} name="email" id="" placeholder='Your email' />
                <input type="passworrd" ref={passRef} name="password" id="" placeholder='Your Password' />
                <input onClick={handleSubmit} type="submit" name="Submit" id="" />
            </form>

            <p className='text-primary my-5'>Already Have Account? <Link to='/login' className='text-danger' onClick={navigateLog}>Login</Link></p>
        </div>
    );
};

export default Registration;