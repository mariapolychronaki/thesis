import React from "react";
import "../../assets/Style/Injuries.css";
import "react-bootstrap";
import { useState, useEffect } from "react";
import { arrayPlayers, arrayInjured } from "../../Constants/Constants";
import axios from "axios";

const ModalAddInjuredPlayer = ({
  closeModalAddInjuredPlayer,
  healthyPlayers,
  closeModalInjured,
  players,
}) => {
  console.log(healthyPlayers);

  const [player, setplayer] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const injuredPlayers = [];
  const [healthyplayers, setHealthplayers] = useState(healthyPlayers);
  const [tempPlayers, setTempPlayers] = useState([]);
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

  const createInjury = async (player) => {
    await axios
      .post(
        `http://localhost:8080/injury`,
        { name: player.name, surname: player.surname, player_id: player._id },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setHealthplayers(
          healthyplayers.filter((item) => {
            return item._id !== player._id;
          })
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fixplayer = (player) => {
    setplayer(player);
    console.log(player);
    createInjury(player);
  };

  
  console.log(healthyplayers);

  return (
    <>
      <div className="modalBackground AddPlayerInj">
        <div className="modalContainer AddPlayerInjured">
          <div className="col-12 ">
            <button
              className="x_injured"
              onClick={() => closeModalAddInjuredPlayer(false)}
            >
              X
            </button>
          </div>
          <div className="col-12 title_Injured">Players</div>

          <div className="modalbody">
            <table className="table_injured_ADD">
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
                {healthyplayers.map((player, index) => (
                  <tr key={player.id}>
                    <td className="tr_injured">{index + 1}</td>
                    <td className="tr_injured">{player?.name}</td>
                    <td className="tr_injured">{player?.surname}</td>

                    <td className="action_buttons tr_injured">
                      <button
                        className="edit_btn_inj"
                        onClick={() => fixplayer(player)}
                      >
                        {" "}
                        Add{" "}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="footer">
            <div className="col-12 btns">
              <div className="offset-9 col-2">
                <button
                  className="confirm_button_injured"
                  onClick={() => closeModalAddInjuredPlayer(false)}
                >
                  {" "}
                  Confirm{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAddInjuredPlayer;
