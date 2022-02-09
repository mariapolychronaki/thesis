import React from 'react'
import { NavLink } from "react-router-dom"
import '../../assets/Style/Navbar.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import LogOut from '../../assets/logout.png'
import Username from '../../assets/id-card.png'

const NavPlayer = () => {
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





        </>
    )
}

export default NavPlayer
