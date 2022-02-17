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
    const [players, setPlayers] = useState(false);
    const [coaches, setCoaches] = useState(false);

    const Function_SignUpMessages = () => {
        setSign_UP_messages(true);
        setCoach_Enquries(false);
        setPlayers(false);
        setCoaches(false);
    }
    const Function_CoachEnquiries = () => {
        setSign_UP_messages(false);
        setCoach_Enquries(true);
        setPlayers(false);
        setCoaches(false);
        // setVisibility(!visibility)
    }
    const Function_Players = () => {
        setSign_UP_messages(false);
        setCoach_Enquries(false);
        setPlayers(true);
        setCoaches(false);
        // setVisibility(!visibility)
    }
    const Function_Coaches = () => {
        setSign_UP_messages(false);
        setCoach_Enquries(false);
        setPlayers(false);
        setCoaches(true);
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
                        <div className='marginBtns'>
                            <button  class="btn buttonsAdmin" onClick={Function_CoachEnquiries}> Coaches' enquiries</button>
                        </div>
                        <div className='marginBtns'>
                            <button  class="btn buttonsAdmin" onClick={Function_SignUpMessages}> Sign up Messages</button>
                        </div>
                        <div className='marginBtns'>
                            <button  class="btn buttonsAdmin" onClick={Function_Players}>Players</button>
                        </div>
                        <div className='marginBtns'>
                            <button  class="btn buttonsAdmin" onClick={Function_Coaches}>Coaches</button>
                        </div>

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
                                        User <span className='userNameAdmin'> Emmanouil Stratakis </span> has asked to sign up
                                    </td>

                                    <td>
                                        <button className='BTN_Approve'>Approve</button>
                                        <button className='BTN_Decline'>Decline</button>

                                    </td>


                                </tr>
                                <tr>
                                    <td>
                                        2
                                    </td>
                                    <td >
                                        User  <span className='userNameAdmin'>Ioannis Stratakis </span>has asked to sign up
                                    </td>

                                    <td>
                                        <button className='BTN_Approve'>Approve</button>
                                        <button className='BTN_Decline'>Decline</button>

                                    </td>


                                </tr>
                                <tr>
                                    <td>
                                        3
                                    </td>
                                    <td>
                                        User <span className='userNameAdmin'>Maria Polyxronaki </span> has asked to sign up
                                    </td>

                                    <td>
                                        <button className='BTN_Approve'>Approve</button>
                                        <button className='BTN_Decline'>Decline</button>

                                    </td>


                                </tr>
                                <tr>
                                    <td>
                                        4
                                    </td>
                                    <td>
                                        User <span className='userNameAdmin'>Giorgos Stratakis </span> has asked to sign up
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
                                    Coach tade has enquired player tade
                                </td>
                                <td>
                                    <button className='BTN_Approve'>Approve</button>
                                    <button className='BTN_Decline'>Decline</button>

                                </td>


                            </tr>
                        </tbody>


                    </table>
                </div>}




                {coaches && <div className='coach_messages'>
                    <div className='offset-5 col-2 coach_messagesTitle'>All Active Users Coaches</div>

                    <table className="table tableCoaches">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Team</th>

                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    strGiorgos@gmail.com
                                </td>
                                <td>
                                    Giorgos
                                </td>
                                <td>
                                    Stratakis
                                </td>

                                <td>
                                    Anthestion
                                </td>


                            </tr>
                        </tbody>


                    </table>
                </div>}




                {players && <div className='coach_messages'>

                    <div className='offset-5 col-2 coach_messagesTitle'>All Active Users Players</div>

                    <table className="table tablePlayers">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Team</th>

                            </tr>

                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    1
                                </td>
                                <td>
                                    strGiorgos@gmail.com
                                </td>
                                <td>
                                    Giorgos
                                </td>
                                <td>
                                    Stratakis
                                </td>

                                <td>
                                    Free Agent
                                </td>


                            </tr>
                            <tr>
                                <td>
                                    2
                                </td>
                                <td>
                                    Nikos@gmail.com
                                </td>
                                <td>
                                    Nikos
                                </td>
                                <td>
                                    Fakos
                                </td>

                                <td>
                                    Moires
                                </td>


                            </tr>
                            <tr>
                                <td>
                                    3
                                </td>
                                <td>
                                    johnStrat@gmail.com
                                </td>
                                <td>
                                    Giannis
                                </td>
                                <td>
                                    Stratakis
                                </td>

                                <td>
                                    Moires
                                </td>


                            </tr>
                            <tr>
                                <td>
                                    4
                                </td>
                                <td>
                                    vasilis@gmail.com
                                </td>
                                <td>
                                    Vasilis
                                </td>
                                <td>
                                    Perdikakis
                                </td>

                                <td>
                                    Paok
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
