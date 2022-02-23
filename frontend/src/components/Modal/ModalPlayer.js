import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import ModalGoalkeeper from './ModalGoalkeeper'
import { useState, useEffect } from 'react'
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
import { arrayPlayers } from '../../Constants/Constants'
import { Modal } from 'react-bootstrap'
import moment from 'moment';

const ModalPlayer = ({ closeModalPlayer, isOpen }) => {

    const [OpenModalGoalkeeper, setOpenModalGoalkeeper] = useState(false);
    const [OpenModalCentralDefender, setOpenModalCentralDefender] = useState(false);
    const [OpenModalWideDefender, setOpenModalWideDefender] = useState(false);
    const [OpenModalMidfielder, setOpenModalMidfielder] = useState(false);
    const [OpenModalAttackingMidfielderWide, setOpenModalAttackingMidfielderWide] = useState(false);
    const [OpenModalAttackingMidfielderCenter, setOpenModalAttackingMidfielderCenter] = useState(false);
    const [OpenModalForward, setOpenModalForward] = useState(false);

    const [position, setPosition] = useState("Goalkeeper");
    const [height, setHeight] = useState("150");
    const [nationality, setNationality] = useState("Afghan");
    const [weight, setWeight] = useState("50");

    const [date, setDate] = useState(new Date());


    const [show, setShow] = useState(false);


    const [errors, setErrors] = useState({});


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






    const validate = (values) => {

        let errors = {}

        if (!values.ssn) {
            errors.ssn = "Ssn is required!"
            setErrors(errors)
            setShow(true)
            return false;
        } else if (values.ssn.length !== 11) {
            errors.ssn = "Snn must be 11 numbers!"
            setShow(true)
            setErrors(errors)
            return false;
        }
        if (!values.name) {
            errors.name = "Name required!"
            setShow(true)
            setErrors(errors)
            return false;
        }
        if (!values.surname) {
            errors.surname = "Surname required!"
            setShow(true)
            setErrors(errors)
            return false;
        }





        return true;
    }




    console.log(errors)




    const chooseModal = () => {
        var flag = validate(data)
        setdata({
            ...data, [`position`]: position, [`height`]: height, [`nationality`]: nationality,
            [`weight`]: weight, ['birthdate']: (date.getFullYear() + "/" + (date.getMonth()+1) + "/" + date.getDate())
        })

        console.log(data)
        console.log(errors)
        console.log(errors.length)

        if (flag === true) {
            if (position === "Goalkeeper") {

                setOpenModalGoalkeeper(true);
                setOpenModalCentralDefender(false);
                setOpenModalWideDefender(false);
                setOpenModalMidfielder(false);
                setOpenModalAttackingMidfielderWide(false);
                setOpenModalAttackingMidfielderCenter(false);
                setOpenModalForward(false);
            } else if (position === "Central Defender") {
                console.log("mpika")
                setOpenModalGoalkeeper(false);
                setOpenModalCentralDefender(true);
                setOpenModalWideDefender(false);
                setOpenModalMidfielder(false);
                setOpenModalAttackingMidfielderWide(false);
                setOpenModalAttackingMidfielderCenter(false);
                setOpenModalForward(false);
            } else if (position === "Right Defender" || position === "Left Defender") {
                setOpenModalGoalkeeper(false);
                setOpenModalCentralDefender(false);
                setOpenModalWideDefender(true);
                setOpenModalMidfielder(false);
                setOpenModalAttackingMidfielderWide(false);
                setOpenModalAttackingMidfielderCenter(false);
                setOpenModalForward(false);
            } else if (position === "Midfielder") {
                setOpenModalGoalkeeper(false);
                setOpenModalCentralDefender(false);
                setOpenModalWideDefender(false);
                setOpenModalMidfielder(true);
                setOpenModalAttackingMidfielderWide(false);
                setOpenModalAttackingMidfielderCenter(false);
                setOpenModalForward(false);
            } else if (position === "Attacking Midfielder Left" || position === "Attacking Midfielder Right") {
                setOpenModalGoalkeeper(false);
                setOpenModalCentralDefender(false);
                setOpenModalWideDefender(false);
                setOpenModalMidfielder(false);
                setOpenModalAttackingMidfielderWide(true);
                setOpenModalAttackingMidfielderCenter(false);
                setOpenModalForward(false);
            } else if (position === "Attacking Midfielder Center") {
                setOpenModalGoalkeeper(false);
                setOpenModalCentralDefender(false);
                setOpenModalWideDefender(false);
                setOpenModalMidfielder(false);
                setOpenModalAttackingMidfielderWide(false);
                setOpenModalAttackingMidfielderCenter(true);
                setOpenModalForward(false);
            } else if (position === "Forward") {
                setOpenModalGoalkeeper(false);
                setOpenModalCentralDefender(false);
                setOpenModalWideDefender(false);
                setOpenModalMidfielder(false);
                setOpenModalAttackingMidfielderWide(false);
                setOpenModalAttackingMidfielderCenter(false);
                setOpenModalForward(true);
            }
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






    const handleClose = () => {
        setShow(false)
    }







    const [startDate, setStartDate] = useState(new Date());


    console.log(startDate)

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
                                <Dropdown_position name="position" handleChangeCallback={handleChangeParent} onChange={handleChange} />
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
                                <DatePicker className='date' dateFormat="yyyy/MM/dd"
                                    selected={date}
                                    onChange={(date) => setDate(date)} />
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


                            {OpenModalGoalkeeper && < ModalGoalkeeper player={data} closeModalGoalkeeper={setOpenModalGoalkeeper} closeModalPlayer={closeModalPlayer} />}
                            {OpenModalCentralDefender && < ModalCentralDefender closeModalCentralDefender={setOpenModalCentralDefender} closeModalPlayer={closeModalPlayer} />}
                            {OpenModalWideDefender && < ModalWideDefender closeModalWideDefender={setOpenModalWideDefender} closeModalPlayer={closeModalPlayer} />}
                            {OpenModalMidfielder && < ModalMidfielder closeModalMidfielder={setOpenModalMidfielder} closeModalPlayer={closeModalPlayer} />}
                            {OpenModalAttackingMidfielderWide && < ModalAttackingMidfielderWide closeModalAttackingMidfielderWide={setOpenModalAttackingMidfielderWide} closeModalPlayer={closeModalPlayer} />}
                            {OpenModalAttackingMidfielderCenter && < ModalAttackingMidfielderCenter closeModalAttackingMidfielderCenter={setOpenModalAttackingMidfielderCenter} closeModalPlayer={closeModalPlayer} />}
                            {OpenModalForward && < ModalForward closeModalForward={setOpenModalForward} closeModalPlayer={closeModalPlayer} />}

                        </div>
                    </div>
                </div>
            </div>







            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='showErrors'>
                        {errors.name}
                        {errors.ssn}
                        {errors.surname}
                    </div>
                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal>






















        </div >
    )
}

export default ModalPlayer
