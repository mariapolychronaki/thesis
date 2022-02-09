import React from 'react'
import { NavLink } from "react-router-dom"
import '../../assets/Style/Navbar.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import LogOut from '../../assets/logout.png'
import Username from '../../assets/id-card.png'
import { useSelector } from 'react-redux';
import coachSlice from '../../Store/Slices/coachSlice';
import ModalSettings from '../Modal/ModalSettings';


const Navbar = () => {

    const username = useSelector((state) => state.coach);

    return (
        <>



            <div className='row-full-nav'>

                <div className='col-3 FOOTBALLAPP'>
                    <div className="nav-logo logo">
                        Football App
                    </div>
                </div>


                <div className='col-1 PlayersNav'>
                    <NavLink exact to="/players" className="nav-links">
                        Players
                    </NavLink>
                </div>

                <div className='col-1 lg'>
                    <NavLink exact to="training" className="nav-links">
                        Training
                    </NavLink>
                </div>

                <div className='col-1 lg'>
                    <NavLink exact to="/lineup" className="nav-links">
                        Lineup
                    </NavLink>
                </div>

                <div className='col-1 lg'>
                    <NavLink className="nav-links" exact to="/matches" className="nav-links">
                        Matches
                    </NavLink>
                </div>
                <div className='col-1 lg'>
                    <button className='Username'>
                        {/* {username.name} */}
                        Settings
                    </button>
                    <img className='userBTN' onClick={console.log("giorgos")} src={Username}></img>

                </div>
                <div className='col-1 lg '>
                    <button className='LogOut'>Log Out</button>
                    <img className='Exit' onClick={console.log("giorgos")} src={LogOut}></img>

                </div>









            </div>



            {/* <ModalSettings /> */}


        </>
    )
}

export default Navbar
