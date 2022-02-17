import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import ModalGoalkeeper from './ModalGoalkeeper'
import { useState,useEffect } from 'react'
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


const ModalPlayer = ({ closeModalPlayer,isOpen }) => {

    const [OpenModalGoalkeeper, setOpenModalGoalkeeper] = useState(false);
    const [OpenModalCentralDefender, setOpenModalCentralDefender] = useState(false);
    const [OpenModalWideDefender, setOpenModalWideDefender] = useState(false);
    const [OpenModalMidfielder, setOpenModalMidfielder] = useState(false);
    const [OpenModalAttackingMidfielderWide, setOpenModalAttackingMidfielderWide] = useState(false);
    const [OpenModalAttackingMidfielderCenter, setOpenModalAttackingMidfielderCenter] = useState(false);
    const [OpenModalForward, setOpenModalForward] = useState(false);

    const [position, setPosition] = useState("goalkeeper");
    const [height, setHeight] = useState("150");
    const [nationality, setNationality] = useState("Afghan");
    const [weight, setWeight] = useState("50");


    


    const [data, setdata] = useState({});


    const handleChangeParent = (data) => {
        console.log(data);
        setPosition(data);
    }
    const handleChangeParent1 = (data) => {
        console.log(data);
        setHeight(data);
    }
    const handleChangeParent2 = (data) => {
        console.log(data);
        console.log(nationality)

        setNationality(data);
    }

    const handleChangeParent3 = (data) => {
        console.log(data);
        setWeight(data);
    }

   
    const chooseModal = () => {

        setdata({
            ...data, [`position`]: position, [`height`]: height, [`nationality`]: nationality,
            [`weight`]: weight
        })



        if (position === "goalkeeper") {
            
            setOpenModalGoalkeeper(true);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (position === "central_defender") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(true);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (position === "right_defender" || position === "left_defender") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(true);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (position === "midfielder") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(true);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (position === "Att_mid_right" || position === "Att_mid_left") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(true);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (position === "Att_mid_center") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(true);
            setOpenModalForward(false);
        } else if (position === "forward") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(true);
        }

    }

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data)

    const [values, setValues] = useState({
        ssn: '',
        name: '',
        surname: '',
       
    });


    const validate = (values) => {

        let errors = {}


        if (!values.name.trim()) {
            errors.name = "name required"
        }

        if (!values.surname) {
            errors.surname = "surname required"
        }

        if (!values.ssn) {
            errors.ssn = "ssn is required"
        } 
     
        

        return errors;
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

                                <input className="inputs" name="ssn" onChange={handleChange}>

                                </input>
                            </div>
                        </div>

                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Name</label>
                            </div>
                            <div className='col-4 '>

                                <input className="inputs" name="name" onChange={handleChange}>

                                </input>
                            </div>
                        </div>


                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Surname</label>
                            </div>
                            <div className='col-4 '>

                                <input className="inputs" name="surname" onChange={handleChange}>

                                </input>
                            </div>
                        </div>


                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Nationality</label>
                            </div>
                            <div className='col-4 ' name="nationality" >
                                <Dropdown_nationality handleChangeCallback={handleChangeParent2} onChange={handleChange} />
                            </div>
                        </div>



                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Position</label>
                            </div>
                            <div className='col-4 ' >
                                <Dropdown_position handleChangeCallback={handleChangeParent} onChange={handleChange} />
                            </div>
                        </div>


                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Preferred Foot</label>
                            </div>
                            <div className='col-4 ' >

                                <select className='positions' name="Preferred Foot" onChange={handleChange}>
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
                            <div className='col-4 ' name="Height" >
                                <Dropdown_height className="height_op" handleChangeCallback={handleChangeParent1} />
                            </div>
                        </div>

                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Weight(kg)</label>
                            </div>
                            <div className='col-4'>

                                <Dropdown_weight className="weight_op" handleChangeCallback={handleChangeParent3} onChange={handleChange} />
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


                            {OpenModalGoalkeeper && < ModalGoalkeeper closeModalGoalkeeper={setOpenModalGoalkeeper} closeModalPlayer ={closeModalPlayer} />}
                            {OpenModalCentralDefender && < ModalCentralDefender closeModalCentralDefender={setOpenModalCentralDefender} closeModalPlayer ={closeModalPlayer}/>}
                            {OpenModalWideDefender && < ModalWideDefender closeModalWideDefender={setOpenModalWideDefender} closeModalPlayer ={closeModalPlayer}/>}
                            {OpenModalMidfielder && < ModalMidfielder closeModalMidfielder={setOpenModalMidfielder} closeModalPlayer ={closeModalPlayer}/>}
                            {OpenModalAttackingMidfielderWide && < ModalAttackingMidfielderWide closeModalAttackingMidfielderWide={setOpenModalAttackingMidfielderWide} closeModalPlayer ={closeModalPlayer}/>}
                            {OpenModalAttackingMidfielderCenter && < ModalAttackingMidfielderCenter closeModalAttackingMidfielderCenter={setOpenModalAttackingMidfielderCenter} closeModalPlayer ={closeModalPlayer}/>}
                            {OpenModalForward && < ModalForward closeModalForward={setOpenModalForward} closeModalPlayer ={closeModalPlayer}/>}

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalPlayer
