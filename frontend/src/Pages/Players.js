import React from 'react'
import './Pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalPlayer from '../components/Modal/ModalPlayer';
import { useState } from 'react';


export const Players = () => {

    const [openModalPlayer, setOpenModalPlayer] = useState(false);

    return (
        <>
            <div class="container-fluid">



                <div className='col-12 space'>

                </div>
                <div className='row bar'>
                    <div className='col-2 players'>
                        Players
                    </div>
                    <div className='col-2 list_pl'>
                        <button className='btn'>Existing Players</button>

                    </div>
                    <div className=' col-2 Add'>
                        <button className='btn' onClick={()=>setOpenModalPlayer(true)}>Add Player</button>
                    </div>
                </div>

                {openModalPlayer && < ModalPlayer closeModalPlayer={setOpenModalPlayer} />}



            </div>

        </>

    );
};

