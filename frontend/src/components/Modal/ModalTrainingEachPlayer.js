import React from 'react'
import '../../assets/Style/Modal.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import ModalEveryTrainingPlayerRating from './ModalEveryTrainingPlayerRating'
import { useState } from 'react'
import { Modal } from 'react-bootstrap'
import axios from "axios";
import {useNavigate} from "react-router-dom";



const ModalTrainingEachPlayer = ({ closeModalTrainingEachPlayer, closeModalTraining,players,date,teamId }) => {

    const [confirm, setConfirm] = useState(false);
    const navigate = useNavigate();
    const handleClose = () => {
        setConfirm(false)
    }
    const [attributes, setAttributes] = useState([]);

    const fetchTrainings = (e) => {
        setAttributes(e);
        console.log(attributes)
    }

    console.log(teamId)

    const sendTrainings = () => {

        Object.keys(attributes).forEach(async(training)=>{
            await axios
            .post(
              `http://localhost:8080/training/`,
              {
                player_id:training,
                training_date:date,
                name:attributes[training].name, 
                surname: attributes[training].surname,
                team_id:teamId,
                behavior:attributes[training].behavior,
                rating: attributes[training].rating,
              },
              {
                headers: {
                  "Content-type": "application/json; charset=UTF-8",
                },
              }
            )
            .then((res) => {
              console.log(res.data);
            })
            .catch((e) => {
              console.log(e);
            });

        })
        //navigate('/players')
        navigate('/training')
        setConfirm(!confirm)
        closeModalTrainingEachPlayer(false)
        closeModalTraining(false)
    }
   

    return (
        <>   <div className='modalBackgroundPosition Training1'>
            <div className='col-12 x-btn'>
                <button className='x_btn' onClick={() => closeModalTrainingEachPlayer(false)}>X</button>
            </div>
            <div className='offset-4 col-4 Train_Title'>Individual Evaluation</div>
            <ModalEveryTrainingPlayerRating players={players} fetchTrainings={fetchTrainings} />


            <div className='footer'>
                <div className='col-12 Buttons'>
                    <div className='offset-8 col-2'>
                        <button className='cancel-button Tr2Cancel' onClick={() => closeModalTrainingEachPlayer(false)}>Cancel</button>

                    </div>
                    <div className='col-2 '>
                        <button className='next-button Tr2Confirm' onClick={() => setConfirm(true)}> Confirm </button>
                    </div>
                </div>
            </div>
        </div>

            <Modal show={confirm} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Session</Modal.Title>
                </Modal.Header>


                <div className='popUpMessage'>
                    Are you sure?
                    <div className='YES_NO_BTNS'>
                        <button className='YesBtnAccept' onClick={sendTrainings}>Yes</button>
                        <button className='NoBtn' onClick={() => setConfirm(!confirm)}>No</button>
                    </div>
                </div>
                <Modal.Footer>

                </Modal.Footer>
            </Modal>
        </>

    )
}

export default ModalTrainingEachPlayer
