import React from 'react';
import Dropdown_rating from '../Dropdowns/Dropdown_rating';
import '../../assets/Style/EveryPlayerRating.css'
import 'react-bootstrap'
import { useState } from 'react';
import { arrayPlayers, arrayInjured } from '../../Constants/Constants';


const ModalEveryMatchPlayerRating = (closeModalMatchEachPlayer) => {
    const [data, setdata] = useState({});


    const positions = ["Goalkeeper", "Central Defender", "Right Defender", "Left Defender", "Midfielder",
    "Attacking Midfielder center", "Attacking Midfielder Right", "Attacking Midfielder Left", "Forward",
];

    const initializePlayers = () => {

        var temp = {};
        arrayPlayers.map((player) => {
            console.log(player)
            temp[`${player.surname}`] = { ['Rating']: "0", };
            console.log(temp)
        })
        return temp;

    }
    const [attributes, setAttributes] = useState(initializePlayers());
    const injuredPlayers = [];
    const healthyplayers = [];





    const handleChangeParent = (data, name, playerId) => {
        setAttributes({
            ...attributes, [`${playerId}`]: playerId
        })
        attributes[`${playerId}`] = { ...attributes[`${playerId}`], [`${name}`]: data }
        setAttributes(attributes)
        console.log([`${playerId}`])
        console.log([`${name}`])
    }
    console.log(attributes)

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
                injuredPlayers.push({ name: player.name, surname: player.surname })
                console.log(player.name)
                console.log(player.surname)
            }
        })


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
            if (flag === false) {
                healthyplayers.push({ name: player.name, surname: player.surname })
                console.log(player.name)
                console.log(player.surname)
            }  
        })
        healthyplayers.sort((a, b) => {
            return (positions.indexOf(a.position) - positions.indexOf(b.position))
        })
    }

    return (

        <>  {findHealthyplayers()}
            <div className='row everyPlayerRating'>
                {healthyplayers.map((player, index) => (
                    <div className='col-3 IndividualPlayer'>
                        <div className='flex'>

                            <span className='col-12 title2 surname'>
                                <span>{player.surname}</span>

                            </span>
                        </div>
                        <form >
                            <label>
                                Rating
                            </label>
                            <div>
                                <Dropdown_rating name="Rating" playerId={player.surname} handleChangeCallback={handleChangeParent} />

                            </div>

                        </form>
                    </div>))}

                {injuredPlayers.map((player, index) => (
                    <div className='col-3 IndividualPlayer'>
                        <div className='flex'>

                            <span className='col-12 title2 surnameInjured'>
                                <span>{player.surname}</span>

                            </span>
                        </div>
                        <form >
                            <label>
                                Rating
                            </label>
                            <div>
                                <Dropdown_rating name="Rating" playerId={player.surname} handleChangeCallback={handleChangeParent} />

                            </div>

                        </form>
                    </div>))}

            </div>
        </>
    )
};

export default ModalEveryMatchPlayerRating;
