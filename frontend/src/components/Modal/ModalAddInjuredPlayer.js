import React from 'react'
import '../../assets/Style/Injuries.css'
import 'react-bootstrap'
import { useState } from 'react'
import { arrayPlayers,arrayInjured } from '../../Constants/Constants'


const ModalAddInjuredPlayer = ({ closeModalAddInjuredPlayer, closeModalInjured }) => {



    const [player, setplayer] = useState();
    const [startDate, setStartDate] = useState(new Date());
    const fixplayer = (player) => {
        setplayer(player)
        console.log(player)
    }
    const injuredPlayers = [];
    const healthyplayers = [];
    const positions = ["Goalkeeper", "Central Defender", "Right Defender", "Left Defender", "Midfielder",
    "Attacking Midfielder center", "Attacking Midfielder Right", "Attacking Midfielder Left", "Forward",
];


    const findHealthyplayers = () => {
        arrayPlayers.find((player) => {
            var flag = false;
            const temp = arrayInjured.find((player1) => {
                if (player.name === player1.name && player.surname === player1.surname) {
                    console.log(player.name)
                    console.log(player.surname)
                    flag = true;
                }


                // else {
                //     healthyplayers.push({ name: player1.name, surname: player1.surname })
                //     console.log(player.name)
                // }
            })
            if (flag === true) {
                injuredPlayers.push({ name: player.name, surname: player.surname, position: player.position })
            }
            console.log(injuredPlayers)
        })


        arrayPlayers.find((player) => {
            var flag = false;
            const temp = arrayInjured.find((player1) => {
                if (player.name === player1.name && player.surname === player1.surname) {
                    flag = true;
                }


                // else {
                //     healthyplayers.push({ name: player1.name, surname: player1.surname })
                //     console.log(player.name)
                // }
            })
            if (flag === false) {
                healthyplayers.push({ name: player.name, surname: player.surname, position: player.position })
                console.log(player.name)
                console.log(player.surname)
            }
        })
        healthyplayers.sort((a, b) => {
            return (positions.indexOf(a.position) - positions.indexOf(b.position))
        })
    }


    return (
        <>
            {findHealthyplayers()}
            <div className='modalBackground AddPlayerInj'>
                <div className='modalContainer AddPlayerInjured'>
                    <div className='col-12 '>
                        <button className='x_injured' onClick={() => closeModalAddInjuredPlayer(false)}>X</button>
                    </div>
                    <div className='col-12 title_Injured'>
                        Players
                    </div>

                    <div className='modalbody'>

                        <table className='table_injured_ADD'>
                            <thead>
                                <tr>
                                    {/* <th scope="col">#</th> */}
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Surname</th>
                                    <th scope="col">Actions</th>

                                </tr>
                            </thead>


                            <tbody>
                                {healthyplayers.map((player, index) => (
                                    <tr key={player.id}>
                                        <td className='tr_injured'>{index + 1}</td>
                                        <td className='tr_injured'>{player.name}</td>
                                        <td className='tr_injured'>{player.surname}</td>

                                        <td className='action_buttons tr_injured'>
                                            <button className='edit_btn_inj' onClick={() => fixplayer(player)}> Add </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                    </div>
                    <div className='footer'>
                        <div className='col-12 btns'>
                            <div className='offset-9 col-2'>
                                <button className='confirm_button_injured' onClick={() => closeModalAddInjuredPlayer(false)}> Confirm </button>

                            </div>

                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default ModalAddInjuredPlayer
