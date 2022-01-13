import React from 'react';
import './Footer.css';
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Footer() {
    return (
        <div className='row-full-footer'>

            <NavLink exact to="/players" className="nav-logo">
                Football App
            </NavLink>
        </div>
    );
};
