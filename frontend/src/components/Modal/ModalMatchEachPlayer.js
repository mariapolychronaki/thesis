import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import ModalEveryMatchPlayerRating from '../Modal/ModalEveryMatchPlayerRating'

const ModalMatchEachPlayer = ({ closeModalMatchEachPlayer,closeModalMatch }) => {
    return (
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
                        <button className='next-button Tr3Confirm' onClick={() => closeModalMatchEachPlayer(false), () => {closeModalMatch(false)}}>  Confirm </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalMatchEachPlayer
