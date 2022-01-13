import React from 'react'
import './Pages.css'
import { Button } from 'react-bootstrap'
import Player from '../components/Player/Player';
import "react-bootstrap"

export const Lineup = () => {

    const players = [{ name: "manm", position: "defender" }
    ];

    return (




        <div className='container-fluid'>
            <div className='col-12 space2'>

            </div>


            <div class="col-6 pitch">


                <div class="top-box"></div>
                <div class="centre-circle"></div>
                <div class="centre-line"></div>
                <div class="bottom-box"></div>

                <div className='forward'>
                    <Player />
                </div>



                <div className='Att_mid'>
                    <Player />
                    <Player />
                    <Player />
                </div>


                <div className='midfielders'>
                    <Player />
                    <Player />
                </div>


                <div className='defenders'>
                    <Player />
                    <Player />
                    <Player />
                    <Player />
                </div>



                <div className='goalkeeper'>
                    <Player />
                </div>









            </div>



            <div class="col-6 bench">

                <div className='row sub2'>
                    <div className='col-1'>

                    </div>
                    <div className='col-4 subs'>
                        <div>
                            Subs
                        </div>
                    </div>
                    


                </div>


                <div className='row sub2'>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>
                    <div className='col-3 button_sub'>
                        <button className='Suggested'>Suggested Lineup</button>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>
                    <div className='col-3 button_sub'>
                        <button className='Injuries'>Injuries</button>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>

                </div>
                <div className='row'>
                    <div className='col-3 sub2'>
                        <Player />
                    </div>

                </div>











            </div>





        </div >
    );
};

