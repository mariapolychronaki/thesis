import React, { useEffect } from "react";
import "../assets/Style/Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalPlayer from "../components/Modal/ModalPlayer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ModalInjured from "../components/Modal/ModalInjured";
import ModalGoalkeeper from "../components/Modal/ModalGoalkeeper";
import ModalPlayerRating from "../components/Modal/ModalPlayerRating";
import { arrayPlayers, arrayplayersRating } from "../Constants/Constants";
import ModalEditPlayer from "../components/Modal/ModalEditPlayer";
import { NavLink } from "react-bootstrap";
import CustomPopup from "./Admin/PopUp";
import { setisOpen } from "../Store/Slices/ModalSlice";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { useCallback } from "react";
import { SET_TEAM } from "../Store/Slices/UserSlice";

export const Players = () => {
  const [searchField, setSearchField] = useState("");
  const userId = useSelector((state) => state.user.userId);
  const [removePlayerBtn, setRemovePlayerBtn] = useState(false);

  const [Player, setPlayer] = useState({});
  const [playersArray, setPlayersArray] = useState([]);
  const [filteredPersons, setfilteredPersons] = useState([]);

  const isOpen = useSelector((state) => state.modal.isOpen);
  const [havePlayers, setHavePlayers] = useState(true);
  const [show, setShow] = useState(false);
  const [showDecline, setShowDecline] = useState(false);

  const [openModalPlayer, setOpenModalPlayer] = useState(false);
  const [openModalInjured, setOpenModalInjured] = useState(false);
  const [openModalPlayerRating, setOpenModalPlayerRating] = useState(false);
  const [openModalEditPlayer, setOpenModalEditPlayer] = useState(false);
  const [ratings, setRatings] = useState({});

  const [team, setTeam] = useState({});
  const [rating, setRating] = useState([]);

  const fetchPlayers = useCallback(async (teamId) => {
    await axios
      .get(
        `http://localhost:8080/players/team/${teamId}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setPlayersArray(res.data);
        setfilteredPersons(res.data);
      })
      .catch((e) => {
        console.log(e);
      })
  }, []);

  useEffect(() => {
    playersArray.map((player) => {
      getPlayerRating(player._id, player.position);
    });
  },[playersArray,filteredPersons]);

  const fetchTeam = async () => {
    await axios
      .get(
        `http://localhost:8080/team/coach/${userId}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTeam(res.data);
        dispatch(SET_TEAM(res.data));
        fetchPlayers(res.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchTeam();
  }, [userId, openModalPlayer, removePlayerBtn, openModalEditPlayer,openModalPlayerRating]);

  const positions = [
    "Goalkeeper",
    "Central Defender",
    "Right Defender",
    "Left Defender",
    "Midfielder",
    "Attacking Midfielder Center",
    "Attacking Midfielder Right",
    "Attacking Midfielder Left",
    "Forward",
  ];
  console.log(filteredPersons);

  const coach = useSelector((state) => state.coach);
  const approved = useSelector((state) => state.coach.approved);
  const rejected = useSelector((state) => state.coach.rejected);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const handleChangeParent = () => {
    console.log("khjvjagdfsuagvh");
  };
  const [AVG_All, setAVG_All] = useState([]);

  const formatDate = (date) => {
    const tempDate = new Date(date);
    return tempDate.toLocaleDateString();
  };

  const [OpenModalGoalkeeper, setOpenModalGoalkeeper] = useState(false);
  const [OpenModalCentralDefender, setOpenModalCentralDefender] =
    useState(false);
  const [OpenModalWideDefender, setOpenModalWideDefender] = useState(false);
  const [OpenModalMidfielder, setOpenModalMidfielder] = useState(false);
  const [
    OpenModalAttackingMidfielderWide,
    setOpenModalAttackingMidfielderWide,
  ] = useState(false);
  const [
    OpenModalAttackingMidfielderCenter,
    setOpenModalAttackingMidfielderCenter,
  ] = useState(false);
  const [OpenModalForward, setOpenModalForward] = useState(false);

  const [maxLimit, setmaxLimit] = useState(false);

  useEffect(() => {
    if (approved === true) {
      setShow(true);
    } else if (rejected === true) {
      setShowDecline(true);
    }
    console.log(approved);
    console.log(rejected);
  }, [approved, rejected]);

  const getPlayerRating = async (id, position) => {
    if (position == "Goalkeeper") {
      return axios
        .get(
          `http://localhost:8080/goalkeeper/player/${id}/rating`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRating([...rating, res.data]);
          playersArray.find((player) => {
            return player._id == id;
          }).rating = res.data;

        })
        .catch((e) => {
          console.log(e);
        });
    } else if (position === "Central Defender") {
      return axios
        .get(
          `http://localhost:8080/central_defender/player/${id}/rating`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRating([...rating, res.data]);
          playersArray.find((player) => {
            return player._id == id;
          }).rating = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (position === "Right Defender" || position === "Left Defender") {
      return axios
        .get(
          `http://localhost:8080/wide_defender/player/${id}/rating`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRating([...rating, res.data]);
          playersArray.find((player) => {
            return player._id == id;
          }).rating = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (position === "Midfielder") {
      return axios
        .get(
          `http://localhost:8080/midfielder/player/${id}/rating`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRating([...rating, res.data]);
          playersArray.find((player) => {
            return player._id == id;
          }).rating = res.data;

        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      position === "Attacking Midfielder Right" ||
      position === "Attacking Midfielder Left"
    ) {
      return axios
        .get(
          `http://localhost:8080/attacking_midfielder_wide/player/${id}/rating`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRating([...rating, res.data]);
          playersArray.find((player) => {
            return player._id == id;
          }).rating = res.data;

        })
        .catch((e) => {
          console.log(e);
        });
    } else if (position === "Attacking Midfielder Center") {
      return axios
        .get(
          `http://localhost:8080/attacking_midfielder_center/player/${id}/rating`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRating([...rating, res.data]);
          playersArray.find((player) => {
            return player._id == id;
          }).rating = res.data;

        })
        .catch((e) => {
          console.log(e);
        });
    } else if (position === "Forward") {
      return axios
        .get(
          `http://localhost:8080/forward/player/${id}/rating`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          setRating([...rating, res.data]);
          playersArray.find((player) => {
            return player._id == id;
          }).rating = res.data;

          setfilteredPersons(playersArray)

        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  console.log(filteredPersons);

  const chooseModal = (player) => {
    console.log(player);
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
    } else if (
      player.position === "Right Defender" ||
      player.position === "Left Defender"
    ) {
      console.log("mpika edw");
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
    } else if (
      player.position === "Attacking Midfielder Right" ||
      player.position === "Attacking Midfielder Left"
    ) {
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
  };

  const dispatch = useDispatch();

  useEffect(() => {
    setfilteredPersons(
      playersArray.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchField.toLowerCase()) ||
          person.surname.toLowerCase().includes(searchField.toLowerCase())
        );
      })
    );
    console.log(searchField);
    console.log(filteredPersons);
    console.log(AVG_All);
    //  findAllRatings()
  }, [searchField]);

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

            console.log(myString_a);
            /*//split string and store it into array
                        array_a = myString_a.split('/');
                        array_b = myString_b.split('/');

                       
                        //from array concatenate into new date string format: "DD.MM.YYYY"
                        var newDate_a = new Date(array_a[0], array_a[1], array_a[2]);
                        var newDate_b = new Date(array_b[0], array_b[1], array_b[2]);

                        console.log(newDate_a);
                        console.log(newDate_b);
                        */
            if (myString_a < myString_b) {
              console.log(a[sortConfig.key], b);

              return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (myString_a > myString_b) {
              return sortConfig.direction === "ascending" ? 1 : -1;
            }
          } else if (sortConfig.key === "position") {
            if (positions.indexOf(a.position) > positions.indexOf(b.position)) {
              console.log("ascending");
              return sortConfig.direction === "ascending" ? 1 : -1;
            } else {
              return sortConfig.direction === "ascending" ? -1 : 1;
            }
          } else {
            if (a[sortConfig.key] < b[sortConfig.key]) {
              console.log(a[sortConfig.key], b);
              return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
              return sortConfig.direction === "ascending" ? 1 : -1;
            }
          }

          return 0;
        });
      }
      return sortablearrayPlayers;
    }, [arrayPlayers, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };

    return { arrayPlayers: sortedarrayPlayers, requestSort, sortConfig };
  };

  const checkArrayLength = () => {
    if (arrayPlayers.length === 0) {
      setHavePlayers(false);
      console.log(havePlayers);
      console.log(arrayPlayers.length);
      return (
        <>
          <div className="row">
            <div className="offset-3 col-6 notplayers">
              You don't have any players yet!
            </div>
          </div>
        </>
      );
    }
  };

  // const findAllRatings = () => {
  //     setAVG_All([]);
  //     arrayPlayers.map((player) => {
  //         const temp = arrayplayersRating.find((player1) => {
  //             var temp_for = [];

  //             if (player.name === player1.name && player.surname === player1.surname && player.position === "Goalkeeper") {

  //                 temp_for = (0.05 * (parseFloat(player1.Agility)) +
  //                     (0.05 * parseFloat(player1.Communication)) +
  //                     (0.05 * parseFloat(player1.Experience)) +
  //                     (0.05 * parseFloat(player1.Leadership)) +
  //                     (0.05 * parseFloat(player1.Kicking)) +
  //                     (0.1 * parseFloat(player1.One_on_ones)) +
  //                     (0.1 * parseFloat(player1.Penalty_saving)) +
  //                     (0.05 * parseFloat(player1.Personality)) +
  //                     (0.1 * parseFloat(player1.Positioning)) +
  //                     (0.1 * parseFloat(player1.Rushing_out)) +
  //                     (0.1 * parseFloat(player1.Shot_stopping)) +
  //                     (0.1 * parseFloat(player1.Reflexes)) +
  //                     (0.05 * parseFloat(player1.Tactics)) +
  //                     (0.05 * parseFloat(player1.Team_work))
  //                 )
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             } else if (player.name === player1.name && player.surname === player1.surname && player.position === "Central Defender") {

  //                 temp_for = (
  //                     ((0.1 * parseFloat(player1.Aerial_ability)) +
  //                         (0.05 * parseFloat(player1.Agility)) +
  //                         (0.05 * parseFloat(player1.Communication)) +
  //                         (0.05 * parseFloat(player1.Experience)) +
  //                         (0.1 * parseFloat(player1.Leadership)) +
  //                         (0.1 * parseFloat(player1.Marking)) +
  //                         (0.025 * parseFloat(player1.Pace)) +
  //                         (0.025 * parseFloat(player1.Passing)) +
  //                         (0.05 * parseFloat(player1.Personality)) +
  //                         (0.1 * parseFloat(player1.Positioning)) +
  //                         (0.025 * parseFloat(player1.Stamina)) +
  //                         (0.1 * parseFloat(player1.Strength)) +
  //                         (0.05 * parseFloat(player1.Tactics)) +
  //                         (0.1 * parseFloat(player1.Tackling)) +
  //                         (0.05 * parseFloat(player1.Team_work)) +
  //                         (0.025 * parseFloat(player1.Technique))))
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality,
  //                     preferred_foot: player.preferred_foot, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             }
  //             else if (player.name === player1.name && player.surname === player1.surname &&
  //                 (player.position === "Right Defender")) {

  //                 temp_for = ((0.05 * parseFloat(player1.Agility)) +
  //                     (0.05 * parseFloat(player1.Communication)) +
  //                     (0.1 * parseFloat(player1.Crossing)) +
  //                     (0.05 * parseFloat(player1.Experience)) +
  //                     (0.1 * parseFloat(player1.Going_forward)) +
  //                     (0.05 * parseFloat(player1.Leadership)) +
  //                     (0.1 * parseFloat(player1.Marking)) +
  //                     (0.1 * parseFloat(player1.Pace)) +
  //                     (0.05 * parseFloat(player1.Passing)) +
  //                     (0.05 * parseFloat(player1.Personality)) +
  //                     (0.05 * parseFloat(player1.Positioning)) +
  //                     (0.05 * parseFloat(player1.Stamina)) +
  //                     (0.05 * parseFloat(player1.Strength)) +
  //                     (0.05 * parseFloat(player1.Tactics)) +
  //                     (0.05 * parseFloat(player1.Team_work)) +
  //                     (0.05 * parseFloat(player1.Technique)))
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             } else if (player.name === player1.name && player.surname === player1.surname &&
  //                 (player.position === "Left Defender")) {

  //                 temp_for = (0.05 * parseFloat(player1.Agility)) +
  //                     (0.05 * parseFloat(player1.Communication)) +
  //                     (0.1 * parseFloat(player1.Crossing)) +
  //                     (0.05 * parseFloat(player1.Experience)) +
  //                     (0.1 * parseFloat(player1.Going_forward)) +
  //                     (0.05 * parseFloat(player1.Leadership)) +
  //                     (0.1 * parseFloat(player1.Marking)) +
  //                     (0.1 * parseFloat(player1.Pace)) +
  //                     (0.05 * parseFloat(player1.Passing)) +
  //                     (0.05 * parseFloat(player1.Personality)) +
  //                     (0.05 * parseFloat(player1.Positioning)) +
  //                     (0.05 * parseFloat(player1.Stamina)) +
  //                     (0.05 * parseFloat(player1.Strength)) +
  //                     (0.05 * parseFloat(player1.Tactics)) +
  //                     (0.05 * parseFloat(player1.Team_work)) +
  //                     (0.05 * parseFloat(player1.Technique))
  //                 console.log(temp_for)
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             }
  //             else if (player.name === player1.name && player.surname === player1.surname &&
  //                 player.position === "Midfielder") {

  //                 temp_for = ((
  //                     0.05 * parseFloat(player1.Aerial_ability) +
  //                     0.05 * parseFloat(player1.Agility) +
  //                     0.05 * parseFloat(player1.Communication) +
  //                     0.05 * parseFloat(player1.Composure) +
  //                     0.05 * parseFloat(player1.Creativity) +
  //                     0.05 * parseFloat(player1.Experience) +
  //                     0.1 * parseFloat(player1.Leadership) +
  //                     0.05 * parseFloat(player1.Marking) +
  //                     0.05 * parseFloat(player1.Pace) +
  //                     0.05 * parseFloat(player1.Passing) +
  //                     0.05 * parseFloat(player1.Personality) +
  //                     0.05 * parseFloat(player1.Positioning) +
  //                     0.05 * parseFloat(player1.Shots) +
  //                     0.1 * parseFloat(player1.Stamina) +
  //                     0.05 * parseFloat(player1.Strength) +
  //                     0.05 * parseFloat(player1.Tactics) +
  //                     0.05 * parseFloat(player1.Team_work) +
  //                     0.05 * parseFloat(player1.Technique)))
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             }

  //             else if (player.name === player1.name && player.surname === player1.surname &&
  //                 player.position === "Attacking Midfielder center") {

  //                 temp_for = ((
  //                     0.1 * parseFloat(player1.Through_balls) +
  //                     0.05 * parseFloat(player1.Agility) +
  //                     0.05 * parseFloat(player1.Communication) +
  //                     0.05 * parseFloat(player1.Composure) +
  //                     0.1 * parseFloat(player1.Dribbling) +
  //                     0.05 * parseFloat(player1.Experience) +
  //                     0.05 * parseFloat(player1.Finishing) +
  //                     0.05 * parseFloat(player1.Leadership) +
  //                     0.05 * parseFloat(player1.Pace) +
  //                     0.05 * parseFloat(player1.Passing) +
  //                     0.05 * parseFloat(player1.Personality) +
  //                     0.05 * parseFloat(player1.Crossing) +
  //                     0.05 * parseFloat(player1.Shots) +
  //                     0.05 * parseFloat(player1.Stamina) +
  //                     0.05 * parseFloat(player1.Strength) +
  //                     0.05 * parseFloat(player1.Tactics) +
  //                     0.05 * parseFloat(player1.Team_work) +
  //                     0.05 * parseFloat(player1.Technique)))
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             }
  //             else if (player.name === player1.name && player.surname === player1.surname &&
  //                 (player.position === "Attacking Midfielder Right" || player.position === "Attacking Midfielder Left")) {

  //                 temp_for = ((
  //                     0.1 * parseFloat(player1.One_on_ones) +
  //                     0.05 * parseFloat(player1.Agility) +
  //                     0.05 * parseFloat(player1.Communication) +
  //                     0.05 * parseFloat(player1.Composure) +
  //                     0.1 * parseFloat(player1.Dribbling) +
  //                     0.05 * parseFloat(player1.Experience) +
  //                     0.05 * parseFloat(player1.Finishing) +
  //                     0.05 * parseFloat(player1.Leadership) +
  //                     0.05 * parseFloat(player1.Pace) +
  //                     0.05 * parseFloat(player1.Aerial_ability) +
  //                     0.05 * parseFloat(player1.Personality) +
  //                     0.05 * parseFloat(player1.Crossing) +
  //                     0.05 * parseFloat(player1.Shots) +
  //                     0.05 * parseFloat(player1.Stamina) +
  //                     0.05 * parseFloat(player1.Strength) +
  //                     0.05 * parseFloat(player1.Tactics) +
  //                     0.05 * parseFloat(player1.Team_work) +
  //                     0.05 * parseFloat(player1.Technique)))
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             }
  //             else if (player.name === player1.name && player.surname === player1.surname &&
  //                 player.position === "Forward") {

  //                 temp_for = ((
  //                     0.05 * parseFloat(player1.Aerial_ability) +
  //                     0.05 * parseFloat(player1.Agility) +
  //                     0.05 * parseFloat(player1.Communication) +
  //                     0.05 * parseFloat(player1.Composure) +
  //                     0.05 * parseFloat(player1.Dribbling) +
  //                     0.05 * parseFloat(player1.Experience) +
  //                     0.1 * parseFloat(player1.Finishing) +
  //                     0.05 * parseFloat(player1.Leadership) +
  //                     0.05 * parseFloat(player1.Pace) +
  //                     0.05 * parseFloat(player1.Passing) +
  //                     0.05 * parseFloat(player1.Personality) +
  //                     0.1 * parseFloat(player1.Positioning) +
  //                     0.05 * parseFloat(player1.Shots) +
  //                     0.05 * parseFloat(player1.Stamina) +
  //                     0.05 * parseFloat(player1.Strength) +
  //                     0.05 * parseFloat(player1.Tactics) +
  //                     0.05 * parseFloat(player1.Team_work) +
  //                     0.05 * parseFloat(player1.Technique)))
  //                 // AVG_Forward.push(player_rating.surname, parseFloat(temp_FOR));
  //                 AVG_All.push({
  //                     name: player.name, surname: player.surname, nationality: player.nationality, birthdate: player.birthdate,
  //                     weight: player.weight, height: player.height, rating: temp_for
  //                 })

  //                 return player;
  //             }
  //         })
  //         setRatings(AVG_All)

  //     })
  //     console.log(AVG_All)
  // }

  const formatRating = (rating) =>{
    if(rating){
      return parseFloat(rating*10).toFixed(2);
    }else{
      return 0.0;
    }
   
  }

  const functionEdit = (Player) => {
    setPlayer(Player);
    setOpenModalEditPlayer(true);
    console.log(Player);
  };

  const playerToBeRemoved = (Player) => {
    setPlayer(Player);
    setRemovePlayerBtn(true);
  };

  const ProductTable = (props) => {
    console.log(props);
    const { arrayPlayers, requestSort, sortConfig } =
      useSortableData(filteredPersons);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#</th> */}
            <th
              scope="col"
              onClick={() => requestSort("index")}
              className={getClassNamesFor("index")}
            >
              #
            </th>
            <th
              scope="col"
              onClick={() => requestSort("name")}
              className={getClassNamesFor("name")}
            >
              Name
            </th>
            <th
              scope="col"
              onClick={() => requestSort("surname")}
              className={getClassNamesFor("surname")}
            >
              Surname
            </th>
            <th
              scope="col"
              onClick={() => requestSort("nationality")}
              className={getClassNamesFor("nationality")}
            >
              Nationality
            </th>
            <th
              scope="col"
              onClick={() => requestSort("position")}
              className={getClassNamesFor("position")}
            >
              Position
            </th>
            <th
              scope="col"
              onClick={() => requestSort("preferred_foot")}
              className={getClassNamesFor("preferred_foot")}
            >
              Foot
            </th>
            <th
              scope="col"
              onClick={() => requestSort("birthdate")}
              className={getClassNamesFor("birthdate")}
            >
              BirthDate
            </th>
            <th
              scope="col"
              onClick={() => requestSort("height")}
              className={getClassNamesFor("height")}
            >
              Height(cm)
            </th>
            <th
              scope="col"
              onClick={() => requestSort("weight")}
              className={getClassNamesFor("weight")}
            >
              Weight(Kg)
            </th>
            <th
              scope="col"
              onClick={() => requestSort("rating")}
              className={getClassNamesFor("rating")}
            >
              Rating
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {arrayPlayers.map((player, index) => (
            <tr key={player.id}>
              <td>{index + 1}</td>
              <td
                style={{
                  color: "#004d00",
                }}
              >
                {player.name}
              </td>
              <td
                style={{
                  color: "#004d00",
                }}
              >
                {player.surname}
              </td>
              <td>{player.nationality}</td>
              <td>{player.position}</td>
              <td>{player.preferred_foot}</td>
              <td>{formatDate(player.birthdate)}</td>
              <td>{player.height}</td>
              <td>{player.weight}</td>
              <td className="ratingColor">{formatRating(player?.rating)}</td>
              <td className="action_buttons">
                <button
                  className="edit_btn"
                  onClick={() => functionEdit(player)}
                >
                  {" "}
                  Edit{" "}
                </button>
                <button
                  className="rating_btn"
                  onClick={() => chooseModal(player)}
                >
                  {" "}
                  Rating{" "}
                </button>
                <button
                  className="delete_btn"
                  onClick={() => playerToBeRemoved(player)}
                >
                  {" "}
                  Remove{" "}
                </button>
                {removePlayerBtn && (
                  <CustomPopup
                    onClose={
                      (popupCloseHandler,
                      () => setRemovePlayerBtn(!removePlayerBtn))
                    }
                    show={removePlayerBtn}
                  >
                    <div>
                      Are you sure you want to remove {Player.surname} from your
                      team
                    </div>
                  </CustomPopup>
                )}
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
    if (!openModalInjured && !openModalPlayerRating && !openModalEditPlayer) {
      if (arrayPlayers.length > 25) {
        setmaxLimit(true);
      } else {
        setOpenModalPlayer(true);
        console.log(maxLimit);
      }
    }
  };

  const openInjuries = () => {
    if (!openModalPlayer && !openModalPlayerRating && !openModalEditPlayer) {
      setOpenModalInjured(true);
    }
  };

  const releasePlayer = async () => {
    await axios
      .put(
        `http://localhost:8080/players/${Player._id}`,
        { team: {} },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setRemovePlayerBtn(!removePlayerBtn);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleClose = () => {
    setShow(false);
  };

  const handleClose1 = () => {
    setShowDecline(false);
  };

  return (
    <>
      {maxLimit && (
        <CustomPopup
          onClose={(popupCloseHandler, () => setmaxLimit(!maxLimit))}
          show={maxLimit}
        >
          <div className="MaxPlayerLimit">
            You can't have more than 25 players in your team!
          </div>
        </CustomPopup>
      )}

      {!maxLimit && (
        <div class="container-fluid">
          {checkArrayLength}

          <div className="col-12 space"></div>
          <div className="row bar">
            <div className="col-2 players">Players</div>
            <div className="col-2 list_pl">
              <button className="btn existing_players">
                <a className="alink" href="/allplayers">
                  All Players
                </a>
              </button>
            </div>
            <div className=" col-2 INJ">
              <button className="btn_Inj" onClick={openInjuries}>
                Injuries
              </button>
            </div>
            <div className=" col-2 Add">
              <button className="btn" onClick={maxPlayers}>
                Add Player
              </button>
            </div>
          </div>

          {!havePlayers && (
            <div className="row">
              <div className="offset-3 col-6 notplayers">
                You don't have any players yet!
              </div>
            </div>
          )}

          {removePlayerBtn && (
            <CustomPopup
              onClose={
                (popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn))
              }
              show={removePlayerBtn}
            >
              <div>
                Do you want to remove{" "}
                <span className="RemovePlayerSurname">
                  {Player.name} {Player.surname}{" "}
                </span>
                from your team ?
              </div>
              <div className="offset-5 col-3">
                <button onClick={releasePlayer} className="YesBtnPopUp">
                  Yes
                </button>
                <button
                  className="NoBtnPopUp"
                  onClick={
                    (popupCloseHandler,
                    () => setRemovePlayerBtn(!removePlayerBtn))
                  }
                >
                  No
                </button>
              </div>
            </CustomPopup>
          )}

          {(isOpen || openModalPlayer) && (
            <ModalPlayer
              isOpen={isOpen}
              closeModalPlayer={setOpenModalPlayer}
            />
          )}
          {openModalInjured && (
            <ModalInjured players={playersArray} closeModalInjured={setOpenModalInjured} />
          )}
          {openModalPlayerRating && (
            <ModalPlayerRating
              OpenModalGoalkeeper={OpenModalGoalkeeper}
              OpenModalCentralDefender={OpenModalCentralDefender}
              OpenModalWideDefender={OpenModalWideDefender}
              OpenModalMidfielder={OpenModalMidfielder}
              OpenModalAttackingMidfielderWide={
                OpenModalAttackingMidfielderWide
              }
              OpenModalAttackingMidfielderCenter={
                OpenModalAttackingMidfielderCenter
              }
              OpenModalForward={OpenModalForward}
              closeModalPlayerRating={setOpenModalPlayerRating}
              player={Player}
              handeChangeCallback={handleChangeParent}
            />
          )}

          {openModalEditPlayer && (
            <ModalEditPlayer
              player={Player}
              closeModalEditPlayer={setOpenModalEditPlayer}
            />
          )}

          {havePlayers && (
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
          )}

          {!openModalPlayer &&
            !openModalInjured &&
            !openModalPlayerRating &&
            !openModalEditPlayer &&
            !removePlayerBtn &&
            havePlayers && <ProductTable props={filteredPersons} />}
        </div>
      )}

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="playerAccept">
            Your request to sign Giorgos Stratakis has been accepted!
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
      <Modal show={showDecline} onHide={handleClose1} className="modal">
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="playerReject">
            Your request to sign Giorgos Stratakis has been rejected!
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};
