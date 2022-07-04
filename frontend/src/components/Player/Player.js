import React from 'react'
import PlayerIcon from '../../assets/user.png'
import '../../assets/Style/Player.css'
import { useState } from 'react';
import "react-bootstrap"
import { arrayPlayers } from '../../Constants/Constants';


const Player = ({ handleChangeCallback, player }) => {
    const handleChange = (e) => {
        handleChangeCallback(e.target.value);
    }

    const [check, setcheck] = useState(true);
    const [player1, setplayer1] = useState();

    const checkplayer = () => {
        if (player === "None") {
            setcheck(false)
            console.log("nonennojdnoifjaiabduafhvuhvyg")
        }
    }
    const [show, setShow] = useState(false);

    console.log(arrayPlayers)

    const setchoosePlayer = () => {
        setShow(true)
        checkplayer()
    }

    return (

        <>



            <div className='player'>

                <div>
                    <img className='Icon' src={PlayerIcon} />
                </div>

                <div className='col-12'>
                <div className="player_name" >{player?.surname}</div>
                    {/* {!show && <div className="player_name" onClick={setchoosePlayer}>{player}</div>}
                    {show &&
                        <select onChange={handleChange} className="player_name_select" defaultValue={player}>
                            <option value="None">None</option>
                            {arrayPlayers.map((player) =>
                                <>
                                    <option value={player.surname} >{player.surname}</option>
                                </>
                            )}
                        </select>
                    } */}
                </div>




            </div >
        </>
    )
}

export default Player
