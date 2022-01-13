import React from 'react'
import './Pages.css'
import { useState } from 'react';
import ModalMatch from '../components/Modal/ModalMatch';

export const Matches = () => {

    const [openModalMatch, setOpenModalMatch] = useState(false);

    return (
        <div class="container-fluid">

            <div className='col-12 space'>

            </div>
            <div className='row bar'>
                <div className='col-2 players'>
                    Matches
                </div>
                <div className='offset-6 col-2 Matches'>
                  

                </div>
                <div className=' col-2 Add'>
                    <button className='btn' onClick={() => setOpenModalMatch(true)}>Add Match</button>
                </div>
            </div>
            {openModalMatch && < ModalMatch closeModalMatch={setOpenModalMatch} />}




        </div>
    );
};

