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
import ModalForward from './ModalForward'
import ModalInjured from './ModalInjured'


const ModalPlayer = ({ closeModalPlayer }) => {

    const [OpenModalGoalkeeper, setOpenModalGoalkeeper] = useState(false);
    const [OpenModalCentralDefender, setOpenModalCentralDefender] = useState(false);
    const [OpenModalWideDefender, setOpenModalWideDefender] = useState(false);
    const [OpenModalMidfielder, setOpenModalMidfielder] = useState(false);
    const [OpenModalAttackingMidfielderWide, setOpenModalAttackingMidfielderWide] = useState(false);
    const [OpenModalAttackingMidfielderCenter, setOpenModalAttackingMidfielderCenter] = useState(false);
    const [OpenModalForward, setOpenModalForward] = useState(false);
    const [position,setPosition] = useState("goalkeeper");

    const handleChangeParent = (data)=>{
        console.log(data);
        setPosition(data);
    } 

    const chooseModal = () =>{
        if(position==="goalkeeper"){
            setOpenModalGoalkeeper(true);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        }else if(position==="central_defender"){
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(true);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        }else if(position==="right_defender" || position==="left_defender"){
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(true);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        }else if(position==="midfielder"){
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(true);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        }else if(position==="Att_mid_right" || position === "Att_mid_left"){
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(true);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        }else if(position==="Att_mid_center" ){
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(true);
            setOpenModalForward(false);
        }else if(position==="forward"){
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(true);
        }
        
    }

    const [startDate, setStartDate] = useState(new Date());

    return (


            <div className='modalBackground'>
                <div className='col-12 space'></div>
                <div className='modalContainerPlayer '>
                    <div className='col-12 x-button'>
                        <button className='x' onClick={() => closeModalPlayer(false)}>X</button>
                    </div>
                    <div className='col-12 title'>
                        New Player
                    </div>
                    <div className='modalbody'>

                        <form>
                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>SSN</label>
                                </div>
                                <div className='col-4 '>

                                    <input className="inputs">
                                    </input>
                                </div>
                            </div>

                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Name</label>
                                </div>
                                <div className='col-4 '>

                                    <input className="inputs">

                                    </input>
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Surname</label>
                                </div>
                                <div className='col-4 '>

                                    <input className="inputs">
                                    </input>
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Nationality</label>
                                </div>
                                <div className='col-4 '>

                                    <Dropdown_nationality />
                                </div>
                            </div>



                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Position</label>
                                </div>
                                <div className='col-4 '>
                                    <Dropdown_position handleChangeCallback = {handleChangeParent} />
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Preferred Foot</label>
                                </div>
                                <div className='col-4'>

                                    <select className='positions'>
                                        <option value="right">Right</option>
                                        <option value="left">Left</option>
                                        <option value="both">Both</option>
                                    </select>
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Birth Date</label>
                                </div>
                                <div className='col-4'>
                                    <DatePicker className='date' selected={startDate} onChange={(date) => setStartDate(date)} format='yyyy-MM-dd' />
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Height(m)</label>
                                </div>
                                <div className='col-4 '>

                                    <Dropdown_height className="height_op" />
                                </div>
                            </div>

                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Weight(kg)</label>
                                </div>
                                <div className='col-4'>

                                    <Dropdown_weight className="weight_op" />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='footer'>
                        <div className='col-12 btns'>
                            <div className='offset-7 col-2'>
                                <button className='cancel-button PL_cancel' onClick={() => closeModalPlayer(false)}>Cancel</button>
                            </div>
                            <div className='col-2'>
                                <button className='next-button PL_next' onClick={chooseModal}> Next </button>


                                {OpenModalGoalkeeper && < ModalGoalkeeper closeModalGoalkeeper={setOpenModalGoalkeeper}/>} 
                                {OpenModalCentralDefender && < ModalCentralDefender closeModalCentralDefender ={setOpenModalCentralDefender} />}
                                {OpenModalWideDefender && < ModalWideDefender closeModalWideDefender ={setOpenModalWideDefender} />}
                                {OpenModalMidfielder && < ModalMidfielder closeModalMidfielder ={setOpenModalMidfielder} />}
                                {OpenModalAttackingMidfielderWide && < ModalAttackingMidfielderWide closeModalAttackingMidfielderWide ={setOpenModalAttackingMidfielderWide} />}
                                {OpenModalAttackingMidfielderCenter && < ModalAttackingMidfielderCenter closeModalAttackingMidfielderCenter ={setOpenModalAttackingMidfielderCenter} />}
                                {OpenModalForward && < ModalForward closeModalForward ={setOpenModalForward} />}

                            </div>
                        </div>
                    </div>
                </div>
            </div >
        )
}

export default ModalPlayer
