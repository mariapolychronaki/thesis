import React, { useCallback, useEffect } from 'react'
import { useState } from 'react';
import { Players } from '../Players';
import { Navigate, Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setName } from '../../Store/Slices/coachSlice';
import FormSignIn from '../../components/FormSignIn/FormSignIn';
import { users } from '../../Constants/Constants';

export const SignIn = () => {

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [form, setForm] = useState("");
    const dispatch = useDispatch();
    const [userType, setUserType] = useState({})

    function submitForm(e) {
        setIsSubmitted(true);
        console.log(e);
        setUserType(users.find((user) => (
            user.email === e.email
        )))
        setForm(e)
        console.log(e.email)
        dispatch(setName(e.username));

    }

    // const findPlayer = useCallback(() => {
    //     setUserType()
    // }, [form])


    // useEffect(() => {
    //     findPlayer()
    // }, [findPlayer])

    console.log(userType)


    return (
        <div>
            <div className='form-container'>

                {/* {!isSubmitted ? (<FormSignIn submitForm={submitForm} />) :

                    (userType !== undefined && userType.user_type === "Coach") ? <Navigate to='/players' /> : <Navigate to='/PlayerUser' />} */}


                {!isSubmitted ? (<FormSignIn submitForm={submitForm} />) :

                    (userType !== undefined && userType.user_type === "Coach") ? <Navigate to='/players' /> :
                        ((userType !== undefined && userType.user_type === "Player")) ?
                            <Navigate to='/PlayerUser' /> : <Navigate to='/Admin' />}



            </div>
            )
        </div>
    );
}

