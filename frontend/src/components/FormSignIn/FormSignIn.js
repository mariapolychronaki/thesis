import React from 'react'
import '../../assets/Style/FormSignIn.css'
import { useState, useEffect } from 'react';

const FormSignIn = ({ submitForm }) => {

    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [values, setValues] = useState({
        username: '',
        password: '',
    });



    const validate = (values) => {

        let errors = {}


        if (!values.username.trim()) {
            errors.username = "Username required"
        }


        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 6) {
            errors.password = 'Password must be more than 6 characters'
        }



        return errors;
    }



    const hadleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
        console.log(values)
    };
    const hadleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmiting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmiting) {
            submitForm(values);
        }
    }, [errors])




    return (
        <div className='form-content-right' >
            <form className='form' onSubmit={hadleSubmit}>
                <div className='title_Sign_In'>Welcome to Football App</div>
                <div className='form1-inputs '>
                    <label htmlFor='username'
                        className='form-label'>
                        *Username
                    </label>
                    <input
                        id='username'
                        type='text'
                        name='username'
                        className='form-input '
                        placeholder='Enter your name'
                        value={values.username}
                        onChange={hadleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>

                <div className='form1-inputs'>
                    <label htmlFor='password'
                        className='form-label'>
                        *Password
                    </label>
                    <input type='password'
                        name='password'
                        className='form-input'
                        placeholder='Enter your password'
                        value={values.password}
                        onChange={hadleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <button className='form-input-btn' type='submit'>Submit</button>
                <div className='Already'>You don't have an account? <a href='/'>Sign up</a></div>
            </form>

        </div>
    )
}

export default FormSignIn
