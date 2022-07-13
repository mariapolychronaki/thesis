import React, { useEffect, useCallback } from "react";
import "../assets/Style/Pages.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import axios from "axios";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ModalTraining from "../components/Modal/ModalTraining";
import { useState, useRef } from "react";
import ModalEveryPlayerRating from "../components/Modal/ModalEveryTrainingPlayerRating";
import { ArrowRight } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";
import {
  arrayPlayers,
  arrayplayersRating,
  arrayPlayerTrainingRating1,
  arrayPlayerTrainingRating2,
  totalTrainingRatings,
} from "../Constants/Constants";
import {
  arrayPlayerTrainingRating3,
  arrayPlayerTrainingRating4,
  arrayPlayerTrainingRating5,
} from "../Constants/Constants";
import {
  arrayPlayerMatchRating1,
  arrayPlayerMatchRating2,
} from "../Constants/Constants";

const trainings = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export const Training = () => {
  const userId = useSelector((state) => state.user.userId);
  const [teamId, setTeamId] = useState("");
  const [playersArray, setPlayersArray] = useState([]);
  const [openModalTraining, setOpenModalTraining] = useState(false);
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
        setTeamId(teamId);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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
        fetchPlayers(res.data._id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getPlayerTraining = async (teamId) => {
    await axios
      .get(
        `http://localhost:8080/training/team/${teamId}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        //setPlayersArray(res.data);
        /*
        let updatedList = playersArray.map((item) => {
          if (item._id == playerId) {
            return { ...item, trainings: res.data }; //gets everything that was already in item, and updates "done"
          }
          return item; // else return unmodified item
        });
        setPlayersArray(updatedList);*/

        res.data.map((training) => {
          const index = playersArray.findIndex(
            (player) => player._id == training.player_id
          );

          console.log(index);
          if (index != undefined && index>=0) {
            let newArr = [...playersArray]; // copying the old datas array
            if (newArr[index].trainings) {
              newArr[index].trainings = [...newArr[index].trainings, training];
            } else {
              newArr[index].trainings = [];
              newArr[index].trainings = [...newArr[index].trainings, training];
            } // replace e.target.value with whatever you want to change it to
            console.log(newArr)
            setPlayersArray(newArr);
          }
          
        });
        console.log(playersArray);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getPlayerTraining(teamId);
  }, [teamId]);

  useEffect(() => {
    playersArray.map((player) =>{
      player.trainings=[];
    })
    getPlayerTraining(teamId);
  },[openModalTraining])

  useEffect(() => {
    //getPlayerTraining(teamId)
    fetchTeam();
  }, [userId]);

  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  // const ArrayT =()=>{
  //     AVGRating_training = parseFloat( (parseFloat(arrayPlayerTrainingRating1[1])+parseFloat(arrayPlayerTrainingRating1[2]))/2);
  //     console.log(AVGRating_training);
  //     return AVGRating_training;
  // }
  const calculate = (player) => {
    return (parseFloat(player.rating) + parseFloat(player.behavior)) / 2;
  };

  console.log(playersArray);
  return (
    <div class="container-fluid">
      <div className="col-12 space"></div>
      <div className="row bar">
        <div className="col-2 players">Sessions</div>
        <div className="offset-6 col-2 TRAINING"></div>
        <div className=" col-2 Add">
          <button className="btn" onClick={() => setOpenModalTraining(true)}>
            Add Session
          </button>
        </div>
      </div>

      {/* <ModalEveryTrainingPlayerRating /> */}

      {openModalTraining && (
        <ModalTraining players={playersArray} teamId={teamId} closeModalTraining={setOpenModalTraining} />
      )}

      <div className="table_container1" ref={ref}>
        {/* {!openModalTraining && <div className='row Scroll'>
                    <button className='offset-1 col-1 scrollBtnLeft' onClick={() => scroll(-20)}> <ArrowLeft /> </button>

                    <button className='offset-10 col-1 scrollBtnRight' onClick={() => scroll(+20)}>
                        <ArrowRight />
                    </button>

                </div>} */}
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              {trainings.map((player, index) => (
                <th scope="col">Tr{index}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {playersArray.map((player, index) => (
              <tr>
                <td>{index + 1}</td>
                <td
                  style={{
                    color: "#004d00",
                  }}
                >
                  {player?.name}
                </td>
                <td
                  style={{
                    color: "#004d00",
                  }}
                >
                  {player?.surname}
                </td>
                {player?.trainings &&
                  player?.trainings.map((player1, index) => (
                    <td>{calculate(player1)}</td>
                  ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
