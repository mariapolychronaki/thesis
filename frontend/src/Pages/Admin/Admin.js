import React from 'react';
import NavPlayer from '../../components/Navbar/NavPlayer'
import Footer from '../../components/Footer/Footer'
import '../../assets/Style/Admin.css'
import ModalAddInjuredPlayer from '../../components/Modal/ModalAddInjuredPlayer';
import { useState, useEffect } from 'react';
import 'reactjs-popup/dist/index.css';
import CustomPopup from './PopUp';
import { Enquiries, usersCoaches, usersPlayers, SignUpMessages, users } from '../../Constants/Constants';

const Admin = () => {
    const [removePlayerBtn, setRemovePlayerBtn] = useState(false);
    const [searchField, setSearchField] = useState("");
    const [searchFieldCoach, setSearchFieldCoach] = useState("");

    const [visibility, setVisibility] = useState(false);
    const [Player, setPlayer] = useState({});

    const [accept, setAccept] = useState(false);
    const [filteredPersons, setfilteredPersons] = useState(usersPlayers);

    const [filteredPersonsCoaches, setfilteredPersonsCoaches] = useState(usersCoaches);
    console.log(usersCoaches)

    const [Sign_UP_messages, setSign_UP_messages] = useState(true);
    const [Coach_Enquries, setCoach_Enquries] = useState(false);
    const [players, setPlayers] = useState(false);
    const [coaches, setCoaches] = useState(false);



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

   
    const Function_SignUpMessages = () => {
        setSign_UP_messages(true);
        setCoach_Enquries(false);
        setPlayers(false);
        setfilteredPersons(usersPlayers)
        setCoaches(false);
        setfilteredPersonsCoaches(usersCoaches) 
    }
    const Function_CoachEnquiries = () => {
        setSign_UP_messages(false);
        setCoach_Enquries(true);
        setPlayers(false);
        setfilteredPersons(usersPlayers)
        setCoaches(false);
        setfilteredPersonsCoaches(usersCoaches)         // setVisibility(!visibility)
    }
    const Function_Players = () => {
        setSign_UP_messages(false);
        setCoach_Enquries(false);
        setPlayers(true);
        setCoaches(false);
        setfilteredPersonsCoaches(usersCoaches)        // setVisibility(!visibility)
    }
    const Function_Coaches = () => {
        setSign_UP_messages(false);
        setCoach_Enquries(false);
        setPlayers(false);
        setfilteredPersons(usersPlayers)
        setCoaches(true);
        // setVisibility(!visibility)
    }

    const handleChange = e => {
        setSearchField(e.target.value);
    };

   



    useEffect(() => {
        setfilteredPersons(usersPlayers.filter(
            person => {
                return (
                    person
                        .name
                        .toLowerCase()
                        .includes(searchField.toLowerCase()) ||
                    person
                        .surname
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            }

        ))
        setfilteredPersonsCoaches(usersCoaches.filter(
            person => {
                return (
                    person
                        .name
                        .toLowerCase()
                        .includes(searchField.toLowerCase()) ||
                    person
                        .surname
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            }

        ))
        console.log(searchField);
        console.log(filteredPersons);
        console.log(filteredPersonsCoaches);


    }, [searchField])










    

    const useSortableData = (usersPlayers1, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);

        const sortedarrayPlayers = React.useMemo(() => {
            let sortablearrayPlayers = [...usersPlayers1];
            if (sortConfig !== null) {
                sortablearrayPlayers.sort((a, b) => {

                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        console.log(a[sortConfig.key], b);
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }


                    return 0;
                });
            }
            return sortablearrayPlayers;
        }, [usersPlayers, sortConfig]);

        const requestSort = (key) => {
            let direction = 'ascending';
            if (
                sortConfig &&
                sortConfig.key === key &&
                sortConfig.direction === 'ascending'
            ) {
                direction = 'descending';
            }
            setSortConfig({ key, direction });
        };

        return { usersPlayers: sortedarrayPlayers, requestSort, sortConfig };
    };






    const useSortableDataCoaches = (usersCoaches1, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);

        const sortedarrayPlayers = React.useMemo(() => {
            let sortablearrayPlayers = [...usersCoaches1];
            if (sortConfig !== null) {
                sortablearrayPlayers.sort((a, b) => {

                    if (a[sortConfig.key] < b[sortConfig.key]) {
                        console.log(a[sortConfig.key], b);
                        return sortConfig.direction === 'ascending' ? -1 : 1;
                    }
                    if (a[sortConfig.key] > b[sortConfig.key]) {
                        return sortConfig.direction === 'ascending' ? 1 : -1;
                    }


                    return 0;
                });
            }
            return sortablearrayPlayers;
        }, [usersCoaches, sortConfig]);

        const requestSort = (key) => {
            let direction = 'ascending';
            if (
                sortConfig &&
                sortConfig.key === key &&
                sortConfig.direction === 'ascending'
            ) {
                direction = 'descending';
            }
            setSortConfig({ key, direction });
        };

        return { usersCoaches: sortedarrayPlayers, requestSort, sortConfig };
    };







    var usersPlayers = []
    var usersCoaches = []


    const findUsers = ()=>{
        users.map((user)=>{
            if(user.user_type==="Player"){
                usersPlayers.push(user)
            }else  if(user.user_type==="Coach"){
                usersCoaches.push(user)
            }
        })
    }
    console.log(usersPlayers)
    console.log(usersCoaches)





    const ProductTablePlayer = (props) => {
        console.log(props);
        const { usersPlayers, requestSort, sortConfig } = useSortableData(filteredPersons);
        const getClassNamesFor = (name) => {
            if (!sortConfig) {
                return;
            }
            return sortConfig.key === name ? sortConfig.direction : undefined;
        };
        return (
            <>
                <div className='offset-4 col-4 TitleInAdminSignUp'>Players Users</div>
                <table className='table'>

                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th>#</th>

                            <th scope="col" onClick={() => requestSort('name')}
                                className={getClassNamesFor('name')}>Name</th>
                            <th scope="col" onClick={() => requestSort('surname')}
                                className={getClassNamesFor('surname')} >Surname</th>
                            <th>Email</th>
                            <th>Team</th>
                            <th>Actions</th>


                        </tr>
                    </thead>


                    <tbody>
                        {usersPlayers.map((user, index) =>
                            <tr>

                                <td >
                                    {index + 1}
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
            </>

        );
    };

    console.log(filteredPersonsCoaches)


    const ProductTableCoach = (props) => {
        console.log(props);
        const { usersCoaches, requestSort, sortConfig } = useSortableDataCoaches(filteredPersonsCoaches);
        console.log(usersCoaches)
        const getClassNamesFor = (name) => {
            if (!sortConfig) {
                return;
            }
            return sortConfig.key === name ? sortConfig.direction : undefined;
        };
        return (
            <>
                <div className='offset-4 col-4 TitleInAdminSignUp'>Coaches Users</div>
                <table className='table'>

                    <thead>
                        <tr>
                            {/* <th scope="col">#</th> */}
                            <th>#</th>

                            <th scope="col" onClick={() => requestSort('name')}
                                className={getClassNamesFor('name')}>Name</th>
                            <th scope="col" onClick={() => requestSort('surname')}
                                className={getClassNamesFor('surname')} >Surname</th>
                            <th>Email</th>
                            <th>Team</th>
                            <th>Actions</th>


                        </tr>
                    </thead>


                    <tbody>
                        {usersCoaches.map((user, index) =>
                            <tr>

                                <td >
                                    {index + 1}
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
            </>

        );
    };











    return <div>
        <NavPlayer />

        {findUsers()}

        <div>
            <div className='container-fluid'>
                <div className='col-12 space'>
                </div>
                <div className='row RowAdmin'>

                    <div className='col-2 Sign_UP_messages'>
                        <div className='marginBtns'>
                            <button class="btn buttonsAdmin" onClick={Function_SignUpMessages}> Sign up Messages</button>
                        </div>
                        <div className='marginBtns'>
                            <button class="btn buttonsAdmin" onClick={Function_CoachEnquiries}> Coaches' enquiries</button>
                        </div>

                        <div className='marginBtns'>
                            <button class="btn buttonsAdmin" onClick={Function_Players}>Player Users</button>
                        </div>
                        <div className='marginBtns'>
                            <button class="btn buttonsAdmin" onClick={Function_Coaches}>Coach Users</button>
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
                    <div className='row'>
                        <div className='col-12 TitleInAdminSignUp'>Sign Up Messages</div>
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
                                    {users.map((message, index) =>
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
                        to sign  <span className='AddUserToBase'>{Player.name} {Player.surname}</span>?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setAcceptEn(!acceptEn)} className='YesBtnAccept' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setAcceptEn(!acceptEn)}>No</button>
                    </div>
                </CustomPopup>}


                {!removePlayerBtn && !acceptEn && Coach_Enquries &&


                    <div className='row'>
                        <div className='col-12 TitleInAdminSignUp'>Coaches' Enquiries</div>
                        <div className='coach_messages'>
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
                                                has claimed
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
                        </div>
                    </div>}







                {coaches && <CustomPopup
                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                    show={removePlayerBtn}
                >
                    <div>Are you sure you want to delete user <span className='RemovePlayerSurname'>{Player.name} {Player.surname} </span> from database?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)} className='YesBtnPopUp' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}>No</button>
                    </div>
                </CustomPopup>}






























                {!removePlayerBtn && coaches && <section className="">
                    <div className="">
                        <input
                            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                            type="search"
                            placeholder="Search Player"
                            onChange={handleChange}
                        />
                    </div>
                </section>}

                {!removePlayerBtn && coaches &&
                    <ProductTableCoach props={filteredPersonsCoaches} />}







                {players && <CustomPopup
                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                    show={removePlayerBtn}
                >
                    <div>Are you sure you want to delete user <span className='RemovePlayerSurname'>{Player.name} {Player.surname} </span> from database?</div>
                    <div className='space'></div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)} className='YesBtnPopUp' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}>No</button>
                    </div>
                </CustomPopup>}


                {!removePlayerBtn && players && <section className="">
                    <div className="">
                        <input
                            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                            type="search"
                            placeholder="Search Player"
                            onChange={handleChange}
                        />
                    </div>
                </section>}
                {!removePlayerBtn && players &&
                    <ProductTablePlayer props={filteredPersons} />}











                {/* {!removePlayerBtn && players && <div className='coach_messages'>

                    <div className='offset-5 col-2 coach_messagesTitle'>All Active Users Players</div>
                    <section className="">
                        <div className="">
                            <input
                                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                                type="search"
                                placeholder="Search Player"
                                onChange={handleChange}
                            />
                        </div>
                    </section>
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
                </div>} */}


            </div>
        </div>






        <Footer />
    </div >;
};

export default Admin;
