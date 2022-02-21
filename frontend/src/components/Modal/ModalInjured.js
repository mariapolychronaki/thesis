import React from 'react'
import '../../assets/Style/Injuries.css'
import 'react-bootstrap'
import ModalGoalkeeper from './ModalGoalkeeper'
import { useState } from 'react'
import ModalAddInjuredPlayer from './ModalAddInjuredPlayer'

const ModalInjured = ({ closeModalInjured }) => {



    const arrayPlayers =
        [
            {
                ssn: "170813175417", name: "Nikolaos", surname: "Chronakis", nationality: "Greek",
                position: "Goalkeeper", preferred_foot: "Right", birthdate: "01/01/1987", height: "185", weight: "90"
            },

            {
                ssn: "170813175417", name: "Emmanouil", surname: "Kornilakis", nationality: "Greek",
                position: "Goalkeeper", preferred_foot: "Right", birthdate: "01/01/1998", height: "177", weight: "70"
            },


            {
                ssn: "170813175417", name: "Konstantinos", surname: "Nodarakis", nationality: "Greek",
                position: "Forward", preferred_foot: "Right", birthdate: "07/01/1997", height: "183", weight: "72"
            }
        ]


    const [startDate, setStartDate] = useState(new Date());
    const [openModalAddInjuredPlayer, setOpenModalAddInjuredPlayer] = useState(false);


    return (


        <div className='modalBackground_injured'>
            <div className='modalContainer_Injured '>
                <div className='col-12 x-button_injured'>
                    <button className='x_injured' onClick={() => closeModalInjured(false)}>X</button>
                </div>
                <div className='col-12 title_Injured'>
                    Injuries
                </div>
                <button className='offset-7 col-2 button_Add_injured' onClick={() => setOpenModalAddInjuredPlayer(true)}> Add player </button>
                {openModalAddInjuredPlayer && < ModalAddInjuredPlayer closeModalAddInjuredPlayer={setOpenModalAddInjuredPlayer} />}


                <div className='modalbody_Injured'>


                    <table className='table_injured'>

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
                            {arrayPlayers.map((player, index) => (
                                <tr key={player.id}>
                                    <td className='tr_injured'>{index + 1}</td>
                                    <td className='tr_injured'>{player.name}</td>
                                    <td className='tr_injured'>{player.surname}</td>

                                    <td className='action_buttons tr_injured'>
                                        <button className='edit_btn'> Cured </button>

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
                <div className='footer'>
                    <div className='col-12 btns'>
                        <div className='offset-9 col-2'>

                        </div>

                    </div>
                </div>
            </div>

        </div >

    )
}

export default ModalInjured
