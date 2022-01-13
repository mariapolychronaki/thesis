import React from 'react'
import { useState } from 'react';
import FormSignup from '../../components/FormSignup/FormSignup';
import { Players } from '../Players';

export const SignUp = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return (
        <div>
            <div className='form-container'>
                <span className='close-btn' >x</span>

                {!isSubmitted ? (<FormSignup submitForm={submitForm} />) : <Players />}
            </div>
            )
        </div>
    );
}

