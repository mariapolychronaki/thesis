import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


const AuthLayout = () => {
    return (
        <div id="layout-wrapper">
            <Navbar />

            <div className="main-content" >
                <div className="page-content">
                    <div className="container-fluid"><Outlet /></div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AuthLayout;