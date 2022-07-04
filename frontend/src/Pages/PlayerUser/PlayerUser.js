import React,{useState} from 'react';
import ModalPlayerUser from '../../components/Modal/ModalPlayerUser';
import NavPlayer from '../../components/Navbar/NavPlayer'
import Footer  from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar';

const PlayerUser = () => {

    const [playerId,setPlayerId] = useState("")

    const handlePlayerId = (e) => {
        console.log(e)
        setPlayerId(e);
    }

    return <div>
        <Navbar comesFrom={"player"} handlePlayerId={handlePlayerId} />
        <ModalPlayerUser player_id={playerId} />
        <Footer />
    </div>;

};

export default PlayerUser;
