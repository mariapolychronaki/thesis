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
                ssn: "170813175417", name: "Georgios", surname: "Klados", nationality: "Greek",
                position: "Central Defender", preferred_foot: "Right", birthdate: "01/01/1987", height: "182", weight: "88"
            },

            {
                ssn: "170813175417", name: "Ioannis", surname: "Paxakis", nationality: "Greek",
                position: "Central Defender", preferred_foot: "Right", birthdate: "01/01/2003", height: "182", weight: "80"
            },

            {
                ssn: "170813175417", name: "Konstantinos", surname: "Drakakis", nationality: "Greek",
                position: "Central Defender", preferred_foot: "Right", birthdate: "01/01/1998", height: "185", weight: "92"
            },

            {
                ssn: "170813175417", name: "Ioannis", surname: "Giounga", nationality: "Greek",
                position: "Central Defender", preferred_foot: "Right", birthdate: "01/01/1987", height: "192", weight: "80"
            },

            {
                ssn: "170813175417", name: "Georgios", surname: "Makrogiannakis", nationality: "Greek",
                position: "Right Defender", preferred_foot: "Right", birthdate: "07/01/1989", height: "183", weight: "84"
            },

            {
                ssn: "170813175417", name: "Emmanouil", surname: "Dorgiomanolakis", nationality: "Greek",
                position: "Right Defender", preferred_foot: "Right", birthdate: "07/01/2005", height: "165", weight: "55"
            },


            {
                ssn: "170813175417", name: "Marios", surname: "Hotza", nationality: "Albanian",
                position: "Right Defender", preferred_foot: "Right", birthdate: "01/01/2002", height: "175", weight: "68"
            },

            {
                ssn: "170813175417", name: "Vasilios", surname: "Bardis", nationality: "Greek",
                position: "Left Defender", preferred_foot: "Left", birthdate: "07/01/1998", height: "177", weight: "73"
            },

            {
                ssn: "170813175417", name: "Michail", surname: "Fournarakis", nationality: "Greek",
                position: "Left Defender", preferred_foot: "Left", birthdate: "07/01/2006", height: "170", weight: "60"
            },

            {
                ssn: "170813175417", name: "Georgios", surname: "Stratakis", nationality: "Greek",
                position: "Midfielder", preferred_foot: "Right", birthdate: "17/06/1997", height: "178", weight: "83"
            },

            {
                ssn: "170813175417", name: "Michail", surname: "Kefakis", nationality: "Greek",
                position: "Midfielder", preferred_foot: "Left", birthdate: "07/01/1993", height: "185", weight: "80"
            },

            {
                ssn: "170813175417", name: "Ioannis", surname: "Anifantakis", nationality: "Greek",
                position: "Midfielder", preferred_foot: "Right", birthdate: "07/01/1990", height: "175", weight: "82"
            },

            {
                ssn: "170813175417", name: "Nikolaos", surname: "Troulakis", nationality: "Greek",
                position: "Attacking Midfielder center", preferred_foot: "Right", birthdate: "07/01/1987", height: "173", weight: "73"
            },

            {
                ssn: "170813175417", name: "Nikolaos", surname: "Kousidis", nationality: "Greek",
                position: "Attacking Midfielder center", preferred_foot: "Right", birthdate: "07/01/1993", height: "173", weight: "78"
            },

            {
                ssn: "170813175417", name: "Ioannis", surname: "Xristoforakis", nationality: "Greek",
                position: "Attacking Midfielder Right", preferred_foot: "Right", birthdate: "07/01/1997", height: "180", weight: "70"
            },

            {
                ssn: "170813175417", name: "Alexandros", surname: "Bernikou", nationality: "Greek",
                position: "Attacking Midfielder Left", preferred_foot: "Right", birthdate: "07/01/2000", height: "187", weight: "77"
            },

            {
                ssn: "170813175417", name: "Konstantinos", surname: "Kafousis", nationality: "Greek",
                position: "Attacking Midfielder Left", preferred_foot: "Right", birthdate: "07/01/2003", height: "170", weight: "65"
            },


            {
                ssn: "170813175417", name: "Nikolaos", surname: "Drakoulis", nationality: "Greek",
                position: "Forward", preferred_foot: "Left", birthdate: "07/01/1989", height: "183", weight: "72"
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
                <button className='offset-7 col-2 button_Add_injured' onClick={()=>setOpenModalAddInjuredPlayer(true) }> Add player </button>
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
                            <button className='confirm_button_injured' onClick={() => closeModalInjured(false)}> Confirm </button>

                        </div>

                    </div>
                </div>
            </div>

        </div >

    )
}

export default ModalInjured
