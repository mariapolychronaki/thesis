import React from 'react'
import './Modal.css'
import 'react-bootstrap'
import './ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'

const ModalMatchEachPlayer = ({ closeModalMatchEachPlayer }) => {
    return (
        <div className='modalBackgroundPosition'>
            <div className='col-12 space'></div>
            <div className='modalContainer Match-Each-Player'>
                <div className='col-12 x-button'>
                    <button className='x' onClick={() => closeModalMatchEachPlayer(false)}>X</button>
                </div>
                <div className='flex'>
                    <span className='col-6 title1'>
                        Evaluation:
                    </span>
                    <span className='col-6 title1'>
                        Player Name
                    </span>
                </div>
                <div className='modalbody Match_Each_Player '>
                    <form>
                        <div className='row '>

                            <div className='alignsTr'>
                                <div className='offset-1 col-2 evaluation'>
                                    <label>Rating</label>
                                </div>
                                <div className='col-4 rating'>
                                    <Dropdown_rating className="rating" />
                                </div>

                            </div>





                        </div>


                    </form>
                </div>
                <div className='footer'>
                    <div className='col-12 Buttons'>
                        <div className='offset-6 col-2'>
                            <button className='cancel-button Tr1' onClick={() => closeModalMatchEachPlayer(false)}>Cancel</button>
                        </div>
                        <div className='col-2'>
                            <button className='next-button Tr'> Comfirm </button>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default ModalMatchEachPlayer
