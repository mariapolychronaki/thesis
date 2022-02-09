import React from 'react'
import '../assets/Style/Pages.css'
import { useState, useRef } from 'react';
import ModalMatch from '../components/Modal/ModalMatch';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';

export const Matches = () => {

    const [openModalMatch, setOpenModalMatch] = useState(false);


    const arrayMatch = [{ match: "8" }]

    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    }
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


            <div className='table_container1' ref={ref}>

                {!openModalMatch && <div className='row Scroll'>
                    <button className='offset-1 col-1 scrollBtnLeft' onClick={() => scroll(-20)}> <ArrowLeft /> </button>

                    <button className='offset-10 col-1 scrollBtnRight' onClick={() => scroll(+20)}>
                        <ArrowRight />
                    </button>

                </div>}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Players</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col">Opponent</th>
                            <th scope="col-2">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {arrayMatch.map((player, index) => (
                            <tr>

                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>


        </div>
    );
};

