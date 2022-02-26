import React, { useEffect, useState } from 'react'
import '../../assets/Style/EditPlayer.css'
import 'react-bootstrap'
import '../../assets/Style/ModalPositions.css'
import Dropdown_rating from '../Dropdowns/Dropdown_rating'
import Dropdown_nationality from '../Dropdowns/Dropdown_nationality'
import { arrayplayersRating } from '../../Constants/Constants'

const ModalPlayerRating = ({ closeModalPlayerRating, player, OpenModalGoalkeeper,
    OpenModalCentralDefender,OpenModalWideDefender,OpenModalMidfielder,
    OpenModalAttackingMidfielderCenter,OpenModalAttackingMidfielderWide,
    OpenModalForward
 }) => {
    console.log(player)

    const handleChangeParent = () => {
        console.log()
    }
    // const [OpenModalGoalkeeper, setOpenModalGoalkeeper] = useState(false);
    // const [OpenModalCentralDefender, setOpenModalCentralDefender] = useState(false);
    // const [OpenModalWideDefender, setOpenModalWideDefender] = useState(false);
    // const [OpenModalMidfielder, setOpenModalMidfielder] = useState(false);
    // const [OpenModalAttackingMidfielderWide, setOpenModalAttackingMidfielderWide] = useState(false);
    // const [OpenModalAttackingMidfielderCenter, setOpenModalAttackingMidfielderCenter] = useState(false);
    // const [OpenModalForward, setOpenModalForward] = useState(false);

    // const chooseModal = (player) => {

    //     if (player.position === "goalkeeper") {

    //         setOpenModalGoalkeeper(true);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     } else if (player.position === "central_defender") {
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(true);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     } else if (player.position === "right_defender" || player.position === "left_defender") {
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(true);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     } else if (player.position === "midfielder") {
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(true);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     } else if (player.position === "Att_mid_right" || player.position === "Att_mid_left") {
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(true);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(false);
    //     } else if (player.position === "Att_mid_center") {
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(true);
    //         setOpenModalForward(false);
    //     } else if (player.position === "forward") {
    //         setOpenModalGoalkeeper(false);
    //         setOpenModalCentralDefender(false);
    //         setOpenModalWideDefender(false);
    //         setOpenModalMidfielder(false);
    //         setOpenModalAttackingMidfielderWide(false);
    //         setOpenModalAttackingMidfielderCenter(false);
    //         setOpenModalForward(true);
    //     }
        
    // }

    // console.log(arrayplayersRating[0])
    var temp = useState({});
    arrayplayersRating.map((player1, index) => {
        if (player.name === player1.name && player.surname === player1.surname) {
            temp = arrayplayersRating[index]
        }
    })
    const [attributes, setAttributes] = useState(temp);
    console.log(temp)
    console.log(player)

        

    console.log(attributes)

    return (
        <>
           
            {/* {chooseModal(player)} */}

            {OpenModalGoalkeeper &&
                < div className='modalBackgroundPositionPlayerRating' >
                    <div className='col-12 space'></div>
                    <div className='modalContainerPositionPlayerRating'>
                        <div className='col-12 x-button'>
                            <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                        </div>
                        <div className='col-12 title'>
                            {player.name} {player.surname}
                        </div>
                        <div className='modalbodyPositionPlayerRating'>
                            <form>
                                <div className='row goalie'>

                                    <div className='aligns'>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Personality</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" tade={attributes.Personality} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Experience</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" tade={attributes.Experience} />
                                        </div>

                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation '>
                                            <label>Agility</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Agility} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Team work</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Team_work} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Leadership</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Leadership} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Reflexes</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" tade={attributes.Reflexes} />
                                        </div>
                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Communication</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Communication} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Shot stopping</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Shot_stopping} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Kicking</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Kicking} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Tactics</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Tactics} />
                                        </div>
                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Penalty saving</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Penalty_saving} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>One on ones</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.One_on_ones} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Rushing out</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Rushing_out} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Positioning</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" tade={attributes.Positioning} />
                                        </div>

                                    </div>
                                </div>


                            </form>
                        </div>
                        <div className='footer'>
                            <div className='col-12 Buttons'>
                                <div className='offset-7 col-2'>
                                    {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                                </div>
                                <div className='col-2'>
                                    <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >}





















            {OpenModalCentralDefender && <div className='modalBackgroundPositionPlayerRating' >
                <div className='col-12 space'></div>
                <div className='modalContainerPositionPlayerRating'>
                    <div className='col-12 x-button'>
                        <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                    </div>
                    <div className='col-12 title'>
                        {player.name} {player.surname}
                    </div>
                    <div className='modalbodyPositionPlayerRating'>
                        <form>
                            <div className='row goalie'>

                                <div className='aligns'>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Personality</label>
                                    </div>
                                    <div className='col-4 rating'>
                                        <Dropdown_rating className="rating" tade={attributes.Personality} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Experience</label>
                                    </div>
                                    <div className='col-4 rating'>
                                        <Dropdown_rating className="rating" tade={attributes.Experience} handleChangeCallback={handleChangeParent} />
                                    </div>

                                </div>


                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation '>
                                        <label>Agility</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Agility" tade={attributes.Agility} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Team work</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Team work" tade={attributes.Team_work} handleChangeCallback={handleChangeParent} />
                                    </div>


                                </div>


                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Leadership</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Leadership" tade={attributes.Leadership} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Tactics</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Tactics" tade={attributes.Tactics} handleChangeCallback={handleChangeParent} />
                                    </div>
                                </div>



                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Communication</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Communication" tade={attributes.Communication} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Positioning</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Positioning" tade={attributes.Positioning} handleChangeCallback={handleChangeParent} />
                                    </div>

                                </div>



                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Pace</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Pace" tade={attributes.Pace} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Stamina</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Stamina" tade={attributes.Stamina} handleChangeCallback={handleChangeParent} />
                                    </div>
                                </div>


                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Strength</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Strength" tade={attributes.Strength} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Technique</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Technique" tade={attributes.Technique} handleChangeCallback={handleChangeParent} />
                                    </div>

                                </div>



                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Marking </label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Marking" tade={attributes.Marking} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Passing</label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" name="Passing" tade={attributes.Passing} handleChangeCallback={handleChangeParent} />
                                    </div>

                                </div>



                                <div className='aligns'>

                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Aerial Ability </label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" tade={attributes.Aerial_ability} handleChangeCallback={handleChangeParent} />
                                    </div>
                                    <div className='offset-1 col-2 evaluation'>
                                        <label>Tackling </label>
                                    </div>
                                    <div className='col-4 rating'>

                                        <Dropdown_rating className="rating" tade={attributes.Tackling} handleChangeCallback={handleChangeParent} />
                                    </div>


                                </div>



                            </div>


                        </form>
                    </div>
                    <div className='footer'>
                        <div className='col-12 Buttons'>
                            <div className='offset-7 col-2'>
                                {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                            </div>
                            <div className='col-2'>
                                <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >}

















            {OpenModalWideDefender &&
                <div className='modalBackgroundPositionPlayerRating' >
                    <div className='col-12 space'></div>
                    <div className='modalContainerPositionPlayerRating'>
                        <div className='col-12 x-button'>
                            <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                        </div>
                        <div className='col-12 title'>
                            {player.name} {player.surname}
                        </div>
                        <div className='modalbodyPositionPlayerRating'>
                            <form>
                                <div className='row goalie'>

                                    <div className='aligns'>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Personality</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Personality" tade={attributes.Personality} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Experience</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Experience" tade={attributes.Experience} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation '>
                                            <label>Agility</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Agility" tade={attributes.Agility} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Team work</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Team work" tade={attributes.Team_work} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Leadership</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Leadership" tade={attributes.Leadership} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Tactics</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Tactics" tade={attributes.Tactics} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Communication</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Communication" tade={attributes.Communication} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Positioning</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Positioning" tade={attributes.Positioning} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Pace</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Pace" tade={attributes.Pace} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Stamina</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Stamina" tade={attributes.Stamina} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Strength</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Strength" tade={attributes.Strength} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Technique</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Technique" tade={attributes.Technique} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Marking </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Marking" tade={attributes.Marking} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Passing</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Passing" tade={attributes.Passing} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Crossing </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Crossing" tade={attributes.Crossing} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Going forward </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Going forward" tade={attributes.Going_forward} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>



                                </div>


                            </form>
                        </div>
                        <div className='footer'>
                            <div className='col-12 Buttons'>
                                <div className='offset-7 col-2'>
                                    {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                                </div>
                                <div className='col-2'>
                                    <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >}




























            {OpenModalMidfielder &&
                <div className='modalBackgroundPositionPlayerRating' >
                    <div className='col-12 space'></div>
                    <div className='modalContainerPositionPlayerRating'>
                        <div className='col-12 x-button'>
                            <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                        </div>
                        <div className='col-12 title'>
                            {player.name} {player.surname}
                        </div>
                        <div className='modalbodyPositionPlayerRating'>
                            <form>
                                <div className='row goalie'>

                                    <div className='aligns'>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Personality</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Personality" tade={attributes.Personality} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Experience</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Experience" tade={attributes.Experience} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation '>
                                            <label>Agility</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Agility" tade={attributes.Agility} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Team work</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Team work" tade={attributes.Team_work} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Leadership</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Leadership" tade={attributes.Leadership} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Tactics</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Tactics" tade={attributes.Tactics} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Communication</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Communication" tade={attributes.Communication} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Positioning</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Positioning" tade={attributes.Positioning} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Aerial ability</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Aerial ability" tade={attributes.Aerial_ability} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Pace</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Pace" tade={attributes.Pace} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Strength</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Strength" tade={attributes.Strength} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Stamina</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Stamina" tade={attributes.Stamina} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Technique </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Technique" tade={attributes.Technique} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Marking</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Marking" tade={attributes.Marking} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Passing </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Passing" tade={attributes.Passing} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Creativity</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Creativity" tade={attributes.Creativity} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Shots </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Shots" tade={attributes.Shots} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Composure</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Composure" tade={attributes.Composure} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>






                                </div>


                            </form>
                        </div>
                        <div className='footer'>
                            <div className='col-12 Buttons'>
                                <div className='offset-7 col-2'>
                                    {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                                </div>
                                <div className='col-2'>
                                    <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >}


























            {OpenModalAttackingMidfielderCenter &&
                <div className='modalBackgroundPositionPlayerRating' >
                    <div className='col-12 space'></div>
                    <div className='modalContainerPositionPlayerRating'>
                        <div className='col-12 x-button'>
                            <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                        </div>
                        <div className='col-12 title'>
                            {player.name} {player.surname}
                        </div>
                        <div className='modalbodyPositionPlayerRating'>
                            <form>
                                <div className='row goalie'>

                                    <div className='aligns'>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Personality</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Personality" tade={attributes.Personality} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Experience</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Experience" tade={attributes.Experience} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation '>
                                            <label>Agility</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Agility" tade={attributes.Agility} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Team work</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Team work" tade={attributes.Team_work} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Leadership</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Leadership" tade={attributes.Leadership} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Tactics</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Tactics" tade={attributes.Tactics} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Communication</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Communication" tade={attributes.Communication} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Pace</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Pace" tade={attributes.Pace} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Strength</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Strength" tade={attributes.Strength} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Technique</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Technique" tade={attributes.Technique} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Passing</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Passing" tade={attributes.Passing} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Through balls</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Through balls" tade={attributes.Through_balls} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Dribbling </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Dribbling" tade={attributes.Dribbling} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Finishing</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Finishing" tade={attributes.Finishing} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Shots </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Shots" tade={attributes.Shots} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Stamina</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Stamina" tade={attributes.Stamina} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Crossing </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Crossing" tade={attributes.Crossing} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Composure</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Composure" tade={attributes.Composure} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>






                                </div>


                            </form>
                        </div>
                        <div className='footer'>
                            <div className='col-12 Buttons'>
                                <div className='offset-7 col-2'>
                                    {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                                </div>
                                <div className='col-2'>
                                    <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >



            }






















            {OpenModalAttackingMidfielderWide &&
                <div className='modalBackgroundPositionPlayerRating' >
                    <div className='col-12 space'></div>
                    <div className='modalContainerPositionPlayerRating'>
                        <div className='col-12 x-button'>
                            <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                        </div>
                        <div className='col-12 title'>
                            {player.name} {player.surname}
                        </div>
                        <div className='modalbodyPositionPlayerRating'>
                            <form>
                                <div className='row goalie'>

                                    <div className='aligns'>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Personality</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Personality" tade={attributes.Personality} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Experience</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Experience" tade={attributes.Experience} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation '>
                                            <label>Agility</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Agility" tade={attributes.Agility} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Team work</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Team work" tade={attributes.Team_work} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Leadership</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Leadership" tade={attributes.Leadership} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Tactics</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Tactics" tade={attributes.Tactics} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Communication</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Communication" tade={attributes.Communication} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Pace</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Pace" tade={attributes.Pace} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Strength</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Strength" tade={attributes.Strength} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Technique</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Technique" tade={attributes.Technique} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>One on Ones</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="One on Ones" tade={attributes.One_on_ones} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Dribbling</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Dribbling" tade={attributes.Dribbling} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Crossing </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Crossing" tade={attributes.Crossing} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Aerial ability</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Aerial ability" tade={attributes.Aerial_ability} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Stamina </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Stamina" tade={attributes.Stamina} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Composure</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Composure" tade={attributes.Composure} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Shots </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Shots" tade={attributes.Shots} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Finishing</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Finishing" tade={attributes.Finishing} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>






                                </div>


                            </form>
                        </div>
                        <div className='footer'>
                            <div className='col-12 Buttons'>
                                <div className='offset-7 col-2'>
                                    {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                                </div>
                                <div className='col-2'>
                                    <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >


            }








            {OpenModalForward &&
                <div className='modalBackgroundPositionPlayerRating' >
                    <div className='col-12 space'></div>
                    <div className='modalContainerPositionPlayerRating'>
                        <div className='col-12 x-button'>
                            <button className='x' onClick={() => closeModalPlayerRating(false)}>X</button>
                        </div>
                        <div className='col-12 title'>
                            {player.name} {player.surname}
                        </div>
                        <div className='modalbodyPositionPlayerRating'>
                            <form>
                                <div className='row goalie'>

                                    <div className='aligns'>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Personality</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Personality" tade={attributes.Personality} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Experience</label>
                                        </div>
                                        <div className='col-4 rating'>
                                            <Dropdown_rating className="rating" name="Experience" tade={attributes.Experience} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation '>
                                            <label>Agility</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Agility" tade={attributes.Agility} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Team work</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Team work" tade={attributes.Team_work} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Leadership</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Leadership" tade={attributes.Leadership} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Tactics</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Tactics" tade={attributes.Tactics} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Communication</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Communication" tade={attributes.Communication} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Pace</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Pace" tade={attributes.Pace} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Strength</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Strength" tade={attributes.Strength} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Technique</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Technique" tade={attributes.Technique} handleChangeCallback={handleChangeParent} />
                                        </div>
                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Passing</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Passing" tade={attributes.Passing} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Composure</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Composure" tade={attributes.Composure} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Dribbling </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Dribbling" tade={attributes.Dribbling} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Finishing</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Finishing" tade={attributes.Finishing} handleChangeCallback={handleChangeParent} />
                                        </div>

                                    </div>



                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Positioning </label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Positioning" tade={attributes.Positioning} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Aerial ability</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Aerial ability" tade={attributes.Aerial_ability} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>


                                    <div className='aligns'>

                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Shots</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Shots" tade={attributes.Shots} handleChangeCallback={handleChangeParent} />
                                        </div>
                                        <div className='offset-1 col-2 evaluation'>
                                            <label>Stamina</label>
                                        </div>
                                        <div className='col-4 rating'>

                                            <Dropdown_rating className="rating" name="Stamina" tade={attributes.Stamina} handleChangeCallback={handleChangeParent} />
                                        </div>


                                    </div>






                                </div>


                            </form>
                        </div>
                        <div className='footer'>
                            <div className='col-12 Buttons'>
                                <div className='offset-7 col-2'>
                                    {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                                </div>
                                <div className='col-2'>
                                    <button className='next-button' onClick={() => closeModalPlayerRating(false)}> Confirm </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >

            }


















        </>
    )
}

export default ModalPlayerRating
