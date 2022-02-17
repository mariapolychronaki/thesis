import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import ModalEveryTrainingPlayerRating from './ModalEveryTrainingPlayerRating'

const ModalTrainingEachPlayer = ({ closeModalTrainingEachPlayer }) => {
    return (
        <div className='modalBackgroundPosition Training1'>
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
                        <button className='next-button Tr2Confirm' > Confirm </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalTrainingEachPlayer
