import React, { useEffect, useCallback } from "react";
import "../assets/Style/Pages.css";
import "../assets/Style/AllPlayers.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ModalPlayer from "../components/Modal/ModalPlayer";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalInjured from "../components/Modal/ModalInjured";
import ModalGoalkeeper from "../components/Modal/ModalGoalkeeper";
import ModalPlayerRating from "../components/Modal/ModalPlayerRating";
import { arrayAllPlayers } from "../Constants/Constants";
import ModalEditPlayer from "../components/Modal/ModalEditPlayer";
import CustomPopup from "./Admin/PopUp";
import { arrayPlayers } from "../Constants/Constants";
import axios from "axios";

export const AllPlayers = () => {
  const [searchField, setSearchField] = useState("");
  const [team, setTeam] = useState({});
  const userId = useSelector((state) => state.user.userId);

  const coach_user = useSelector((state) => state.user.user);

  console.log(coach_user)

  const [enquiry, setEnquiry] = useState("Enquiry");
  const [buttonName, setButtonName] = useState("Claim");
  const [buttonClass, setButtonClass] = useState("enquiry_btn");
  const [maxLimit, setmaxLimit] = useState(false);
  const [temp_player, setTempPlayer] = useState({});

  const coach = useSelector((state) => state.coach);

  const positions = [
    "Goalkeeper",
    "Central Defender",
    "Right Defender",
    "Left Defender",
    "Midfielder",
    "Attacking Midfielder center",
    "Attacking Midfielder Right",
    "Attacking Midfielder Left",
    "Forward",
  ];
  const [playersArray, setPlayersArray] = useState([]);

  const [filteredPersons, setfilteredPersons] = useState([]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  console.log(userId);

  const fetchTeam = async () => {
    console.log(coach_user);
    await axios
      .get(
        `http://localhost:8080/team/coach/${coach_user._id}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTeam(res.data[0]);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchPlayers = useCallback(async () => {
    await axios
      .get(
        "http://localhost:8080/players/free-agents",
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
      });
  }, []);

  useEffect(() => {
    fetchPlayers();
  }, [fetchPlayers]);

  useEffect(() => {
    setfilteredPersons(
      playersArray.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchField.toLowerCase()) ||
          person.surname.toLowerCase().includes(searchField.toLowerCase())
        );
      })
    );
  }, [searchField]);

  useEffect(() => {
    fetchTeam();
  },[coach_user,userId])

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
            array_a = myString_a.split("/");
            array_b = myString_b.split("/");

            //from array concatenate into new date string format: "DD.MM.YYYY"
            var newDate_a = new Date(array_a[2], array_a[1], array_a[0]);
            var newDate_b = new Date(array_b[2], array_b[1], array_b[0]);

            // console.log(newDate_a);
            // console.log(newDate_b);

            if (newDate_a < newDate_b) {
              console.log(a[sortConfig.key], b);
              return sortConfig.direction === "ascending" ? -1 : 1;
            }
            if (newDate_a > newDate_b) {
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

  const createEnquiry = async (player) => {
    await axios
      .post(
        "http://localhost:8080/enquiry",
        {
          coach: {
            coach_id: coach_user._id,
            name: coach_user.name,
            surname: coach_user.surname,
          },
          player: {
            player_id: player._id,
            name: player.name,
            surname: player.surname,
          },
          team: player.team,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const Pending_Btn = (e) => {
    maxPlayers();

    console.log(e);

    const button = document.getElementById(e._id);

    if (e.team === undefined || e.team.team_id != team._id) {
      button.value = "Pending";
      button.innerHTML = "Pending";
      button.className = "Pending";
      button.disabled = true;
      // console.log(e.target);
      createEnquiry(e);
    } else {
      button.value = "Claim";
      button.innerHTML = "Claim";
      button.className = "enquiry_btn";
    }
  };

  const formatDate = (date) => {
    const tempDate = new Date(date);
    return tempDate.toLocaleDateString();
  };

  console.log(team, playersArray);

  const ProductTable = (props) => {
    const { arrayPlayers, requestSort, sortConfig } =
      useSortableData(filteredPersons);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };

    return (
      <table className="table allPlayers">
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
              className="weight"
            >
              Weight(Kg)
            </th>
            <th
              scope="col"
              onClick={() => requestSort("team")}
              className={getClassNamesFor("team")}
            >
              Team
            </th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
          {arrayPlayers.map((player, index) => (
            <tr key={player.ssn}>
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
              <td
                style={{
                  color: "rgb(0, 77, 0)",
                }}
              >
                {player.position}
              </td>
              <td>{player.preferred_foot}</td>
              <td>{formatDate(player.birthdate)}</td>
              <td>{player.height}</td>
              <td className="weight">{player.weight}</td>
              <td
                style={{
                  color: "rgb(0, 77, 0)",
                }}
              >
                {player.team ? player?.team?.name : "Free Agent"}
              </td>
              <td className="action_buttons">
                <button
                  className="enquiry_btn"
                  name={player.ssn}
                  id={player._id}
                  value={player}
                  onClick={() => {
                    Pending_Btn(player);
                  }}
                  disabled={player?.team?.team_id == team._id}
                >
                  {" "}
                  Claim{" "}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  const popupCloseHandler = (e) => {
    setmaxLimit(e);
  };

  const [player, setplayer] = useState();

  const maxPlayers = (player) => {
    if (arrayPlayers.length > 25) {
      setmaxLimit(true);
    } else {
      setplayer(player);
      console.log(player);
      console.log(maxLimit);
    }
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
          <div className="col-12 space"></div>

          <div className="row bar">
            <div className="col-2 players">Players</div>

            <div className="offset-8 col-2 MyTeam">
              <button className="btn Myteam">
                <a className="alink" href="/players">
                  My Team
                </a>
              </button>
            </div>

            <div className="col-3 search"></div>
          </div>

          <section className="garamond">
            <div className="pa3">
              <div className="pad">
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
        </div>
      )}
    </>
  );
};
