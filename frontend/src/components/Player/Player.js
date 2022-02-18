import React from 'react'
import PlayerIcon from '../../assets/user.png'
import '../../assets/Style/Player.css'
import { useState } from 'react';
import "react-bootstrap"
import { arrayPlayers } from '../../Constants/Constants';



const Player = ({ player }) => {




    console.log(arrayPlayers)



    return (






        <>



















            <div className='col-12 player'>
                <div>
                    <img className='Icon' src={PlayerIcon} />
                </div>


                <button className="player_name">{player}</button>



                {/* <select className="player_name" >
                {arrayPlayers.map((player)=>
                <>
                    <option >{player.surname}</option>
                </>
                )}
            </select> */}

            </div >
        </>
    )
}

export default Player
