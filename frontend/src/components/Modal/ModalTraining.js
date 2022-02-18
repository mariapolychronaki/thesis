import React from 'react'
import 'react-bootstrap'
import '../../assets/Style/Modal.css'
import ModalGoalkeeper from './ModalGoalkeeper'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown_height from '../Dropdowns/Dropdown_height'
import Dropdown_weight from '../Dropdowns/Dropdown_weight'
import Dropdown_nationality from '../Dropdowns/Dropdown_nationality'
import ModalTrainingEachPlayer from './ModalTrainingEachPlayer'


const ModalTraining = ({ closeModalTraining }) => {

    const [OpenModalTrainingEachPlayer, setOpenModalTrainingEachPlayer] = useState(false);


    const [startDate, setStartDate] = useState(new Date());

    return (


        <div className='modalBackground'>
            <div className='col-12 space'></div>
            <div className='modalContainerTraining'>
                <div className='col-12 x-button'>
                    <div className='x_button_style'>
                        <button className='x' onClick={() => closeModalTraining(false)}>X</button>
                    </div>
                </div>
                <div className='col-12 title'>
                    New Session
                </div>
                <div className='modalbody'>

                    <form>
                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Date</label>
                            </div>
                            <div className='col-4 '>

                                <DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)} format='yyyy-MM-dd' />

                            </div>
                        </div>
                        <div className='col-12 space'>
                        
                        </div>











                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 btns'>
                        <div className='col-2 cancel_button_col'>
                            <button className='cancel-button' onClick={() => closeModalTraining(false)}>Cancel</button>
                        </div>
                        <div className=' col-2'>
                            <button className='next-button trainingInModalTraining' onClick={() => setOpenModalTrainingEachPlayer(true)}> Next </button>

                            {OpenModalTrainingEachPlayer && < ModalTrainingEachPlayer closeModalTrainingEachPlayer={setOpenModalTrainingEachPlayer} closeModalTraining={closeModalTraining}/>}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalTraining
