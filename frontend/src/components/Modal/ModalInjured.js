import React, { useEffect } from "react";
import "../../assets/Style/Injuries.css";
import "react-bootstrap";
import ModalGoalkeeper from "./ModalGoalkeeper";
import { useState } from "react";
import axios from "axios";
import ModalAddInjuredPlayer from "./ModalAddInjuredPlayer";
import { arrayInjured } from "../../Constants/Constants";

const ModalInjured = ({ closeModalInjured, players }) => {
  const [arrayPlayers, setArrayPlayers] = useState([]);

  const [startDate, setStartDate] = useState(new Date());
  const [openModalAddInjuredPlayer, setOpenModalAddInjuredPlayer] =
    useState(false);
  const [player, setplayer] = useState();
  const [flag, setFlag] = useState(false);
  const [injuries, setInjuries] = useState([]);
  const [tempPlayers, setTempPlayers] = useState([]);
  const [tempPlayers1, setTempPlayers1] = useState([]);
  const [healthyPlayers, setHealthPlayers] = useState([]);

  const curePlayer = async (player) => {
    await axios
      .delete(
        `http://localhost:8080/injury/${player._id}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setArrayPlayers(
          arrayPlayers.filter((item) => {
            return item._id !== player._id;
          })
        );

        const temp = players.filter((item) => {
          return item._id === player.player_id;
        })[0];
        console.log(temp);

        healthyPlayers.push(temp);

      })
      .catch((e) => {
        console.log(e);
      });
  };

  const removePlayer = (player) => {
    //setplayer(player);
    console.log(player);
    curePlayer(player);
  };

  useEffect(() => {
    fetchIjuries();
  }, [players,openModalAddInjuredPlayer]);

  const fetchIjuries = async () => {
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
        setInjuries(res.data);
        const myArrayFiltered1 = res.data.filter((injury) => {
          return players.some((player) => {
            return player._id === injury.player_id;
          });
        });
        setArrayPlayers(myArrayFiltered1);
        const myArrayFiltered = players.filter((player) => {
          return res.data.every((injury) => {
            return injury.player_id != player._id;
          });
        });
        console.log(myArrayFiltered);
        setHealthPlayers(myArrayFiltered);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(arrayPlayers);
  console.log(players);

  return (
    <div className="modalBackground_injured">
      <div className="modalContainer_Injured ">
        <div className="col-12 x-button_injured">
          <button
            className="x_injured"
            onClick={() => closeModalInjured(false)}
          >
            X
          </button>
        </div>
        <div className="col-12 title_Injured">Injuries</div>
        <button
          className="offset-7 col-2 button_Add_injured"
          onClick={() => setOpenModalAddInjuredPlayer(true)}
        >
          {" "}
          Add player{" "}
        </button>
        {openModalAddInjuredPlayer && (
          <ModalAddInjuredPlayer
            healthyPlayers={healthyPlayers}
            players={players}
            closeModalAddInjuredPlayer={setOpenModalAddInjuredPlayer}
          />
        )}

        <div className="modalbody_Injured">
          <table className="table_injured">
            <thead>
              <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Surname</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {arrayPlayers.map((player, index) => (
                <tr key={player.id}>
                  <td className="tr_injured">{index + 1}</td>
                  <td className="tr_injured">{player.name}</td>
                  <td className="tr_injured">{player.surname}</td>

                  <td className="action_buttons tr_injured">
                    <button
                      className="edit_btn"
                      onClick={() => removePlayer(player)}
                    >
                      {" "}
                      Cured{" "}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="footer">
          <div className="col-12 btns">
            <div className="offset-9 col-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalInjured;
