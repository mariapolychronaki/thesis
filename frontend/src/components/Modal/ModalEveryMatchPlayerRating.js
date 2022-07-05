import React from "react";
import Dropdown_rating from "../Dropdowns/Dropdown_rating";
import "../../assets/Style/EveryPlayerRating.css";
import "react-bootstrap";
import { useState,useEffect } from "react";
import { arrayPlayers, arrayInjured } from "../../Constants/Constants";
import axios from "axios";

const ModalEveryMatchPlayerRating = ({
  closeModalMatchEachPlayer,
  players,
  fetchRatings,
}) => {
  const [data, setdata] = useState({});
  const [injuredPlayers, setInjuredPlayers] = useState([]);
  const [healthyplayers, setHealthPlayers] = useState([]);

  const positions = [
    "Forward",
    "Goalkeeper",
    "Central Defender",
    "Right Defender",
    "Left Defender",
    "Midfielder",
    "Attacking Midfielder center",
    "Attacking Midfielder Right",
    "Attacking Midfielder Left",
  ];

  const initializePlayers = () => {
    var temp = {};
    players.map((player) => {
      console.log(player);
      temp[`${player._id}`] = { ["rating"]: "0" };
      console.log(temp);
    });
    return temp;
  };
  const [attributes, setAttributes] = useState(initializePlayers());
  const setTade = (name, value) => {
    console.log(name,value)
    setAttributes({ ...attributes, [name]: value });
  };

  const handleChangeParent = (data, name, playerId) => {
    setAttributes({
      ...attributes,
      [`${playerId}`]: playerId,
    });
    attributes[`${playerId}`] = {
      ...attributes[`${playerId}`],
      [`${name}`]: data,
    };
    setAttributes(attributes);
    fetchRatings(attributes);
    console.log([`${playerId}`]);
    console.log([`${name}`]);
  };
  console.log(attributes);

  const fetchInjured = async () => {
    await axios
      .get(
        `http://localhost:8080/injury/`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        //setInjuries(res.data);
        const myArrayFiltered1 = res.data.filter((injury) => {
          return players.some((player) => {
            return player._id === injury.player_id;
          });
        });
        setInjuredPlayers(myArrayFiltered1);
        const myArrayFiltered = players.filter((player) => {
          return res.data.every((injury) => {
            return injury.player_id != player._id;
          });
        });
        console.log(myArrayFiltered);
        console.log(myArrayFiltered1);
        setHealthPlayers(myArrayFiltered);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchInjured();
    //findHealthyplayers();
  }, [players]);

  const findHealthyplayers = () => {
    arrayPlayers.find((player) => {
      var flag = false;
      const temp = arrayInjured.find((player1) => {
        if (
          player.name === player1.name &&
          player.surname === player1.surname
        ) {
          console.log(player.name);
          console.log(player.surname);
          flag = true;
        }

        // else {
        //     healthyplayers.push({ name: player1.name, surname: player1.surname })
        //     console.log(player.name)
        // }
      });
      if (flag === true) {
        injuredPlayers.push({ name: player.name, surname: player.surname });
        console.log(player.name);
        console.log(player.surname);
      }
    });

    arrayPlayers.find((player) => {
      var flag = false;
      const temp = arrayInjured.find((player1) => {
        if (
          player.name === player1.name &&
          player.surname === player1.surname
        ) {
          console.log(player.name);
          console.log(player.surname);
          flag = true;
        }

        // else {
        //     healthyplayers.push({ name: player1.name, surname: player1.surname })
        //     console.log(player.name)
        // }
      });
      if (flag === false) {
        healthyplayers.push({ name: player.name, surname: player.surname });
        console.log(player.name);
        console.log(player.surname);
      }
    });
    healthyplayers.sort((a, b) => {
      return positions.indexOf(a.position) - positions.indexOf(b.position);
    });
  };

  return (
    <>
      <div className="row everyPlayerRating">
        {injuredPlayers.map((player, index) => (
          <div className="col-3 IndividualPlayer">
            <div className="flex">
              <span className="col-12 title2 surname">
                <span>{player.surname}</span>
              </span>
            </div>
            <form>
              <label>Rating</label>
              <div>
                <Dropdown_rating
                  name="rating"
                  setTade={setTade}
                  playerId={player.player_id}
                  handleChangeCallback={handleChangeParent}
                />
              </div>
            </form>
          </div>
        ))}

        {healthyplayers.map((player, index) => (
          <div className="col-3 IndividualPlayer">
            <div className="flex">
              <span className="col-12 title2 surnameInjured">
                <span>{player.surname}</span>
              </span>
            </div>
            <form>
              <label>Rating</label>
              <div>
                <Dropdown_rating
                  name="rating"
                  setTade={setTade}
                  playerId={player._id}
                  handleChangeCallback={handleChangeParent}
                />
              </div>
            </form>
          </div>
        ))}
      </div>
    </>
  );
};

export default ModalEveryMatchPlayerRating;
