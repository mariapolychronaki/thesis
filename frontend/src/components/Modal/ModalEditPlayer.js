import React from 'react'
import 'react-bootstrap'
import ModalGoalkeeper from './ModalGoalkeeper'
import { useState,useEffect} from 'react'
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
import axios from "axios";


const ModalEditPlayer = ({ closeModalEditPlayer, player }) => {



    const handleChangeParent = (d) => {
        console.log(d);
        setPosition(d);
        setdata({...data,position:d});
    }


    const [position, setPosition] = useState("Goalkeeper");
    const [height, setHeight] = useState("150");
    const [nationality, setNationality] = useState("Afghan");
    const [weight, setWeight] = useState("50");
    const [date, setDate] = useState(new Date());
    const [preferred_foot, setPreferredFoot] = useState("right")

    const [data, setdata] = useState({});

    const updatePlayer = async () =>{
        await axios
        .put(
          `http://localhost:8080/players/${player._id}`,
          data,
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          closeModalEditPlayer(false)
        })
        .catch((e) => {
          console.log(e);
        });
    }

    const chooseModal = () => {
       /* setdata({
            ...data, [`position`]: position, [`height`]: height, [`nationality`]: nationality,
            [`weight`]: weight,
        })*/
        console.log(data)

        updatePlayer();
       
    }

    useEffect(() => {
        setdata({position:player.position,height:player.height,nationality:player.nationality,weight:player.weight })
    },[player])

    // const chooseModal = () =>{
    //     if(position==="goalkeeper"){
    //         setOpenModalGoalkeeper(true);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     }else if(position==="central_defender"){
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(true);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     }else if(position==="right_defender" || position==="left_defender"){
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(true);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     }else if(position==="midfielder"){
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(true);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     }else if(position==="Att_mid_right" || position === "Att_mid_left"){
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(true);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     }else if(position==="Att_mid_center" ){
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(true);
    //         setOpenModalForward(false);
    //     }else if(position==="forward"){
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(true);
    //     }

    // }


    const handleChangeParent1 = (d) => {
        console.log(d);
        setHeight(d);
        setdata({...data,height:d});
    }
    const handleChangeParent2 = (d) => {
        console.log(d);
        console.log(nationality)
        setNationality(d);
        setdata({...data,nationality:d});
    }

    const handleChangeParent3 = (d) => {
        console.log(d);
        setWeight(d);
        setdata({...data,weight:d});
    }
    const handleChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value })
    }
    const [startDate, setStartDate] = useState(new Date());




    return (


        <div className='modalBackgroundPlayerEdit'>
            <div className='col-12 space'></div>
            <div className='modalContainerPlayerEdit '>
                <div className='col-12 x-button'>
                    <button className='x' onClick={() => closeModalEditPlayer(false)}>X</button>
                </div>
                <div className='col-12 title'>
                    {player.name}  {player.surname}
                </div>
                <div className='modalbodyPlayerEdit'>

                    <form>




                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Nationality</label>
                            </div>
                            <div className='col-4 '>

                                <Dropdown_nationality nationality={data.nationality} handleChangeCallback={handleChangeParent2} onChange={handleChange} />
                            </div>
                        </div>



                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Position</label>
                            </div>
                            <div className='col-4 '>
                                <Dropdown_position handleChangeCallback={handleChangeParent} position={data.position} />
                            </div>
                        </div>


                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Preferred Foot</label>
                            </div>
                            <div className='col-4'>

                                <select className='positions' defaultValue={player.preferred_foot} name="preferred_foot" onChange={handleChange}
                                >
                                    <option value="Right">Right</option>
                                    <option value="Left">Left</option>
                                    <option value="Both">Both</option>
                                </select>
                            </div>
                        </div>




                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Height(cm)</label>
                            </div>
                            <div className='col-4 '>

                                <Dropdown_height className="height_op" height={player.height} handleChangeCallback={handleChangeParent1} />
                            </div>
                        </div>

                        <div className='col-12 name'>
                            <div className='offset-1 col-4 text'>
                                <label>Weight(kg)</label>
                            </div>
                            <div className='col-4'>

                                <Dropdown_weight className="weight_op" weight={player.weight} handleChangeCallback={handleChangeParent3} onChange={handleChange} />
                            </div>
                        </div>

                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 btns'>
                        <div className='offset-7 col-2'>
                            {/* <button className='cancel-button PL_cancel' onClick={() => closeModalEditPlayer(false)}>Cancel</button> */}
                        </div>
                        <div className='col-2'>
                            <button className='next-button PL_next' onClick={chooseModal}> Confirm </button>




                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalEditPlayer
