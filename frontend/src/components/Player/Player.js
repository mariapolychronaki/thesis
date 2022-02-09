import React from 'react'
import PlayerIcon from '../../assets/user.png'
import '../../assets/Style/Player.css'
import { useState } from 'react';
import "react-bootstrap"

const Player = ({name,position}) => {

    const [playerName, setPlayername] = useState("giorgos");

    return (
        <div className='col-12 player'>
            <div>
                <img className='Icon' src={PlayerIcon} />
            </div>
            <button className="player_name" onClick={()=>setPlayername("Dorgiomanolakis")}>{playerName}</button>
           


        </div>
    )
}

export default Player
