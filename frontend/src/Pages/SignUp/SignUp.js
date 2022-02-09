import React from 'react'
import { useState } from 'react';
import FormSignup from '../../components/FormSignup/FormSignup';
import { Players } from '../Players';
import { Navigate, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setName } from '../../Store/Slices/coachSlice';

export const SignUp = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [form, setForm] = useState("");
    const dispatch = useDispatch();


    function submitForm(e) {
        setIsSubmitted(true);
        console.log(e);
        setForm(e)
        dispatch(setName(e.username));
    }

    return (
        <div>
            <div className='form-container1'>

                {!isSubmitted ? (<FormSignup submitForm={submitForm} />) :

                    (form !== undefined && form.user === "coach") ? <Navigate to='/signUpMessage' /> : <Navigate to='/signUpMessage' />}

            </div>
            )
        </div>
    );
}

