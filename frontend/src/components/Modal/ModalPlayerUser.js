import React from 'react'
import '../../assets/Style/ModalUser.css'
import 'react-bootstrap'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import Dropdown_height from '../Dropdowns/Dropdown_height'
import Dropdown_weight from '../Dropdowns/Dropdown_weight'
import Dropdown_nationality from '../Dropdowns/Dropdown_nationality'
import Dropdown_position from '../Dropdowns/Dropdown_position'
import ModalPlayer from './ModalPlayer'
import ModalPlayerUserInit from '../../components/Modal/ModalPlayerUserInit'
import { Modal } from 'react-bootstrap'


const ModalPlayerUser = ({ }) => {

    const [data, setdata] = useState({});
    const [position, setPosition] = useState("Goalkeeper");
    const [height, setHeight] = useState("150");
    const [nationality, setNationality] = useState("Afghan");
    const [weight, setWeight] = useState("50");
    const [closeModalPlayer, setcloseModalPlayer] = useState(true);

    const [show, setShow] = useState(true);

    const handleClose = () => {
        setShow(false)
    }

    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    console.log(data)

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

    const confirm = () => {
        setdata({
            ...data, [`position`]: position, [`height`]: height, [`nationality`]: nationality,
            [`weight`]: weight
        })

    }
    console.log(data)

    const [edit, setEdit] = useState(false);

    const [startDate, setStartDate] = useState(new Date());

    return (


        <>
            {closeModalPlayer && <  ModalPlayerUserInit closeModalPlayer={setcloseModalPlayer} />}


            {!edit && <div className='modalBackgroundUser'>
                <div className='col-12 space'></div>
                <div className='modalContainerUser'>
                    <div className='col-12 x-button'>
                    </div>
                    <div className='col-12 titleUser'>
                        Stratakis Georgios
                    </div>
                    <div className='modalbody'>

                        <form>
                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>SSN</label>
                                </div>
                                <div className='col-4 BackendInputs'>
                                12345678900
                                </div>
                            </div>

                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Name</label>
                                </div>
                                <div className='col-4 '>
                                    <div className='col-4 BackendInputs'>
                                        Georgios
                                    </div>
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Surname</label>
                                </div>
                                <div className='col-4 '>
                                    <div className='col-4 BackendInputs'>
                                        Stratakis
                                    </div>
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Nationality</label>
                                </div>
                                <div className='col-4 BackendInputs'>
                                    Greek
                                </div>
                            </div>



                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Position</label>
                                </div>
                                <div className='col-4 BackendInputs'>
                                    Midfielder
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Preferred Foot</label>
                                </div>
                                <div className='col-4'>

                                    <div className='col-4 BackendInputs'>
                                        Right
                                    </div>
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Birth Date</label>
                                </div>
                                <div className='col-4 BackendInputs'>
                                    17/06/1997
                                </div>
                            </div>


                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Height(m)</label>
                                </div>
                                <div className='col-4 BackendInputs'>
                                    178
                                </div>
                            </div>

                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Weight(kg)</label>
                                </div>
                                <div className='col-4 BackendInputs'>
                                    83
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='footer'>
                        <div className='col-12 btns'>
                            <div className='offset-9 col-2'>
                                <button className='confirm_button' onClick={() => setEdit(!edit)}>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >}



            {edit && <div className='modalBackgroundUser'>
                <div className='col-12 space'></div>
                <div className='modalContainerUser'>
                    <div className='col-12 x-button'>
                    </div>
                    <div className='col-12 titleUser'>
                        Stratakis Georgios
                    </div>
                    <div className='modalbody'>

                        <form>
                            <div className='space'></div>




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
                                    <label>Height(m)</label>
                                </div>
                                <div className='col-4 '  >
                                    <Dropdown_height className="height_op" name="height" handleChangeCallback={handleChangeParent1} />
                                </div>
                            </div>

                            <div className='col-12 name'>
                                <div className='offset-1 col-4 text'>
                                    <label>Weight(kg)</label>
                                </div>
                                <div className='col-4'>

                                    <Dropdown_weight className="weight_op"  handleChangeCallback={handleChangeParent3} onChange={handleChange} />
                                </div>
                            </div>

                        </form>
                    </div>
                    <div className='footer'>
                        <div className='col-12 btns'>
                            <div className='offset-9 col-2'>
                                <button className='confirm_button' onClick={confirm, () => setEdit(!edit)}>Confirm</button>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div >}
            {/* <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='playerAccept'>
                        You have been tranferred to "TeamName"
                    </div>
                </Modal.Body>

                <Modal.Footer>

                </Modal.Footer>
            </Modal> */}
        </>
    )
}

export default ModalPlayerUser
