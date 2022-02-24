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


const ModalPlayerPlayerUserInit = ({ closeModalPlayer, isOpen }) => {



    const [position, setPosition] = useState("Goalkeeper");
    const [height, setHeight] = useState("150");
    const [nationality, setNationality] = useState("Afghan");
    const [weight, setWeight] = useState("50");


    const [show, setShow] = useState(false);

    const [showConfirm, setshowConfirm] = useState(false);

    const [errors, setErrors] = useState({});
    const [date, setDate] = useState(new Date());

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
            errors.ssn = "SSN is required!"
            setShow(true)

        } else if (values.ssn.length !== 11) {
            errors.ssn = "SNN must be 11 numbers!"
        } else {
            setshowConfirm(true)

        }
        console.log(errors)
        setErrors(errors)

        return errors;
    }









    const chooseModal = () => {
        validate(data)
        setdata({
            ...data, [`position`]: position, [`height`]: height, [`nationality`]: nationality,
            [`weight`]: weight, ['birthdate']: (date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate())
        })
        console.log(data)

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

    const handleClose1 = () => {
        setshowConfirm(false)
        closeModalPlayer(false)
    }






    const [startDate, setStartDate] = useState(new Date());

    return (


        <div className='modalBackground'>
            <div className='col-12 space'></div>
            <div className='modalContainerPlayer '>
                <div className='col-12 x-button'>
                </div>
                <div className='col-12 space'>

                </div>
                <div className='col-12 title'>
                    Stratakis Georgios
                </div>
                <div className='modalbody'>

                    <form>

                        <div className='col-12 space'>

                        </div>
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
                        </div>
                        <div className='col-2'>
                            <button className='next-button confirmStoEdit' onClick={chooseModal}> Confirm </button>




                        </div>
                    </div>
                </div>
            </div>


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




            <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div className='showErrors'>
                        {errors.ssn}
                    </div></Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal>






















        </div >
    )
}

export default ModalPlayerPlayerUserInit
