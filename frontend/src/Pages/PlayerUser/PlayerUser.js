import React from 'react';
import ModalPlayerUser from '../../components/Modal/ModalPlayerUser';
import NavPlayer from '../../components/Navbar/NavPlayer'
import Footer  from '../../components/Footer/Footer'

const PlayerUser = () => {
    return <div>
        <NavPlayer />
        <ModalPlayerUser />
        <Footer />
    </div>;

};

export default PlayerUser;
