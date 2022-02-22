import React, { useEffect } from 'react'
import '../assets/Style/Pages.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalPlayer from '../components/Modal/ModalPlayer';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ModalInjured from '../components/Modal/ModalInjured';
import ModalGoalkeeper from '../components/Modal/ModalGoalkeeper';
import ModalPlayerRating from '../components/Modal/ModalPlayerRating';
import { arrayPlayers } from '../Constants/Constants';
import ModalEditPlayer from '../components/Modal/ModalEditPlayer';
import { NavLink } from 'react-bootstrap';
import CustomPopup from './Admin/PopUp';
import { setisOpen } from '../Store/Slices/ModalSlice';

export const Players = () => {

    const [searchField, setSearchField] = useState("");

    const [Player, setPlayer] = useState({});

    const isOpen = useSelector((state) => state.modal.isOpen)


    const coach = useSelector((state) => state.coach);

    const positions = ["Goalkeeper", "Central Defender", "Right Defender"];
    const playersArray = arrayPlayers;

    const [filteredPersons, setfilteredPersons] = useState(arrayPlayers);

    const handleChange = e => {
        setSearchField(e.target.value);
    };

    const handleChangeParent = () => {
        console.log("khjvjagdfsuagvh")
    }


    const [OpenModalGoalkeeper, setOpenModalGoalkeeper] = useState(false);
    const [OpenModalCentralDefender, setOpenModalCentralDefender] = useState(false);
    const [OpenModalWideDefender, setOpenModalWideDefender] = useState(false);
    const [OpenModalMidfielder, setOpenModalMidfielder] = useState(false);
    const [OpenModalAttackingMidfielderWide, setOpenModalAttackingMidfielderWide] = useState(false);
    const [OpenModalAttackingMidfielderCenter, setOpenModalAttackingMidfielderCenter] = useState(false);
    const [OpenModalForward, setOpenModalForward] = useState(false);



    const [maxLimit, setmaxLimit] = useState(false);

    const chooseModal = (player) => {
        console.log(player)
        if (player.position === "Goalkeeper") {

            setOpenModalGoalkeeper(true);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (player.position === "Central Defender") {

            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(true);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (player.position === "Right Defender" || player.position === "Left Defender") {
            console.log("mpika edw")
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(true);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (player.position === "Midfielder") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(true);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (player.position === "Attacking Midfielder Right" || player.position === "Attacking Midfielder Left") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(true);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(false);
        } else if (player.position === "Attacking Midfielder Center") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(true);
            setOpenModalForward(false);
        } else if (player.position === "Forward") {
            setOpenModalGoalkeeper(false);
            setOpenModalCentralDefender(false);
            setOpenModalWideDefender(false);
            setOpenModalMidfielder(false);
            setOpenModalAttackingMidfielderWide(false);
            setOpenModalAttackingMidfielderCenter(false);
            setOpenModalForward(true);
        }
        setOpenModalPlayerRating(true);
        setPlayer(player);
    }

    const dispatch = useDispatch();

    const [removePlayerBtn, setRemovePlayerBtn] = useState(false);

    useEffect(() => {
        setfilteredPersons(playersArray.filter(
            person => {
                return (
                    person
                        .name
                        .toLowerCase()
                        .includes(searchField.toLowerCase()) ||
                    person
                        .surname
                        .toLowerCase()
                        .includes(searchField.toLowerCase())
                );
            }

        ))
        console.log(searchField);
        console.log(filteredPersons);

    }, [searchField])


    const useSortableData = (arrayPlayers, config = null) => {
        const [sortConfig, setSortConfig] = React.useState(config);

        const sortedarrayPlayers = React.useMemo(() => {
            let sortablearrayPlayers = [...arrayPlayers];
            if (sortConfig !== null) {
                sortablearrayPlayers.sort((a, b) => {

                    if (sortConfig.key === "birthdate") {
                        var myString_a = a[sortConfig.key];
                        var myString_b = b[sortConfig.key]; //xml nodeValue from time element
                        var array_a = new Array();
                        var array_b = new Array();

                        //split string and store it into array
                        array_a = myString_a.split('/');
                        array_b = myString_b.split('/');

                        //from array concatenate into new date string format: "DD.MM.YYYY"
                        var newDate_a = new Date(array_a[2], array_a[1], array_a[0]);
                        var newDate_b = new Date(array_b[2], array_b[1], array_b[0]);

                        console.log(newDate_a);
                        console.log(newDate_b);

                        if (newDate_a < newDate_b) {
                            console.log(a[sortConfig.key], b);
                            return sortConfig.direction === 'ascending' ? -1 : 1;
                        }
                        if (newDate_a > newDate_b) {
                            return sortConfig.direction === 'ascending' ? 1 : -1;
                        }


                    } else if (sortConfig.key === "position") {

                        var result = []

                        positions.forEach(function (key) {
                            var found = false;
                            sortablearrayPlayers = sortablearrayPlayers.filter(function (item) {
                                if (!found && item[sortConfig.key] == key) {
                                    result.push(item);
                                    found = true;
                                    return false;
                                } else
                                    return true;
                            })

                        })
                        console.log(result);


                    }
                    else {
                        if (a[sortConfig.key] < b[sortConfig.key]) {
                            console.log(a[sortConfig.key], b);
                            return sortConfig.direction === 'ascending' ? -1 : 1;
                        }
                        if (a[sortConfig.key] > b[sortConfig.key]) {
                            return sortConfig.direction === 'ascending' ? 1 : -1;
                        }
                    }

                    return 0;
                });
            }
            return sortablearrayPlayers;
        }, [arrayPlayers, sortConfig]);

        const requestSort = (key) => {
            let direction = 'ascending';
            if (
                sortConfig &&
                sortConfig.key === key &&
                sortConfig.direction === 'ascending'
            ) {
                direction = 'descending';
            }
            setSortConfig({ key, direction });
        };

        return { arrayPlayers: sortedarrayPlayers, requestSort, sortConfig };
    };

    const [openModalPlayer, setOpenModalPlayer] = useState(false);
    const [openModalInjured, setOpenModalInjured] = useState(false);
    const [openModalPlayerRating, setOpenModalPlayerRating] = useState(false);
    const [openModalEditPlayer, setOpenModalEditPlayer] = useState(false);

    const functionEdit = (Player) => {

        setPlayer(Player);
        setOpenModalEditPlayer(true);
        console.log(Player)

    }

    const playerToBeRemoved = (Player) => {
        setPlayer(Player)
        setRemovePlayerBtn(true)
    }

    const ProductTable = (props) => {
        console.log(props);
        const { arrayPlayers, requestSort, sortConfig } = useSortableData(filteredPersons);
        const getClassNamesFor = (name) => {
            if (!sortConfig) {
                return;
            }
            return sortConfig.key === name ? sortConfig.direction : undefined;
        };
        return (
            <table className='table'>
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col" onClick={() => requestSort('index')}
                            className={getClassNamesFor('index')}>#</th>
                        <th scope="col" onClick={() => requestSort('name')}
                            className={getClassNamesFor('name')}>Name</th>
                        <th scope="col" onClick={() => requestSort('surname')}
                            className={getClassNamesFor('surname')} >Surname</th>
                        <th scope="col" onClick={() => requestSort('nationality')}
                            className={getClassNamesFor('nationality')}>Nationality</th>
                        <th scope="col" onClick={() => requestSort('position')}
                            className={getClassNamesFor('position')}>Position</th>
                        <th scope="col" onClick={() => requestSort('preferred_foot')}
                            className={getClassNamesFor('preferred_foot')}>Foot</th>
                        <th scope="col" onClick={() => requestSort('birthdate')}
                            className={getClassNamesFor('birthdate')}>BirthDate</th>
                        <th scope="col" onClick={() => requestSort('height')}
                            className={getClassNamesFor('height')}>Height(cm)</th>
                        <th scope="col" onClick={() => requestSort('weight')}
                            className={getClassNamesFor('weight')}>Weight(Kg)</th>
                        <th scope="col" onClick={() => requestSort('weight')}
                            className={getClassNamesFor('weight')}>Rating</th>
                        <th scope="col">Actions</th>

                    </tr>
                </thead>



                <tbody>
                    {arrayPlayers.map((player, index) => (

                        <tr key={player.id}>
                            <td>{index + 1}</td>
                            <td style={{
                                color: "#004d00",
                            }}>{player.name}</td>
                            <td style={{
                                color: "#004d00",
                            }}>{player.surname}</td>
                            <td>{player.nationality}</td>
                            <td>{player.position}</td>
                            <td>{player.preferred_foot}</td>
                            <td>{player.birthdate}</td>
                            <td>{player.height}</td>
                            <td>{player.weight}</td>
                            <td>Rating</td>
                            <td className='action_buttons'>
                                <button className='edit_btn' onClick={() => functionEdit(player)}> Edit </button>
                                <button className='rating_btn' onClick={() => chooseModal(player)}> Rating </button>
                                <button className='delete_btn' onClick={() => playerToBeRemoved(player)}> Remove </button>
                                {removePlayerBtn && <CustomPopup
                                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                                    show={removePlayerBtn}
                                >
                                    <div>Are you sure you want to remove {Player.surname} from your team</div>
                                </CustomPopup>}
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>

        );
    };

    const [visibility, setVisibility] = useState(false);

    const popupCloseHandler = (e) => {
        setVisibility(e);
    };



    const maxPlayers = () => {
        if (

            !openModalInjured &&
            !openModalPlayerRating &&
            !openModalEditPlayer
        ) {
            if (arrayPlayers.length > 25) {
                setmaxLimit(true)
            } else {
                setOpenModalPlayer(true)
                console.log(maxLimit)
            }
        }


    }

    const openInjuries = () => {
        if (
            !openModalPlayer &&
            !openModalPlayerRating &&
            !openModalEditPlayer
        ) {
            setOpenModalInjured(true)
        }
    }


    return (
        <>

            {maxLimit && <CustomPopup
                onClose={popupCloseHandler, () => setmaxLimit(!maxLimit)}
                show={maxLimit}
            >
                <div className='MaxPlayerLimit'>You can't have more than 25 players in your team!</div>

            </CustomPopup>}

            {!maxLimit && <div class="container-fluid">


                {/* <CustomPopup
                    onClose={popupCloseHandler, () => setVisibility(!visibility)}
                    show={!visibility}
                >
                    <div className='popUpMessage'>Your request to sign <span className='PlayerName'>player</span> ### has been <span className='MessAprroved'>approved</span></div>
                </CustomPopup> */}

                {/* <CustomPopup
                    onClose={popupCloseHandler, () => setVisibility(!visibility)}
                    show={!visibility}
                >
                    <div className='popUpMessage'>Your request to sign <span className='PlayerName'>player</span> ### has been <span className='MessDeclined'>declined</span></div>
                </CustomPopup> */}


                <div className='col-12 space'>

                </div>
                <div className='row bar'>
                    <div className='col-2 players'>
                        Players
                    </div>
                    <div className='col-2 list_pl'>
                        <button className='btn existing_players' ><a className='alink' href='/allplayers'>All Players</a></button>

                    </div>
                    <div className=' col-2 INJ'>
                        <button className='btn_Inj' onClick={openInjuries}>Injuries</button>


                    </div>
                    <div className=' col-2 Add'>
                        <button className='btn' onClick={maxPlayers}>Add Player</button>
                    </div>
                </div>

                {removePlayerBtn && <CustomPopup
                    onClose={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}
                    show={removePlayerBtn}
                >
                    <div>Do you want to remove <span className='RemovePlayerSurname'>{Player.name} {Player.surname} </span>from your team ?</div>
                    <div className='offset-5 col-3'>
                        <button onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)} className='YesBtnPopUp' >Yes</button>
                        <button className='NoBtnPopUp' onClick={popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn)}>No</button>
                    </div>
                </CustomPopup>}


                {(isOpen || openModalPlayer) && < ModalPlayer isOpen={isOpen} closeModalPlayer={setOpenModalPlayer} />}
                {openModalInjured && < ModalInjured closeModalInjured={setOpenModalInjured} />}
                {openModalPlayerRating && < ModalPlayerRating
                    OpenModalGoalkeeper={OpenModalGoalkeeper}
                    OpenModalCentralDefender={OpenModalCentralDefender}
                    OpenModalWideDefender={OpenModalWideDefender}
                    OpenModalMidfielder={OpenModalMidfielder}
                    OpenModalAttackingMidfielderWide={OpenModalAttackingMidfielderWide}
                    OpenModalAttackingMidfielderCenter={OpenModalAttackingMidfielderCenter}
                    OpenModalForward={OpenModalForward}
                    closeModalPlayerRating={setOpenModalPlayerRating} player={Player} handeChangeCallback={handleChangeParent} />}


                {openModalEditPlayer && < ModalEditPlayer player={Player}
                    closeModalEditPlayer={setOpenModalEditPlayer} />}



                <section className="garamond">
                    <div className="pa2">
                        <input
                            className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                            type="search"
                            placeholder="Search Player"
                            onChange={handleChange}
                        />
                    </div>
                </section>


                {(!openModalPlayer && !openModalInjured && !openModalPlayerRating && !openModalEditPlayer && !removePlayerBtn) && <ProductTable props={filteredPersons} />}




            </div >
            }



        </>

    );
};

