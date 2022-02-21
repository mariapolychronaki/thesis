import React from 'react';
import Dropdown_rating from '../Dropdowns/Dropdown_rating';
import '../../assets/Style/EveryPlayerRating.css'
import 'react-bootstrap'
import { useState } from 'react';
import { arrayPlayers } from '../../Constants/Constants';

const ModalEveryTrainingPlayerRating = (closeModalTrainingEachPlayer) => {
    const [data, setdata] = useState({});

   
    const arrayInjured =
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



    const [attributes, setAttributes] = useState({
            
    });

    const handleChangeParent = (data, name, playerId) => {
        setAttributes({
            ...attributes, [`${playerId}`]: playerId
        })
        attributes[`${playerId}`] = { ...attributes[`${playerId}`], [`${name}`]: data }
        setAttributes(attributes)


    }

    console.log(attributes)

    
    return (
        <div className='row everyPlayerRating'>
            {arrayPlayers.map((player, index) => (
                <div className='col-3 IndividualPlayer'>
                    <div className='flex'>

                        <span className='col-12 title2 surname'>
                            <span name="playerName" >{player.surname}</span>
                        </span>
                    </div>
                    <form className='IndEval'>

                        <label>
                            Behaviour
                        </label>
                        <div>
                            <Dropdown_rating name="Behaviour" playerId={player.surname} handleChangeCallback={handleChangeParent} />
                        </div>
                        <label>
                            Rating
                        </label>
                        <div>
                            <Dropdown_rating name="Rating" playerId={player.surname} handleChangeCallback={handleChangeParent} />

                        </div>
                    </form>
                </div>))}

        </div>
    )
};

export default ModalEveryTrainingPlayerRating;
