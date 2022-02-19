import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import ModalEveryTrainingPlayerRating from './ModalEveryTrainingPlayerRating'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'



const ModalTrainingEachPlayer = ({ closeModalTrainingEachPlayer, closeModalTraining }) => {

    const [confirm, setConfirm] = useState(false);
    const handleClose = () => {
        setConfirm(false)
    }

    return (
        <>   <div className='modalBackgroundPosition Training1'>
            <div className='col-12 x-btn'>
                <button className='x_btn' onClick={() => closeModalTrainingEachPlayer(false)}>X</button>
            </div>
            <div className='offset-4 col-4 Train_Title'>Individual Evaluation</div>
            <ModalEveryTrainingPlayerRating />


            <div className='footer'>
                <div className='col-12 Buttons'>
                    <div className='offset-8 col-2'>
                        <button className='cancel-button Tr2Cancel' onClick={() => closeModalTrainingEachPlayer(false)}>Cancel</button>

                    </div>
                    <div className='col-2 '>
                        <button className='next-button Tr2Confirm' onClick={() => setConfirm(true)}> Confirm </button>
                    </div>
                </div>
            </div>
        </div>

            <Modal show={confirm} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Session</Modal.Title>
                </Modal.Header>


                <div className='popUpMessage'>
                    Are you sure?
                    <div className='YES_NO_BTNS'>
                        <button className='YesBtnAccept' onClick={() => setConfirm(!confirm), () => closeModalTrainingEachPlayer(false), () => closeModalTraining(false)}>Yes</button>
                        <button className='NoBtn' onClick={() => setConfirm(!confirm)}>No</button>
                    </div>
                </div>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalTrainingEachPlayer
