import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import { useState } from 'react'

const ModalMidfielder = ({ closeModalMidfielder, closeModalPlayer }) => {

    const [data, setdata] = useState({});


    const [attributes, setAttributes] = useState({});

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
                    <button className='x' onClick={() => closeModalMidfielder(false)}>X</button>
                </div>
                <div className='col-12 title'>
                    Midfielder
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
                                    <label>Positioning</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Positioning" handleChangeCallback={handleChangeParent} />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Aerial ability</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Aerial ability" handleChangeCallback={handleChangeParent} />
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
                                    <label>Stamina</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Stamina" handleChangeCallback={handleChangeParent} />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Technique </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Technique" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Marking</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Marking" handleChangeCallback={handleChangeParent} />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Passing </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Passing" handleChangeCallback={handleChangeParent} />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Creativity</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Creativity" handleChangeCallback={handleChangeParent} />
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
                                    <label>Composure</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" name="Composure" handleChangeCallback={handleChangeParent} />
                                </div>


                            </div>






                        </div>


                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 Buttons'>
                        <div className='offset-7 col-2'>
                            <button className='cancel-button' onClick={() => closeModalMidfielder(false)}>Cancel</button>
                        </div>
                        <div className='col-2'>
                            <button className='next-button' onClick={() => closeModalMidfielder(false), () => { closeModalPlayer(false) }}> Confirm </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalMidfielder
