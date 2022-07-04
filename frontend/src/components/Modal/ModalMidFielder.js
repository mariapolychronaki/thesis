import React from "react";
import "../../assets/Style/Modal.css";
import "react-bootstrap";
import "../../assets/Style/ModalPositions.css";
import Dropdown_rating from "../Dropdowns/Dropdown_rating";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

const ModalMidfielder = ({
  closeModalMidfielder,
  closeModalPlayer,
  response,
  player,
}) => {
  const [showConfirm, setshowConfirm] = useState(false);

  const [data, setdata] = useState({
    aerial_ability: "0",
    agility: "0",
    communication: "0",
    composure: "0",
    creativity: "0",
    experience: "0",
    leadership: "0",
    marking: "0",
    pace: "0",
    passing: "0",
    personality: "0",
    positioning: "0",
    shots: "0",
    stamina: "0",
    strength: "0",
    tactics: "0",
    team_work: "0",
    technique: "0",
  });

  const [attributes, setAttributes] = useState({});

  const handleChangeParent = (data, name) => {
    setAttributes({
      ...attributes,
      [`${name}`]: data,
    });
  };

  const createMidfielder = async () => {
    await axios
      .post(
        "http://localhost:8080/midfielder",
        {
          aerial_ability: attributes.aerial_ability,
          agility: attributes.agility,
          communication: attributes.communication,
          composure: attributes.composure,
          creativity: attributes.creativity,
          experience: attributes.experience,
          leadership: attributes.leadership,
          marking: attributes.marking,
          pace: attributes.pace,
          passing: attributes.passing,
          personality: attributes.personality,
          positioning: attributes.positioning,
          shots: attributes.shots,
          stamina: attributes.stamina,
          strength: attributes.strength,
          tactics: attributes.tactics,
          team_work: attributes.team_work,
          technique: attributes.technique,
          player_id: response._id,
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

  const handleSubmit = () => {
    setshowConfirm(true);
    //edw tha ginontai oi eisagwges toy paixth kai twn attributes
    createMidfielder();
  };

  const handleClose1 = () => {
    setshowConfirm(false);
    closeModalMidfielder(false);
    closeModalPlayer(false);
  };

  console.log(attributes);

  return (
    <>
      <div className="modalBackgroundPosition">
        <div className="col-12 space"></div>
        <div className="modalContainerPosition">
          <div className="col-12 x-button">
            <button className="x" onClick={() => closeModalMidfielder(false)}>
              X
            </button>
          </div>
          <div className="col-12 title">Midfielder</div>
          <div className="modalbodyPosition">
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
                <button
                  className="cancel-button"
                  onClick={() => closeModalMidfielder(false)}
                >
                  Cancel
                </button>
              </div>
              <div className="col-2">
                <button className="next-button" onClick={handleSubmit}>
                  {" "}
                  Confirm{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showConfirm} onHide={handleClose1} className="modal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="ShowConfirmMessage">
            You have succesfully created your player!
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalMidfielder;
