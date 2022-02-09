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



const ModalPlayerUser = ({ }) => {



    const [startDate, setStartDate] = useState(new Date());

    return (


        <div className='modalBackgroundUser'>
            <div className='col-12 space'></div>
            <div className='modalContainerUser'>
                <div className='col-12 x-button'>
                </div>
                <div className='col-12 titleUser'>
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
                                <Dropdown_position />
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
                        <div className='offset-9 col-2'>
                            <button className='confirm_button'>Confirm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalPlayerUser
