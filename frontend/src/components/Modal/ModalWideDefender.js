import React from 'react'
import './Modal.css'
import 'react-bootstrap'
import './ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'

const ModalWideDefender = ({ closeModalWideDefender }) => {
    return (
        <div className='modalBackgroundPosition'>
            <div className='col-12 space'></div>
            <div className='modalContainerPosition'>
                <div className='col-12 x-button'>
                    <button className='x' onClick={() => closeModalWideDefender(false)}>X</button>
                </div>
                <div className='col-12 title'>
                    Wide Defender
                </div>
                <div className='modalbodyPosition'>
                    <form>
                        <div className='row goalie'>

                            <div className='aligns'>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Personality</label>
                                </div>
                                <div className='col-4 rating'>
                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Experience</label>
                                </div>
                                <div className='col-4 rating'>
                                    <Dropdown_rating className="rating" />
                                </div>

                            </div>


                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation '>
                                    <label>Agility</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Team work</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>


                            </div>


                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Leadership</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Tactics</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Communication</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Positioning</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Pace</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Stamina</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                            </div>


                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Strength</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Technique</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Marking </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Passing</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Crossing </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Going forward </label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                              

                            </div>


                           
                        </div>


                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 Buttons'>
                        <div className='offset-7 col-2'>
                            <button className='cancel-button' onClick={() => closeModalWideDefender(false)}>Cancel</button>
                        </div>
                        <div className='col-2'>
                            <button className='next-button'> Comfirm </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalWideDefender
