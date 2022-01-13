import React from 'react'
import './Pages.css'
import { NavLink } from 'react-router-dom';
import ModalTraining from '../components/Modal/ModalTraining';
import { useState } from 'react';

export const Training = () => {
    const [openModalTraining, setOpenModalTraining] = useState(false);

    return (
        <div class="container-fluid">

            <div className='col-12 space'>

            </div>
            <div className='row bar'>
                <div className='col-2 players'>
                    Sessions
                </div>
                <div className='offset-6 col-2 TRAINING'>

                </div>
                <div className=' col-2 Add'>
                    <button className='btn' onClick={()=>setOpenModalTraining(true)}>Add Session</button>
                </div>
            </div>
            {openModalTraining && < ModalTraining closeModalTraining={setOpenModalTraining} />}




        </div>
    );
};

