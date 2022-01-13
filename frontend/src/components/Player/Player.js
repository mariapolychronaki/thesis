import React from 'react'
import PlayerIcon from '../../assets/user.png'
import './Player.css';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import "react-bootstrap"

const Player = ({name,position}) => {

    const [playerName, setPlayername] = useState("giorgos");

    return (
        <div className='col-12 player'>
            <div>
                <img className='Icon' src={PlayerIcon} />
            </div>
            <button className="player_name">{playerName}</button>
           


        </div>
    )
}

export default Player
