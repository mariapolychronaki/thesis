import React from 'react'
import { useState } from 'react';
import { Players } from '../Players';
import { Navigate, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setName } from '../../Store/Slices/coachSlice';
import FormSignIn from '../../components/FormSignIn/FormSignIn';

export const SignIn = () => {

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
            <div className='form-container'>

                {!isSubmitted ? (<FormSignIn submitForm={submitForm} />) :

                    (form !== undefined) ? <Navigate to='/Lineup' /> : <Navigate to='/Admin' />}

            </div>
            )
        </div>
    );
}

