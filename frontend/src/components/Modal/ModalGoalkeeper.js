import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'


const ModalGoalkeeper = ({ closeModalGoalkeeper, closeModalPlayer, player }) => {
    const [rating, setRating] = useState("0");
    const [data, setdata] = useState({});
    const [showConfirm, setshowConfirm] = useState(false);

    console.log(player)
    const [attributes, setAttributes] = useState({
        Agility: "0",
        Communication: "0",
        Experience: "0",
        Kicking: "0",
        Leadership: "0",
        One_on_ones: "0",
        Penalty_saving: "0",
        Personality: "0",
        Positioning: "0",
        Reflexes: "0",
        Rushing_out: "0",
        Shot_stopping: "0",
        Tactics: "0",
        Team_Work: "0"
    });

    const handleChangeParent = (data, name) => {
        setAttributes({
            ...attributes, [`${name}`]: data
        })
        console.log("data")

    }

    console.log(attributes)




    const handleSubmit = () => {
        setshowConfirm(true)
        //edw tha ginontai oi eisagwges toy paixth kai twn attributes

    }
    const handleClose1 = () => {
        setshowConfirm(false)
        closeModalGoalkeeper(false)
        closeModalPlayer(false)
    }


    return (
        <>
            <div className='modalBackgroundPosition'>
                <div className='col-12 space'></div>
                <div className='modalContainerPosition'>
                    <div className='col-12 x-button'>
                        <button className='x' onClick={() => closeModalGoalkeeper(false)}>X</button>
                    </div>
                    <div className='col-12 title'>
                        Goalkeeper
                    </div>
                    <div className='modalbodyPosition'>
                        <form>
                            <div className='row goalie'>

                                <div className='aligns'>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Personality</label>
                                    </div>
                                    <div className='col-4 rating' >
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

                                        <Dropdown_rating className="rating" name="Team_Work" handleChangeCallback={handleChangeParent} />
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
                                        <label>Reflexes</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Reflexes" handleChangeCallback={handleChangeParent} />
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
                                        <label>Shot stopping</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Shot_stopping" handleChangeCallback={handleChangeParent} />
                                    </div>

                                </div>



                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Kicking</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Kicking" handleChangeCallback={handleChangeParent} />
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
                                        <label>Penalty saving</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Penalty_saving" handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>One on ones</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="One_on_ones" handleChangeCallback={handleChangeParent} />
                                    </div>

                                </div>



                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Rushing out</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Rushing_out" handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Positioning</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Positioning" handleChangeCallback={handleChangeParent} />

                                    </div>

                                </div>
                            </div>


                        </form>
                    </div>
                    <div className='footer'>
                        <div className='col-12 Buttons'>
                            <div className='offset-7 col-2'>
                                <button className='cancel-button' onClick={() => closeModalGoalkeeper(false)}>Cancel</button>
                            </div>
                            <div className='col-2'>
                                <button className='next-button' onClick={handleSubmit}> Confirm </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div >
            <Modal show={showConfirm} onHide={handleClose1} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='ShowConfirmMessage'>
                        You have succesfully created your player!
                    </div>

                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal>

        </>

    )
}

export default ModalGoalkeeper
