import React from 'react';
import NavPlayer from '../../components/Navbar/NavPlayer'
import Footer from '../../components/Footer/Footer'
import '../../assets/Style/Admin.css'
import ModalAddInjuredPlayer from '../../components/Modal/ModalAddInjuredPlayer';
import { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import CustomPopup from './PopUp';

const Admin = () => {

   
    const [Sign_UP_messages, setSign_UP_messages] = useState(true);
    const [Coach_Enquries, setCoach_Enquries] = useState(false);

    const Funtion1 = () => {
        setSign_UP_messages(true);
        setCoach_Enquries(false);
    }
    const Funtion2 = () => {
        setSign_UP_messages(false);
        setCoach_Enquries(true);
        // setVisibility(!visibility)
    }

    return <div>
        <NavPlayer />



        <div>
            <div className='container-fluid'>
                <div className='col-12 space'>
                </div>
                <div className='row RowAdmin'>

                    <div className='col-2 Sign_UP_messages'>
                        <button className='User_Mes' onClick={Funtion1}> Sign up Messages</button>


                    </div>
                    <div className='col-2 Coach_Enquries'>
                        <button className='Coach_en' onClick={Funtion2}>Coaches' enquiries</button>
                    </div>
                </div>




               



                {Sign_UP_messages &&
                    <div className='user_sign_up_messages'>
                        <table className="table SM">

                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">
                                        Sign Up Messages

                                    </th>
                                    <th scope="col">Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        1
                                    </td>
                                    <td>
                                        User tade has asked to sign up
                                    </td>
                                    <td>
                                        <button className='BTN_Approve'>Approve</button>
                                        <button className='BTN_Decline'>Decline</button>

                                    </td>


                                </tr>
                            </tbody>


                        </table>

                    </div>

                }


                {Coach_Enquries && <div className='coach_messages'>
                    <table className="table CE">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Coach Enquries</th>
                                <th scope="col" >Actions</th>


                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    Coach tade has enquired for player tade
                                </td>
                                <td>
                                    <button className='BTN_Approve'>Approve</button>
                                    <button className='BTN_Decline'>Decline</button>

                                </td>


                            </tr>
                        </tbody>


                    </table>
                </div>}

            </div>
        </div>
        <Footer />
    </div >;
};

export default Admin;
