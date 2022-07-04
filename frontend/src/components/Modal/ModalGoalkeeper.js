import React from "react";
import "../../assets/Style/Modal.css";
import "react-bootstrap";
import "../../assets/Style/ModalPositions.css";
import Dropdown_rating from "../Dropdowns/Dropdown_rating";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";

const ModalGoalkeeper = ({
  closeModalGoalkeeper,
  closeModalPlayer,
  player,
  response,
}) => {
  const [rating, setRating] = useState("0");
  const [data, setdata] = useState({});
  const [showConfirm, setshowConfirm] = useState(false);

  console.log(player);
  const [attributes, setAttributes] = useState({
    agility: "0",
    communication: "0",
    experience: "0",
    kicking: "0",
    leadership: "0",
    one_on_ones: "0",
    penalty_saving: "0",
    positioning: "0",
    reflexes: "0",
    rushing_out: "0",
    shot_stopping: "0",
    tactics: "0",
    team_work: "0",
    personality: "0",
  });

  const handleChangeParent = (data, name) => {
    setAttributes({
      ...attributes,
      [`${name}`]: data,
    });
    console.log("data");
  };

  console.log(attributes);

  const createGoalkeeper = async () => {
    await axios
      .post(
        "http://localhost:8080/goalkeeper",
        {
          agility: attributes.agility,
          communication: attributes.communication,
          experience: attributes.experience,
          kicking: attributes.kicking,
          leadership: attributes.leadership,
          one_on_ones: attributes.one_on_ones,
          penalty_saving: attributes.penalty_saving,
          positioning: attributes.positioning,
          reflexes: attributes.reflexes,
          rushing_out: attributes.rushing_out,
          shot_stopping: attributes.shot_stopping,
          tactics: attributes.tactics,
          team_work: attributes.team_work,
          personality: attributes.personality,
          player_id:response._id
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
    createGoalkeeper();
  };
  const handleClose1 = () => {
    setshowConfirm(false);
    closeModalGoalkeeper(false);
    closeModalPlayer(false);
  };

  return (
    <>
      <div className="modalBackgroundPosition">
        <div className="col-12 space"></div>
        <div className="modalContainerPosition">
          <div className="col-12 x-button">
            <button className="x" onClick={() => closeModalGoalkeeper(false)}>
              X
            </button>
          </div>
          <div className="col-12 title">Goalkeeper</div>
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
                    <label>Reflexes</label>
                  </div>
                  <div className="col-4 rating">
                    <Dropdown_rating
                      className="rating"
                      name="reflexes"
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
                    <label>Shot stopping</label>
                  </div>
                  <div className="col-4 rating">
                    <Dropdown_rating
                      className="rating"
                      name="shot_stopping"
                      handleChangeCallback={handleChangeParent}
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
                    <label>Penalty saving</label>
                  </div>
                  <div className="col-4 rating">
                    <Dropdown_rating
                      className="rating"
                      name="penalty_saving"
                      handleChangeCallback={handleChangeParent}
                    />
                  </div>
                  <div className="offset-1 col-2 evaluation">
                    <label>One on ones</label>
                  </div>
                  <div className="col-4 rating">
                    <Dropdown_rating
                      className="rating"
                      name="one_on_ones"
                      handleChangeCallback={handleChangeParent}
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
              </div>
            </form>
          </div>
          <div className="footer">
            <div className="col-12 Buttons">
              <div className="offset-7 col-2">
                <button
                  className="cancel-button"
                  onClick={() => closeModalGoalkeeper(false)}
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

export default ModalGoalkeeper;
