import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.css'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';


const Navbar = () => {
    return (
        <>



            <div className='row-full-nav'>

                <div className='col-2 '>
                    <NavLink exact to="/players" className="nav-logo">
                        Football App
                    </NavLink>
                </div>


                <div className='offset-1 col-2 lg'>
                    <NavLink exact to="/players" className="nav-links">
                        Players
                    </NavLink>
                </div>

                <div className='col-2 lg'>
                    <NavLink exact to="training" className="nav-links">
                        Training
                    </NavLink>
                </div>

                <div className='col-2 lg'>
                    <NavLink exact to="/lineup" className="nav-links">
                        Lineup
                    </NavLink>
                </div>

                <div className='col-2 lg'>
                    <NavLink className="nav-links" exact to="/matches" className="nav-links">
                        Matches
                    </NavLink>
                </div>
                <div className='col-1 lg '>
                    <button className='LogOut'>Log Out</button>
                </div>




            </div>
        
        




        </>
    )
}

export default Navbar
