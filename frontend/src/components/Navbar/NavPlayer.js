import React from 'react'
import { NavLink } from "react-router-dom"
import '../../assets/Style/Navbar.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import LogOut from '../../assets/logout.png'
import Username from '../../assets/id-card.png'
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal } from 'react-bootstrap'
import CustomPopup from '../../Pages/Admin/PopUp';




const NavPlayer = () => {

    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false);
    const [values, setValues] = useState({
        email: '',
        password: '',
        newpassword: '',
        password2: '',
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [form, setForm] = useState("");
    const dispatch = useDispatch();

    function submitForm(e) {
        setIsSubmitted(true);
        console.log(e);
        setForm(e)
    }


    const validate = (values) => {

        let errors = {}




        if (!values.email) {
            errors.email = "Email required"
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = "Email address is invalid"
        }
        if (!values.password) {
            errors.password = "Password is required"
        }

        if (!values.newpassword) {
            errors.newpassword = "New Password is required"
        } else if (values.newpassword.length < 6) {
            errors.newpassword = 'New password must be more than 6 characters'
        }

        if (!values.password2) {
            errors.password2 = "Password verification is required"
        } else if (values.password2 !== values.password) {
            errors.password2 = "Passwords don't match!"

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
    const handleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmiting(true);
        setValues("")
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmiting) {
            submitForm(values);
        }
    }, [errors])



    const username = useSelector((state) => state.coach);

    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleClose = () => {
        setShow(false)
    }
    const handleShow = () => {
        setShow(true)
    }
    const confirm_f = () => {
        handleSubmit();
        setShow(false);
        setEdit(!edit);
    }

    const cancel_f = () => {
        setShow(true);
        setErrors("")
        setEdit(!edit);
    }


    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };
    return (
        <>


            <div className='row-full-nav'>

                <div className='col-3 FOOTBALLAPP'>
                    <div className="nav-logo logo">
                        Football App
                    </div>
                </div>


                <div className='col-1 PlayersNav'>
                </div>

                <div className='col-1 lg'>

                </div>

                <div className='col-1 lg'>

                </div>

                <div className='col-1 lg'>

                </div>
                <div className='col-1 lg'>
                    <button className='Username' onClick={handleShow}>
                        {/* {username.name} */}
                        Account
                    </button>
                    <img className='userBTN' onClick={handleShow} src={Username}></img>

                </div>
                <div className='col-1 lg '>
                    <button className='LogOut'><NavLink className="nav-links1" exact to="/signIn">Log Out</NavLink></button>
                    <NavLink className="nav-links1" exact to="/signIn"><img className='Exit' onClick={console.log("giorgos")} src={LogOut}></img>
                    </NavLink>

                </div>









            </div>


            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Account</Modal.Title>
                </Modal.Header>

                {!edit && <div className='container_settings' >
                    <form className='form_settings'>

                        <div className='form-inputs_settings'>
                            <label htmlFor='email' className='form-label'>
                                E-mail
                            </label>
                            <div className='user_email'>
                                strgiorgos@gmail.com
                            </div>
                        </div>
                        <div className='space'></div>
                        <div className='space'></div>
                        <div className='space'></div>
                        <button className='Btn_settings' type='submit' onClick={() => setEdit(!edit)}>Edit</button>
                        <div className='col-12'>

                        </div>
                    </form>


                </div>
                }

                {edit && <div className=' container_settings 2' >
                    <form className='form_settings InputsEdit' onSubmit={handleSubmit} >

                       
                        <div className='form-inputs_settings'>
                            <label htmlFor='password_settings'
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
                        <div className='form-inputs_settings'>
                            <label htmlFor='password_settings'
                                className='form-label'>
                                *New Password
                            </label>
                            <input type='password'
                                name='newpassword'
                                className='form-input'
                                placeholder='Enter your newpassword'
                                value={values.newpassword}
                                onChange={hadleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                        </div>
                        <div className='form-inputs_settings'>
                            <label htmlFor='username'
                                className='form-label'>
                                *Password Verification
                            </label>
                            <input type='password'
                                name='password2'
                                className='form-input'
                                placeholder='Verify your new password'
                                value={values.password2}
                                onChange={hadleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                        </div>
                        <button className='Btn_settings' type='submit' onClick={confirm_f}>Confirm</button>
                        <button className='Btn_settingsCancel' onClick={cancel_f}>Cancel</button>

                    </form>

                </div>
                }                <Modal.Footer>

                </Modal.Footer>
            </Modal>



        </>
    )
}

export default NavPlayer
