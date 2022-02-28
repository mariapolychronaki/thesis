import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import ModalEveryMatchPlayerRating from '../Modal/ModalEveryMatchPlayerRating'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'


const ModalMatchEachPlayer = ({ closeModalMatchEachPlayer, closeModalMatch }) => {
    const [confirm, setConfirm] = useState(false);
    const handleClose = () => {
        setConfirm(false)
    }
    return (
        <>
            <div className='modalBackgroundPosition Match1'>
                <div className='col-12 x-btn'>
                    <button className='x_btn' onClick={() => closeModalMatchEachPlayer(false)}>X</button>
                </div>
                <div className='offset-4 col-4 Match_Title'>Individual Evaluation</div>

                <ModalEveryMatchPlayerRating closeModalMatchEachPlayer />

                <div className='footer'>
                    <div className='col-12 Buttons'>
                        <div className='offset-7 col-2'>
                            <button className='cancel-button Tr3Cancel' onClick={() => closeModalMatchEachPlayer(false)}>Cancel</button>
                        </div>
                        <div className='col-2'>
                            <button className='next-button Tr3Confirm' onClick={() => closeModalMatchEachPlayer(false), () => { closeModalMatch(false) }} onClick={() => setConfirm(true)}>  Confirm </button>
                        </div>
                    </div>
                </div>
            </div>


            <Modal show={confirm} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Match</Modal.Title>
                </Modal.Header>


                <div className='popUpMessage'>
                    Are you sure?
                    <div className='YES_NO_BTNS'>
                        <button className='YesBtnAccept' onClick={() => setConfirm(!confirm), () => closeModalMatchEachPlayer(false), () => closeModalMatch(false)}>Yes</button>
                        <button className='NoBtn' onClick={() => setConfirm(!confirm)}>No</button>
                    </div>
                </div>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default ModalMatchEachPlayer
