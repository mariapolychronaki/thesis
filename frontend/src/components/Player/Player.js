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



            <div className='player'>

                <div>
                    <img className='Icon' src={PlayerIcon} />
                </div>

                <div className='col-12'>
                    <div className="player_name">{player}</div>
                </div>


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
