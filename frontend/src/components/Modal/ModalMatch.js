import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import ModalGoalkeeper from './ModalGoalkeeper'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown_height from '../Dropdowns/Dropdown_height'
import Dropdown_weight from '../Dropdowns/Dropdown_weight'
import Dropdown_nationality from '../Dropdowns/Dropdown_nationality'
import Dropdown_position from '../Dropdowns/Dropdown_position'
import ModalCentralDefender from './ModalCentralDefender'
import ModalWideDefender from './ModalWideDefender'
import ModalMidfielder from './ModalMidFielder'
import ModalAttackingMidfielderCenter from './ModalAttMidCenter'
import ModalAttackingMidfielderWide from './ModalAttMidWide'
import ModalMatchEachPlayer from './ModalMatchEachPlayer'


const ModalMatch = ({ closeModalMatch }) => {


    const [OpenModalMatchEachPlayer, setOpenModalMatchEachPlayer] = useState(false);


    const [startDate, setStartDate] = useState(new Date());

    return (


        <div className='modalBackground'>
            <div className='col-12 space'></div>
            <div className='modalContainerMatch'>
                <div className='col-12 x-button'>
                    <button className='x' onClick={() => closeModalMatch(false)}>X</button>
                </div>
                <div className='col-12 title'>
                    New Match
                </div>
                <div className='modalbody '>

                    <form>
                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Date</label>
                            </div>
                            <div className='col-4'>
                                <DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)} format='yyyy-MM-dd' />
                            </div>
                        </div>
                        <div className='col-12 space'>

                        </div>










                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 btns'>
                        <div className='offset-7 col-2'>
                            <button className='cancel-button' onClick={() => closeModalMatch(false)}>Cancel</button>
                        </div>
                        <div className='col-2'>
                            <button className='next-button Next_match' onClick={() => setOpenModalMatchEachPlayer(true)}> Next </button>
                            {OpenModalMatchEachPlayer && < ModalMatchEachPlayer closeModalMatchEachPlayer={setOpenModalMatchEachPlayer} />}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalMatch
