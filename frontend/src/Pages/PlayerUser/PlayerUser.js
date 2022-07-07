import React,{useState} from 'react';
import ModalPlayerUser from '../../components/Modal/ModalPlayerUser';
import NavPlayer from '../../components/Navbar/NavPlayer'
import Footer  from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar/Navbar';

const PlayerUser = () => {

    const [playerId,setPlayerId] = useState("")
    const [user,setUser] = useState({})

    const handlePlayerId = (e) => {
        console.log(e)
        setPlayerId(e);
    }

    const handleUser = (e) => {
        setUser(e);
    }

    return <div>
        <Navbar comesFrom={"player"} handlePlayerId={handlePlayerId} handleUser={handleUser}/>
        <ModalPlayerUser player_id={playerId} user={user}/>
        <Footer />
    </div>;

};

export default PlayerUser;
