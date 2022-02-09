import React, { useEffect } from 'react'
import '../assets/Style/Pages.css'
import '../assets/Style/AllPlayers.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalPlayer from '../components/Modal/ModalPlayer';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import ModalInjured from '../components/Modal/ModalInjured';
import ModalGoalkeeper from '../components/Modal/ModalGoalkeeper';
import ModalPlayerRating from '../components/Modal/ModalPlayerRating';
import { arrayAllPlayers } from '../Constants/Constants';
import ModalEditPlayer from '../components/Modal/ModalEditPlayer';


export const AllPlayers = () => {





    const [searchField, setSearchField] = useState("");

    const [enquiry, setEnquiry] = useState("Enquiry");



    const coach = useSelector((state) => state.coach);

    const positions = ["Goalkeeper", "Central Defender", "Right Defender"];
    const playersArray = arrayAllPlayers;

    const [filteredPersons, setfilteredPersons] = useState(arrayAllPlayers);

    const handleChange = e => {
        setSearchField(e.target.value);
    };

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
                        <th scope="col">Actions</th>

                    </tr>
                </thead>


                <tbody>
                    {arrayPlayers.map((player, index) => (
                        <tr key={player.id}>
                            <td>{index + 1}</td>
                            <td>{player.name}</td>
                            <td>{player.surname}</td>
                            <td>{player.nationality}</td>
                            <td>{player.position}</td>
                            <td>{player.preferred_foot}</td>
                            <td>{player.birthdate}</td>
                            <td>{player.height}</td>
                            <td>{player.weight}</td>
                            <td className='action_buttons'>
                                <button className='enquiry_btn' onClick={()=>{setEnquiry("Pending")}}> {enquiry} </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };






    return (
        <>

            <div class="container-fluid">


                <div className='col-12 space'>

                </div>


                <div className='row bar'>
                    <div className='col-2 players'>
                        Players
                    </div>

                    <div className='offset-8 col-2 MyTeam'>
                        <button className='btn'><a className='alink' href='/players'>My Team</a></button>

                    </div>


                    <div className='col-3 search'>

                    </div>
                </div>

                <section className="garamond">

                    <div className="pa3">
                        <div className='pad'>

                            <input
                                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                                type="search"
                                placeholder="Search Player"
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                </section>

                <ProductTable />





            </div >




        </>

    );
};
