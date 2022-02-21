import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import { useState } from 'react'


const ModalAttackingMidfielderWide = ({ closeModalAttackingMidfielderWide, closeModalPlayer }) => {
    const [data, setdata] = useState({});


    const [attributes, setAttributes] = useState({
        Agility: "0",
        Communication: "0",
        Composure: "0",
        Crossing: "0",
        Dribbling: "0",
        Experience: "0",
        Finishing: "0",
        Leadership: "0",
        Pace: "0",
        Passing: "0",
        Personality: "0",
        Shots: "0",
        Stamina: "0",
        Strength: "0",
        Tactics: "0",
        Team_work: "0",
        Technique: "0",
        Through_balls: "0"
    });

    const handleChangeParent = (data, name) => {
        setAttributes({
            ...attributes, [`${name}`]: data
        })

    }
    console.log(attributes)
    return (
        <div className='modalBackgroundPosition'>
            <div className='col-12 space'></div>
            <div className='modalContainerPosition'>
                <div className='col-12 x-button'>
                    <button className='x' onClick={() => closeModalAttackingMidfielderWide(false)}>X</button>
                </div>
                <div className='col-12 title'>
                    Attacking Midfielder Wide
                </div>
                <div className='modalbodyPosition'>
                    <form>
                        <div className='row goalie'>

                            <div className='aligns'>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Personality</label>
                                </div>
                                <div className='col-4 rating'>
                                    <Dropdown_rating className="rating" name="Personality" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Experience</label>
                                </div>
                                <div className='col-4 rating'>
                                    <Dropdown_rating className="rating" name="Experience" handleChangeCallback={handleChangeParent} />
                                </div>

                            </div>


                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation '>
                                    <label>Agility</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Agility" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Team work</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Team work" handleChangeCallback={handleChangeParent} />
                                </div>


                            </div>


                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Leadership</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Leadership" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Tactics</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Tactics" handleChangeCallback={handleChangeParent} />
                                </div>
                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Communication</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Communication" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Pace</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Pace" handleChangeCallback={handleChangeParent} />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Strength</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Strength" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Technique</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Technique" handleChangeCallback={handleChangeParent} />
                                </div>
                            </div>


                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>One on Ones</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="One on Ones" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Dribbling</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Dribbling" handleChangeCallback={handleChangeParent} />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Crossing </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Crossing" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Aerial ability</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Aerial ability" handleChangeCallback={handleChangeParent} />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Stamina </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Stamina" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Composure</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Composure" handleChangeCallback={handleChangeParent} />
                                </div>


                            </div>


                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Shots </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Shots" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Finishing</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Finishing" handleChangeCallback={handleChangeParent} />
                                </div>


                            </div>






                        </div>


                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 Buttons'>
                        <div className='offset-7 col-2'>
                            <button className='cancel-button' onClick={() => closeModalAttackingMidfielderWide(false)}>Cancel</button>
                        </div>
                        <div className='col-2'>
                            <button className='next-button' onClick={() => closeModalAttackingMidfielderWide(false), () => { closeModalPlayer(false) }}> Confirm </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalAttackingMidfielderWide
