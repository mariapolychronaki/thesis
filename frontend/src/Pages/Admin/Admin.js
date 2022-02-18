import React from 'react';
import NavPlayer from '../../components/Navbar/NavPlayer'
import Footer from '../../components/Footer/Footer'
import '../../assets/Style/Admin.css'
import ModalAddInjuredPlayer from '../../components/Modal/ModalAddInjuredPlayer';
import { useState } from 'react';
import 'reactjs-popup/dist/index.css';
import CustomPopup from './PopUp';
import { Enquiries, usersCoaches, usersPlayers, SignUpMessages } from '../../Constants/Constants';

const Admin = () => {
    const [removePlayerBtn, setRemovePlayerBtn] = useState(false);

    const [visibility, setVisibility] = useState(false);
    const [Player, setPlayer] = useState({});

    const [accept, setAccept] = useState(false);

    const acceptEnquiry = (Player) => {
        setPlayer(Player)
        setAccept(true);

    }

    const [acceptEn, setAcceptEn] = useState(false);

    const acceptEnquiryEn = (Player) => {
        setPlayer(Player)
        setAcceptEn(true);

    }

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };


    const playerToBeRemoved = (Player) => {
        setPlayer(Player)
        setRemovePlayerBtn(true)
    }

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
                            <button class="btn buttonsAdmin" onClick={Function_CoachEnquiries}> Coaches' enquiries</button>
                        </div>
                        <div className='marginBtns'>
                            <button class="btn buttonsAdmin" onClick={Function_SignUpMessages}> Sign up Messages</button>
                        </div>
                        <div className='marginBtns'>
                            <button class="btn buttonsAdmin" onClick={Function_Players}>Players</button>
                        </div>
                        <div className='marginBtns'>
                            <button class="btn buttonsAdmin" onClick={Function_Coaches}>Coaches</button>
                        </div>

                    </div>
                </div>






                {Sign_UP_messages && <CustomPopup
                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                    show={removePlayerBtn}
                >
                    <div>Are you sure you want to reject <span className='RemovePlayerSurname'>{Player.name} {Player.surname}'s</span>  sign up request?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)} className='YesBtnPopUp' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}>No</button>
                    </div>
                </CustomPopup>}


                {accept && <CustomPopup
                    onClose={popupCloseHandler, () => setAccept(!accept)}
                    show={accept}
                >
                    <div>Are you sure you want to accept <span className='AddUserToBase'>{Player.name} {Player.surname}'s</span>  sign up request?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setAccept(!accept)} className='YesBtnAccept' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setAccept(!accept)}>No</button>
                    </div>
                </CustomPopup>}



                {!removePlayerBtn && !accept &&
                    Sign_UP_messages &&
                    <div className='user_sign_up_messages'>
                        <table className="table SM">

                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">
                                    </th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col"></th>
                                    <th scope="col"></th>

                                    <th scope="col"></th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                {SignUpMessages.map((message, index) =>
                                    <tr>
                                        <td>
                                            {index + 1}
                                        </td>
                                        <td>
                                            User
                                        </td>
                                        <td className='font_bold'>
                                            {message.name} <span className='span1'></span>
                                        </td >
                                        <td className='font_bold'>
                                            {message.surname}
                                        </td>
                                        <td>
                                            has

                                            asked

                                            to

                                            sign

                                            up
                                        </td>
                                        <td>
                                            as
                                        </td>
                                        <td className='font_Dec'>
                                            {message.user_type}
                                        </td>
                                        <td className='font_bold'>
                                            {message.email}
                                        </td>
                                        <td>

                                            <button className='BTN_Approve' onClick={() => acceptEnquiry(message)}>Approve</button>
                                            <button className='BTN_Decline' onClick={() => playerToBeRemoved(message)}>Decline</button>


                                        </td>
                                    </tr>
                                )}
                            </tbody>


                        </table>

                    </div>

                }




















                {Coach_Enquries && <CustomPopup
                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                    show={removePlayerBtn}
                >
                    <div>Are you sure you want to accept <span className='RemovePlayerSurname'>{Player.coach}'s</span> request
                        to sign  <span className='RemovePlayerSurname'>{Player.name} {Player.surname}'s</span>?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)} className='YesBtnPopUp' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}>No</button>
                    </div>
                </CustomPopup>}



                {acceptEn && <CustomPopup
                    onClose={popupCloseHandler, () => setAcceptEn(!acceptEn)}
                    show={acceptEn}
                >
                    <div>Are you sure you want to accept <span className='AddUserToBase'>{Player.coach}'s</span> request
                        to sign  <span className='AddUserToBase'>{Player.name} {Player.surname}'s</span>?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setAcceptEn(!acceptEn)} className='YesBtnAccept' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setAcceptEn(!acceptEn)}>No</button>
                    </div>
                </CustomPopup>}


                {!removePlayerBtn && !acceptEn && Coach_Enquries && <div className='coach_messages'>
                    <table className="table CE">

                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col"></th>
                                <th scope="col">Coach</th>
                                <th scope="col"></th>
                                <th scope="col" >Player Name</th>
                                <th scope="col" ></th>
                                <th scope="col" >Team</th>
                                <th scope="col" >Actions</th>


                            </tr>

                        </thead>
                        <tbody>
                            {Enquiries.map((enquiry, index) =>
                                <tr>
                                    <td >
                                        {index + 1}
                                    </td>
                                    <td >
                                        Coach
                                    </td>
                                    <td className='font_bold'>
                                        {enquiry.coach}
                                    </td>
                                    <td>
                                        has asked to claim
                                    </td>
                                    <td className='font_bold'>
                                        {enquiry.name}<span className='span1'>
                                            {enquiry.surname}</span>
                                    </td>
                                    <td >
                                        from team
                                    </td>
                                    <td className='font_bold'>
                                        {enquiry.team}
                                    </td>
                                    <td>
                                        <button className='BTN_Approve' onClick={() => acceptEnquiryEn(enquiry)}>Approve</button>
                                        <button className='BTN_Decline' onClick={() => playerToBeRemoved(enquiry)}>Decline</button>

                                    </td>


                                </tr>

                            )}

                        </tbody>


                    </table>
                </div>}









                {coaches && <CustomPopup
                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                    show={removePlayerBtn}
                >
                    <div>Are you sure you want to delete <span className='RemovePlayerSurname'>{Player.name} {Player.surname} </span> from database?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)} className='YesBtnPopUp' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}>No</button>
                    </div>
                </CustomPopup>}



                {!removePlayerBtn && coaches && <div className='coach_messages'>
                    <div className='offset-5 col-2 coach_messagesTitle'>All Active Users Coaches</div>

                    <table className="table tableCoaches">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Team</th>
                                <th scope="col">Actions</th>

                            </tr>

                        </thead>

                        <tbody>
                            {usersCoaches.map((user, index) =>
                                <tr>

                                    <td >
                                        {index}
                                    </td>
                                    <td className='font_bold'>
                                        {user.name}
                                    </td>
                                    <td className='font_bold'>
                                        {user.surname}
                                    </td>
                                    <td className='font_bold'>
                                        {user.email}
                                    </td>

                                    <td className='font_bold'>
                                        {user.team}
                                    </td>

                                    <td>

                                        <button className='BTN_Decline' onClick={() => playerToBeRemoved(user)}>Delete</button>


                                    </td>


                                </tr>

                            )}

                        </tbody>

                    </table>
                </div>}


                {players && <CustomPopup
                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                    show={removePlayerBtn}
                >
                    <div>Are you sure you want to delete <span className='RemovePlayerSurname'>{Player.name} {Player.surname} </span> from database?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)} className='YesBtnPopUp' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}>No</button>
                    </div>
                </CustomPopup>}

                {!removePlayerBtn && players && <div className='coach_messages'>

                    <div className='offset-5 col-2 coach_messagesTitle'>All Active Users Players</div>

                    <table className="table tablePlayers">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Team</th>
                                <th scope="col">Actions</th>

                            </tr>

                        </thead>
                        <tbody>
                            {usersPlayers.map((user, index) =>
                                <tr>

                                    <td >
                                        {index}
                                    </td>
                                    <td className='font_bold'>
                                        {user.name}
                                    </td>
                                    <td className='font_bold'>
                                        {user.surname}
                                    </td>
                                    <td className='font_bold'>
                                        {user.email}
                                    </td>

                                    <td className='font_bold'>
                                        {user.team}
                                    </td>

                                    <td>

                                        <button className='BTN_Decline' onClick={() => playerToBeRemoved(user)}>Delete</button>


                                    </td>


                                </tr>

                            )}

                        </tbody>


                    </table>
                </div>}


            </div>
        </div>






        <Footer />
    </div >;
};

export default Admin;
