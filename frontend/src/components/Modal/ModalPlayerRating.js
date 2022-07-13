import React, { useEffect, useState } from "react";
import "../../assets/Style/EditPlayer.css";
import "react-bootstrap";
import "../../assets/Style/ModalPositions.css";
import Dropdown_rating from "../Dropdowns/Dropdown_rating";
import Dropdown_nationality from "../Dropdowns/Dropdown_nationality";
import { arrayplayersRating } from "../../Constants/Constants";
import axios from "axios";

const ModalPlayerRating = ({
  closeModalPlayerRating,
  player,
  OpenModalGoalkeeper,
  OpenModalCentralDefender,
  OpenModalWideDefender,
  OpenModalMidfielder,
  OpenModalAttackingMidfielderCenter,
  OpenModalAttackingMidfielderWide,
  OpenModalForward,
}) => {
  console.log(player);
  const [payload, setPayload] = useState({});
  const [attributes, setAttributes] = useState({});

  const handleChangeParent = (e, name) => {
    console.log(e, name);
    setPayload({ ...payload, [name]: e });
    
  };

  console.log(payload);
  console.log(attributes);

  useEffect(() => {
    fetchRating();
  }, [player]);

  const fetchRating = async () => {
    if (player.position == "Goalkeeper") {
      await axios
        .get(
          `http://localhost:8080/goalkeeper/player/${player._id}`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setAttributes(res.data[0]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (player.position === "Central Defender") {
      await axios
        .get(
          `http://localhost:8080/central_defender/player/${player._id}`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data) {
            if (res.data.length > 0) {
              setAttributes(res.data[0]);
            }
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      player.position === "Right Defender" ||
      player.position === "Left Defender"
    ) {
      await axios
        .get(
          `http://localhost:8080/wide_defender/player/${player._id}`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setAttributes(res.data[0]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (player.position === "Midfielder") {
      await axios
        .get(
          `http://localhost:8080/midfielder/player/${player._id}`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setAttributes(res.data[0]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (
      player.position === "Attacking Midfielder Right" ||
      player.position === "Attacking Midfielder Left"
    ) {
      await axios
        .get(
          `http://localhost:8080/attacking_midfielder_wide/player/${player._id}`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setAttributes(res.data[0]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (player.position === "Attacking Midfielder Center") {
      await axios
        .get(
          `http://localhost:8080/attacking_midfielder_center/player/${player._id}`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setAttributes(res.data[0]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    } else if (player.position === "Forward") {
      await axios
        .get(
          `http://localhost:8080/forward/player/${player._id}`,
          {},
          {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          }
        )
        .then((res) => {
          console.log(res.data);
          if (res.data.length > 0) {
            setAttributes(res.data[0]);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  const updateRating = async () => {
    if (attributes._id) {
      if (player.position == "Goalkeeper") {
        await axios
          .put(`http://localhost:8080/goalkeeper/${attributes._id}`, payload, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Central Defender") {
        await axios
          .put(
            `http://localhost:8080/central_defender/${attributes._id}`,
            payload,
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (
        player.position === "Right Defender" ||
        player.position === "Left Defender"
      ) {
        await axios
          .put(
            `http://localhost:8080/wide_defender/${attributes._id}`,
            payload,
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Midfielder") {
        await axios
          .put(`http://localhost:8080/midfielder/${attributes._id}`, payload, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (
        player.position === "Attacking Midfielder Right" ||
        player.position === "Attacking Midfielder Left"
      ) {
        await axios
          .put(
            `http://localhost:8080/attacking_midfielder_wide/${attributes._id}`,
            payload,
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Attacking Midfielder Center") {
        await axios
          .put(
            `http://localhost:8080/attacking_midfielder_center/${attributes._id}`,
            payload,
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Forward") {
        await axios
          .put(`http://localhost:8080/forward/${attributes._id}`, payload, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }else{
      if (player.position == "Goalkeeper") {
        await axios
          .post(`http://localhost:8080/goalkeeper/`, {...payload ,player_id:player._id}, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Central Defender") {
        await axios
          .post(
            `http://localhost:8080/central_defender/`,
            {...payload ,player_id:player._id},
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (
        player.position === "Right Defender" ||
        player.position === "Left Defender"
      ) {
        await axios
          .post(
            `http://localhost:8080/wide_defender/`,
            {...payload ,player_id:player._id},
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Midfielder") {
        await axios
          .post(`http://localhost:8080/midfielder/`, {...payload ,player_id:player._id}, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (
        player.position === "Attacking Midfielder Right" ||
        player.position === "Attacking Midfielder Left"
      ) {
        await axios
          .post(
            `http://localhost:8080/attacking_midfielder_wide/`,
            {...payload ,player_id:player._id},
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Attacking Midfielder Center") {
        await axios
          .post(
            `http://localhost:8080/attacking_midfielder_center/`,
            {...payload ,player_id:player._id},
            {
              headers: {
                "Content-type": "application/json; charset=UTF-8",
              },
            }
          )
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      } else if (player.position === "Forward") {
        await axios
          .post(`http://localhost:8080/forward/`, {...payload ,player_id:player._id}, {
            headers: {
              "Content-type": "application/json; charset=UTF-8",
            },
          })
          .then((res) => {
            console.log(res.data);
            closeModalPlayerRating(false);
          })
          .catch((e) => {
            console.log(e);
          });
      }
    }
  };

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
  /* var temp = useState({});
  arrayplayersRating.map((player1, index) => {
    if (player.name === player1.name && player.surname === player1.surname) {
      temp = arrayplayersRating[index];
    }
  });*/

  console.log(player);

  const setTade = (name, value) => {
    console.log(name, value);
    setAttributes({ ...attributes, [name]: value });
  };

  console.log(attributes);

  return (
    <>
      {/* {chooseModal(player)} */}

      {OpenModalGoalkeeper && (
        <div className="modalBackgroundPositionPlayerRating">
          <div className="col-12 space"></div>
          <div className="modalContainerPositionPlayerRating">
            <div className="col-12 x-button">
              <button
                className="x"
                onClick={() => closeModalPlayerRating(false)}
              >
                X
              </button>
            </div>
            <div className="col-12 title">
              {player.name} {player.surname}
            </div>
            <div className="modalbodyPositionPlayerRating">
              <form>
                <div className="row goalie">
                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Personality</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="personality"
                        setTade={setTade}
                        tade={attributes.personality}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Experience</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="experience"
                        setTade={setTade}
                        tade={attributes.experience}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation ">
                      <label>Agility</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="agility"
                        setTade={setTade}
                        tade={attributes.agility}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Team work</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="team_work"
                        setTade={setTade}
                        tade={attributes.team_work}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Leadership</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="leadership"
                        setTade={setTade}
                        tade={attributes.leadership}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Reflexes</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="reflexes"
                        setTade={setTade}
                        tade={attributes.reflexes}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Communication</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="communication"
                        setTade={setTade}
                        tade={attributes.communication}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Shot stopping</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="shot-stopping"
                        setTade={setTade}
                        tade={attributes.shot_stopping}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Kicking</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="kicking"
                        setTade={setTade}
                        tade={attributes.kicking}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tactics</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tactics"
                        setTade={setTade}
                        tade={attributes.tactics}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Penalty saving</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="penalty_saving"
                        setTade={setTade}
                        tade={attributes.penalty_saving}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>One on ones</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="one_on_ones"
                        setTade={setTade}
                        tade={attributes.one_on_ones}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Rushing out</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="rushing_out"
                        setTade={setTade}
                        tade={attributes.rushing_out}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Positioning</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="positioning"
                        setTade={setTade}
                        tade={attributes.positioning}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 Buttons">
                <div className="offset-7 col-2">
                  {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                </div>
                <div className="col-2">
                  <button className="next-button" onClick={updateRating}>
                    {" "}
                    Confirm{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {OpenModalCentralDefender && (
        <div className="modalBackgroundPositionPlayerRating">
          <div className="col-12 space"></div>
          <div className="modalContainerPositionPlayerRating">
            <div className="col-12 x-button">
              <button
                className="x"
                onClick={() => closeModalPlayerRating(false)}
              >
                X
              </button>
            </div>
            <div className="col-12 title">
              {player.name} {player.surname}
            </div>
            <div className="modalbodyPositionPlayerRating">
              <form>
                <div className="row goalie">
                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Personality</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="personality"
                        setTade={setTade}
                        tade={attributes.personality}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Experience</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="experience"
                        setTade={setTade}
                        tade={attributes.experience}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation ">
                      <label>Agility</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="agility"
                        setTade={setTade}
                        tade={attributes.agility}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Team work</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="team_work"
                        setTade={setTade}
                        tade={attributes.team_work}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Leadership</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="leadership"
                        setTade={setTade}
                        tade={attributes.leadership}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tactics</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tactics"
                        setTade={setTade}
                        tade={attributes.tactics}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Communication</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="communication"
                        setTade={setTade}
                        tade={attributes.communication}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Positioning</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="positioning"
                        setTade={setTade}
                        tade={attributes.positioning}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Pace</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="pace"
                        setTade={setTade}
                        tade={attributes.pace}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Stamina</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="stamina"
                        setTade={setTade}
                        tade={attributes.stamina}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Strength</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="strength"
                        setTade={setTade}
                        tade={attributes.strength}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Technique</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="technique"
                        setTade={setTade}
                        tade={attributes.technique}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Marking </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="marking"
                        setTade={setTade}
                        tade={attributes.marking}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Passing</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="passing"
                        setTade={setTade}
                        tade={attributes.passing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Aerial Ability </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="aerial_ability"
                        setTade={setTade}
                        tade={attributes.aerial_ability}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tackling </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tackling"
                        setTade={setTade}
                        tade={attributes.tackling}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 Buttons">
                <div className="offset-7 col-2">
                  {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                </div>
                <div className="col-2">
                  <button className="next-button" onClick={updateRating}>
                    {" "}
                    Confirm{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {OpenModalWideDefender && (
        <div className="modalBackgroundPositionPlayerRating">
          <div className="col-12 space"></div>
          <div className="modalContainerPositionPlayerRating">
            <div className="col-12 x-button">
              <button
                className="x"
                onClick={() => closeModalPlayerRating(false)}
              >
                X
              </button>
            </div>
            <div className="col-12 title">
              {player.name} {player.surname}
            </div>
            <div className="modalbodyPositionPlayerRating">
              <form>
                <div className="row goalie">
                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Personality</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="personality"
                        setTade={setTade}
                        tade={attributes.personality}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Experience</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="experience"
                        setTade={setTade}
                        tade={attributes.experience}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation ">
                      <label>Agility</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="agility"
                        setTade={setTade}
                        tade={attributes.agility}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Team work</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="team_work"
                        setTade={setTade}
                        tade={attributes.team_work}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Leadership</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="leadership"
                        setTade={setTade}
                        tade={attributes.leadership}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tactics</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tactics"
                        setTade={setTade}
                        tade={attributes.tactics}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Communication</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="communication"
                        setTade={setTade}
                        tade={attributes.communication}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Positioning</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="positioning"
                        setTade={setTade}
                        tade={attributes.positioning}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Pace</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="pace"
                        setTade={setTade}
                        tade={attributes.pace}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Stamina</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="stamina"
                        setTade={setTade}
                        tade={attributes.stamina}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Strength</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="strength"
                        setTade={setTade}
                        tade={attributes.strength}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Technique</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="technique"
                        setTade={setTade}
                        tade={attributes.technique}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Marking </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="marking"
                        setTade={setTade}
                        tade={attributes.marking}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Passing</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="passing"
                        setTade={setTade}
                        tade={attributes.passing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Crossing </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="crossing"
                        setTade={setTade}
                        tade={attributes.crossing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Going forward </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="going_forward"
                        setTade={setTade}
                        tade={attributes.going_forward}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 Buttons">
                <div className="offset-7 col-2">
                  {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                </div>
                <div className="col-2">
                  <button className="next-button" onClick={updateRating}>
                    {" "}
                    Confirm{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {OpenModalMidfielder && (
        <div className="modalBackgroundPositionPlayerRating">
          <div className="col-12 space"></div>
          <div className="modalContainerPositionPlayerRating">
            <div className="col-12 x-button">
              <button
                className="x"
                onClick={() => closeModalPlayerRating(false)}
              >
                X
              </button>
            </div>
            <div className="col-12 title">
              {player.name} {player.surname}
            </div>
            <div className="modalbodyPositionPlayerRating">
              <form>
                <div className="row goalie">
                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Personality</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="personality"
                        setTade={setTade}
                        tade={attributes.personality}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Experience</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="experience"
                        setTade={setTade}
                        tade={attributes.experience}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation ">
                      <label>Agility</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="agility"
                        setTade={setTade}
                        tade={attributes.agility}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Team work</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="team_work"
                        setTade={setTade}
                        tade={attributes.team_work}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Leadership</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="leadership"
                        setTade={setTade}
                        tade={attributes.leadership}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tactics</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tactics"
                        setTade={setTade}
                        tade={attributes.tactics}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Communication</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="communication"
                        setTade={setTade}
                        tade={attributes.communication}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Positioning</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="positioning"
                        setTade={setTade}
                        tade={attributes.positioning}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Aerial ability</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="aerial_ability"
                        setTade={setTade}
                        tade={attributes.aerial_ability}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Pace</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="pace"
                        setTade={setTade}
                        tade={attributes.pace}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Strength</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="strength"
                        setTade={setTade}
                        tade={attributes.strength}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Stamina</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="stamina"
                        setTade={setTade}
                        tade={attributes.stamina}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Technique </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="technique"
                        setTade={setTade}
                        tade={attributes.technique}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Marking</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="marking"
                        setTade={setTade}
                        tade={attributes.marking}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Passing </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="passing"
                        setTade={setTade}
                        tade={attributes.passing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Creativity</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="creativity"
                        setTade={setTade}
                        tade={attributes.creativity}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Shots </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="shots"
                        setTade={setTade}
                        tade={attributes.shots}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Composure</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="composure"
                        setTade={setTade}
                        tade={attributes.composure}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 Buttons">
                <div className="offset-7 col-2">
                  {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                </div>
                <div className="col-2">
                  <button className="next-button" onClick={updateRating}>
                    {" "}
                    Confirm{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {OpenModalAttackingMidfielderCenter && (
        <div className="modalBackgroundPositionPlayerRating">
          <div className="col-12 space"></div>
          <div className="modalContainerPositionPlayerRating">
            <div className="col-12 x-button">
              <button
                className="x"
                onClick={() => closeModalPlayerRating(false)}
              >
                X
              </button>
            </div>
            <div className="col-12 title">
              {player.name} {player.surname}
            </div>
            <div className="modalbodyPositionPlayerRating">
              <form>
                <div className="row goalie">
                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Personality</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="personality"
                        setTade={setTade}
                        tade={attributes.personality}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Experience</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="experience"
                        setTade={setTade}
                        tade={attributes.experience}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation ">
                      <label>Agility</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="agility"
                        setTade={setTade}
                        tade={attributes.agility}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Team work</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="team_work"
                        setTade={setTade}
                        tade={attributes.team_work}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Leadership</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="leadership"
                        setTade={setTade}
                        tade={attributes.leadership}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tactics</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tactics"
                        setTade={setTade}
                        tade={attributes.tactics}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Communication</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="communication"
                        setTade={setTade}
                        tade={attributes.communication}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Pace</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="pace"
                        setTade={setTade}
                        tade={attributes.pace}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Strength</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="strength"
                        setTade={setTade}
                        tade={attributes.strength}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Technique</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="technique"
                        setTade={setTade}
                        tade={attributes.technique}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Passing</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="passing"
                        setTade={setTade}
                        tade={attributes.passing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Through balls</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="through_balls"
                        setTade={setTade}
                        tade={attributes.through_balls}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Dribbling </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="dribbling"
                        setTade={setTade}
                        tade={attributes.dribbling}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Finishing</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="finishing"
                        setTade={setTade}
                        tade={attributes.finishing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Shots </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="shots"
                        setTade={setTade}
                        tade={attributes.shots}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Stamina</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="stamina"
                        setTade={setTade}
                        tade={attributes.stamina}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Crossing </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="crossing"
                        setTade={setTade}
                        tade={attributes.crossing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Composure</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="composure"
                        setTade={setTade}
                        tade={attributes.composure}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 Buttons">
                <div className="offset-7 col-2">
                  {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                </div>
                <div className="col-2">
                  <button className="next-button" onClick={updateRating}>
                    {" "}
                    Confirm{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {OpenModalAttackingMidfielderWide && (
        <div className="modalBackgroundPositionPlayerRating">
          <div className="col-12 space"></div>
          <div className="modalContainerPositionPlayerRating">
            <div className="col-12 x-button">
              <button
                className="x"
                onClick={() => closeModalPlayerRating(false)}
              >
                X
              </button>
            </div>
            <div className="col-12 title">
              {player.name} {player.surname}
            </div>
            <div className="modalbodyPositionPlayerRating">
              <form>
                <div className="row goalie">
                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Personality</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="personality"
                        setTade={setTade}
                        tade={attributes.personality}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Experience</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="experience"
                        setTade={setTade}
                        tade={attributes.experience}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation ">
                      <label>Agility</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="agility"
                        setTade={setTade}
                        tade={attributes.agility}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Team work</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="team_work"
                        setTade={setTade}
                        tade={attributes.team_work}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Leadership</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="leadership"
                        setTade={setTade}
                        tade={attributes.leadership}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tactics</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tactics"
                        setTade={setTade}
                        tade={attributes.tactics}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Communication</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="communication"
                        setTade={setTade}
                        tade={attributes.communication}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Pace</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="pace"
                        setTade={setTade}
                        tade={attributes.pace}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Strength</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="strength"
                        setTade={setTade}
                        tade={attributes.strength}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Technique</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="technique"
                        setTade={setTade}
                        tade={attributes.technique}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>One on Ones</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="one_on_ones"
                        setTade={setTade}
                        tade={attributes.one_on_ones}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Dribbling</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="dribbling"
                        setTade={setTade}
                        tade={attributes.dribbling}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Crossing </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="crossing"
                        setTade={setTade}
                        tade={attributes.crossing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Aerial ability</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="aerial_ability"
                        setTade={setTade}
                        tade={attributes.aerial_ability}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Stamina </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="stamina"
                        setTade={setTade}
                        tade={attributes.stamina}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Composure</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="composure"
                        setTade={setTade}
                        tade={attributes.composure}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Shots </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="shots"
                        setTade={setTade}
                        tade={attributes.shots}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Finishing</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="finishing"
                        setTade={setTade}
                        tade={attributes.finishing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 Buttons">
                <div className="offset-7 col-2">
                  {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                </div>
                <div className="col-2">
                  <button className="next-button" onClick={updateRating}>
                    {" "}
                    Confirm{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {OpenModalForward && (
        <div className="modalBackgroundPositionPlayerRating">
          <div className="col-12 space"></div>
          <div className="modalContainerPositionPlayerRating">
            <div className="col-12 x-button">
              <button
                className="x"
                onClick={() => closeModalPlayerRating(false)}
              >
                X
              </button>
            </div>
            <div className="col-12 title">
              {player.name} {player.surname}
            </div>
            <div className="modalbodyPositionPlayerRating">
              <form>
                <div className="row goalie">
                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Personality</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="personality"
                        setTade={setTade}
                        tade={attributes.personality}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Experience</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="experience"
                        setTade={setTade}
                        tade={attributes.experience}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation ">
                      <label>Agility</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="agility"
                        setTade={setTade}
                        tade={attributes.agility}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Team work</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="team_work"
                        setTade={setTade}
                        tade={attributes.team_work}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Leadership</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="leadership"
                        setTade={setTade}
                        tade={attributes.leadership}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Tactics</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="tactics"
                        setTade={setTade}
                        tade={attributes.tactics}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Communication</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="communication"
                        setTade={setTade}
                        tade={attributes.communication}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Pace</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="pace"
                        setTade={setTade}
                        tade={attributes.pace}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Strength</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="strength"
                        setTade={setTade}
                        tade={attributes.strength}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Technique</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="technique"
                        setTade={setTade}
                        tade={attributes.technique}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Passing</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="passing"
                        setTade={setTade}
                        tade={attributes.passing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Composure</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="composure"
                        setTade={setTade}
                        tade={attributes.composure}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Dribbling </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="dribbling"
                        setTade={setTade}
                        tade={attributes.dribbling}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Finishing</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="finishing"
                        setTade={setTade}
                        tade={attributes.finishing}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Positioning </label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="positioning"
                        setTade={setTade}
                        tade={attributes.positioning}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Aerial ability</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="aerial_ability"
                        setTade={setTade}
                        tade={attributes.aerial_ability}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>

                  <div className="aligns">
                    <div className="offset-1 col-2 evaluation">
                      <label>Shots</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="shots"
                        setTade={setTade}
                        tade={attributes.shots}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                    <div className="offset-1 col-2 evaluation">
                      <label>Stamina</label>
                    </div>
                    <div className="col-4 rating">
                      <Dropdown_rating
                        className="rating"
                        name="stamina"
                        setTade={setTade}
                        tade={attributes.stamina}
                        handleChangeCallback={handleChangeParent}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 Buttons">
                <div className="offset-7 col-2">
                  {/* <button className='cancel-button' onClick={() => closeModalPlayerRating(false)}>Cancel</button> */}
                </div>
                <div className="col-2">
                  <button className="next-button" onClick={updateRating}>
                    {" "}
                    Confirm{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalPlayerRating;
