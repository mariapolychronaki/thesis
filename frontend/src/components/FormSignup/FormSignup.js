import React from 'react';
import '../../assets/Style/Form.css';
import { users, usersCoaches,usersPlayers } from '../../Constants/Constants';
import { useState, useEffect, useRef } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';



<script src="https://www.google.com/recaptcha/api.js"></script>



const FormSignup = ({ submitForm }) => {

    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [values, setValues] = useState({
        user: 'coach',
        email: '',
        password: '',
        password2: '',
        name: '',
        surname: ''
    });

    function onChange(value) {
        console.log('Captcha value:', value);
    }


    const validate = (values) => {

        let errors = {}
        var flag= false;
        users.map((user)=>{
            if(values.email===user.email){
                flag =true;
            }
        })
       


       
        if (!values.email) {
            errors.email = "Email required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Email address is invalid"
        }else if(flag===true){
            errors.email="Email already has an account"
        }

        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 6) {
            errors.password = 'Password must be more than 6 characters'
        }

        if (!values.password2) {
            errors.password2 = "Password verification is required"
        } else if (values.password2 !== values.password) {
            errors.password2 = "Passwords don't match!"

        }

        if (!values.name) {
            errors.name = "Name is required"
        }

        if (!values.surname) {
            errors.surname = "Surname is required"
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


    const recaptchaRef = useRef(null)


    return (
        <div className='form-content-right container' >
            <form className='form' onSubmit={hadleSubmit}>
                <div className='title1'>Welcome to Football App</div>
                <div className='form-inputs'>
                    <label htmlFor='username'
                        className='form-label'>
                        *User
                    </label>
                    <select
                        id='user'
                        type='text'
                        name='user'
                        className='form-input'
                        placeholder='Enter your name'
                        value={values.user}
                        onChange={hadleChange}>
                        <option value="coach">Coach</option>
                        <option value="player">Player</option>


                    </select>

                    {errors.user && <p>{errors.user}</p>}
                </div>
               
                <div className='form-inputs'>
                    <label htmlFor='email' className='form-label'>
                        *E-mail
                    </label>
                    <input
                        id='email'
                        type='email'
                        name='email'
                        className='form-input'
                        placeholder='Enter your email'
                        value={values.email}
                        onChange={hadleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
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
                <div className='form-inputs'>
                    <label htmlFor='username'
                        className='form-label'>
                        *Password Verification
                    </label>
                    <input type='password'
                        name='password2'
                        className='form-input'
                        placeholder='Verify your password'
                        value={values.password2}
                        onChange={hadleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='username'
                        className='form-label'>
                        *Name
                    </label>
                    <input type='text'
                        name='name'
                        className='form-input'
                        placeholder='Enter your name'
                        value={values.name}
                        onChange={hadleChange}
                    />
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div className='form-inputs'>
                    <label htmlFor='surname'
                        className='form-label'>
                        *Surname
                    </label>
                    <input type='text'
                        name='surname'
                        className='form-input'
                        placeholder='Enter your surname'
                        value={values.surname}
                        onChange={hadleChange}
                    />
                    {errors.surname && <p>{errors.surname}</p>}
                </div>
                <button className='form-input-btn' type='submit'>Submit</button>
                <div className='Already'>Already have an account? <a href='/signIn'>Sign in</a></div>


                <ReCAPTCHA

                    ref={recaptchaRef}
                    sitekey={"6Ldr7GoeAAAAAGvm11RyeyquphZY8YHo5alDE2YV"}
                    onChange={onChange}
                />
            </form>



        </div>
    )
}

export default FormSignup
