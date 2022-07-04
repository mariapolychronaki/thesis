import React from "react";
import "../assets/Style/Pages.css";
import { useState, useRef, useEffect, useCallback } from "react";
import ModalMatch from "../components/Modal/ModalMatch";
import { ArrowRight } from "react-bootstrap-icons";
import { ArrowLeft } from "react-bootstrap-icons";
import { totalMatchRatings } from "../Constants/Constants";
import { useSelector } from "react-redux";
import axios from "axios";

export const Matches = () => {
  const userId = useSelector((state) => state.user.userId);
  const [teamId, setTeamId] = useState("");
  const [playersArray, setPlayersArray] = useState([]);
  const [openModalMatch, setOpenModalMatch] = useState(false);

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
        fetchPlayers(res.data[0]._id);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getPlayerTraining = async (teamId) => {
    console.log(teamId);
    await axios
      .get(
        `http://localhost:8080/gameRating/team/${teamId}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        console.log(playersArray)
        //setPlayersArray(res.data);
        /*
        let updatedList = playersArray.map((item) => {
          if (item._id == playerId) {
            return { ...item, trainings: res.data }; //gets everything that was already in item, and updates "done"
          }
          return item; // else return unmodified item
        });
        setPlayersArray(updatedList);*/

        res.data.map((rating) => {
          const index = playersArray.findIndex(
            (player) => player._id === rating.player_id
          );

          console.log(index);
          if (index != undefined) {
            let newArr = [...playersArray]; // copying the old datas array
            if (newArr[index].matches) {
              newArr[index].matches = [...newArr[index].matches, rating];
            } else {
              newArr[index].matches = [];
              newArr[index].matches = [...newArr[index].matches, rating];
            } // replace e.target.value with whatever you want to change it to
            console.log(newArr);
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
    //getPlayerTraining(teamId)
    fetchTeam();
  }, [userId]);

  useEffect(() => {
    getPlayerTraining(teamId);
  }, [teamId]);

  useEffect(() => {
    playersArray.map((player) =>{
      player.matches=[];
    })
    getPlayerTraining(teamId);
  },[openModalMatch])


  const ref = useRef(null);

  const scroll = (scrollOffset) => {
    ref.current.scrollLeft += scrollOffset;
  };
  return (
    <div class="container-fluid">
      <div className="col-12 space"></div>
      <div className="row bar">
        <div className="col-2 players">Matches</div>
        <div className="offset-6 col-2 Matches"></div>
        <div className=" col-2 Add">
          <button className="btn" onClick={() => setOpenModalMatch(true)}>
            Add Match
          </button>
        </div>
      </div>
      {openModalMatch && <ModalMatch players={playersArray} teamId={teamId} closeModalMatch={setOpenModalMatch} />}

      <div className="table_container1" ref={ref}>
        {/* {!openModalMatch && <div className='row Scroll'>
                    <button className='offset-1 col-1 scrollBtnLeft' onClick={() => scroll(-20)}> <ArrowLeft /> </button>

                    <button className='offset-10 col-1 scrollBtnRight' onClick={() => scroll(+20)}>
                        <ArrowRight />
                    </button>

                </div>} */}
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Surname</th>
              {totalMatchRatings[0].matches.map((player, index) => (
                <th scope="col">Match{index + 1}</th>
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
                {player?.matches &&
                  player?.matches.map((player1) => <td>{player1.rating}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
