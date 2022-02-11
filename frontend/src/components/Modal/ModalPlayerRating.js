import React from 'react'
import '../../assets/Style/EditPlayer.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'

const ModalPlayerRating = ({ closeModalPlayerRating }) => {
    return (
        <div className='modalBackgroundPositionPlayerRating'>
            <div className='col-12 space'></div>
            <div className='modalContainerPositionPlayerRating'>
                <div className='col-12 x-button'>
                    <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                </div>
                <div className='col-12 title'>
                    Goalkeeper
                </div>
                <div className='modalbodyPositionPlayerRating'>
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
                                    <label>Shot stopping</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Kicking</label>
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
                                    <label>Penalty saving</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>One on ones</label>
                                </div>
                                <div className='col-4 rating'>

                                    <Dropdown_rating className="rating" />
                                </div>

                            </div>



                            <div className='aligns'>

                                <div className='offset-1 col-2 evaluation'>
                                    <label>Rushing out</label>
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
                        </div>


                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 Buttons'>
                        <div className='offset-7 col-2'>
                            <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button>
                        </div>
                        <div className='col-2'>
                            <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalPlayerRating
