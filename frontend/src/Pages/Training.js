import React from 'react'
import '../assets/Style/Pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import ModalTraining from '../components/Modal/ModalTraining';
import { useState, useRef } from 'react';
import ModalEveryPlayerRating from '../components/Modal/ModalEveryTrainingPlayerRating';
import { ArrowRight } from 'react-bootstrap-icons';
import { ArrowLeft } from 'react-bootstrap-icons';
import { arrayPlayers, arrayplayersRating, arrayPlayerTrainingRating1, arrayPlayerTrainingRating2, totalTrainingRatings } from '../Constants/Constants';
import { arrayPlayerTrainingRating3, arrayPlayerTrainingRating4, arrayPlayerTrainingRating5 } from '../Constants/Constants';
import { arrayPlayerMatchRating1, arrayPlayerMatchRating2 } from '../Constants/Constants';


export const Training = () => {
    const [openModalTraining, setOpenModalTraining] = useState(false);


    const ref = useRef(null);

    const scroll = (scrollOffset) => {
        ref.current.scrollLeft += scrollOffset;
    }
    // const ArrayT =()=>{
    //     AVGRating_training = parseFloat( (parseFloat(arrayPlayerTrainingRating1[1])+parseFloat(arrayPlayerTrainingRating1[2]))/2);
    //     console.log(AVGRating_training);
    //     return AVGRating_training;
    // }
    const calculate = (player) => {
        return (parseFloat(player.Rating) + parseFloat(player.Behaviour)) / 2;
    }

    console.log(totalTrainingRatings);
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
                    <button className='btn' onClick={() => setOpenModalTraining(true)}>Add Session</button>
                </div>
            </div>


            {/* <ModalEveryTrainingPlayerRating /> */}

            {openModalTraining && < ModalTraining closeModalTraining={setOpenModalTraining} />}

            <div className='table_container1' ref={ref}>

                {/* {!openModalTraining && <div className='row Scroll'>
                    <button className='offset-1 col-1 scrollBtnLeft' onClick={() => scroll(-20)}> <ArrowLeft /> </button>

                    <button className='offset-10 col-1 scrollBtnRight' onClick={() => scroll(+20)}>
                        <ArrowRight />
                    </button>

                </div>} */}
                <table className="table">

                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Surname</th>
                            {totalTrainingRatings[0].trainings.map((player, index) => (
                                <th scope="col">Tr{index + 1}</th>
                            ))}

                          



                        </tr>

                    </thead>
                    <tbody>


                        {totalTrainingRatings.map((player, index) => (

                            <tr>
                                <td>
                                    {index + 1}
                                </td>
                                <td style={{
                                    color: "#004d00",
                                }}>
                                    {player.name}
                                </td>
                                <td style={{
                                    color: "#004d00",
                                }}>
                                    {player.surname}
                                </td>
                                {player.trainings.map((player1) => (
                                    <td>
                                        {calculate(player1)}
                                    </td>
                                ))}


                            </tr>


                        ))}



                    </tbody>




                </table>
            </div>


        </div>
    );
};

