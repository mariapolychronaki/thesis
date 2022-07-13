import React from "react";
import "../../assets/Style/Modal.css";
import "react-bootstrap";
import ModalGoalkeeper from "./ModalGoalkeeper";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown_height from "../Dropdowns/Dropdown_height";
import Dropdown_weight from "../Dropdowns/Dropdown_weight";
import Dropdown_nationality from "../Dropdowns/Dropdown_nationality";
import Dropdown_position from "../Dropdowns/Dropdown_position";
import ModalCentralDefender from "./ModalCentralDefender";
import ModalWideDefender from "./ModalWideDefender";
import ModalMidfielder from "./ModalMidFielder";
import ModalAttackingMidfielderCenter from "./ModalAttMidCenter";
import ModalAttackingMidfielderWide from "./ModalAttMidWide";
import ModalForward from "./ModalForward";
import ModalInjured from "./ModalInjured";
import { arrayPlayers } from "../../Constants/Constants";
import { Modal } from "react-bootstrap";
import moment from "moment";
import { array } from "prop-types";
import axios from "axios";
import { useSelector } from "react-redux";

const ModalPlayer = ({ closeModalPlayer, isOpen }) => {
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

  const [position, setPosition] = useState("Goalkeeper");
  const [height, setHeight] = useState("150");
  const [nationality, setNationality] = useState("Afghan");
  const [weight, setWeight] = useState("50");
  const [preferredFoot, setPreferredFoot] = useState("right");
  const [date, setDate] = useState(new Date());
  const team = useSelector((state) => state.user.team);

  console.log(team)
  const [player, setPlayer] = useState({});

  const [show, setShow] = useState(false);

  const [errors, setErrors] = useState({});

  const [data, setdata] = useState({});

  const handleChangeParent = (data) => {
    console.log(data);
    setPosition(data);
  };
  const handleChangeParent1 = (data) => {
    console.log(data);
    setHeight(data);
  };
  const handleChangeParent2 = (data) => {
    console.log(data);
    console.log(nationality);

    setNationality(data);
  };

  const handleChangeParent3 = (data) => {
    console.log(data);
    setWeight(data);
  };

  const validate = (values) => {
    // var flagSSN = false;
    // arrayPlayers.map((player) => {
    //     if (player.ssn === values.ssn) {
    //         flagSSN = true;
    //         console.log(player.ssn)
    //         console.log(values.ssn)
    //         console.log(flagSSN)
    //     }
    //     return flagSSN;
    // })

    // if (flagSSN === true) {
    //     errors.ssn = "Ssn already exists!"
    //     setShow(true)
    //     setErrors(errors)
    //     console.log(errors)
    //     return false;
    // }
    // else
    if (!values.AMKA) {
      errors.ssn = "Ssn is required!";
      setErrors(errors);
      setShow(true);
      return false;
    } else if (!/^\d+$/.test(values.AMKA)) {
      errors.ssn = "Snn must only contain numbers!";
      setShow(true);
      setErrors(errors);
      console.log(errors);
      return false;
    } else if (values.AMKA.length !== 11) {
      errors.ssn = "Snn must be 11 numbers!";
      setShow(true);
      setErrors(errors);
      return false;
    }else if(parseInt(values.AMKA[0]+""+values.AMKA[1])<=0 || parseInt(values.AMKA[0]+""+values.AMKA[1])>31){
      errors.ssn = "SSN first two numbers!";
      setShow(true);
      setErrors(errors);
      return false;
    }
    if (!values.name) {
      errors.name = "Name required!";
      setShow(true);
      setErrors(errors);
      return false;
    } else if (!/^[A-Za-z\s]*$/.test(values.name)) {
      errors.name = "Name must only contain letters!";
      setShow(true);
      setErrors(errors);
      console.log(errors);
      return false;
    } else if (values.name.length > 25) {
      errors.name = "Name can't be more than 25 characters!";
      setShow(true);
      setErrors(errors);
      console.log(errors);
      return false;
    }
    if (!values.surname) {
      errors.surname = "Surname required!";
      setShow(true);
      setErrors(errors);
      return false;
    } else if (!/^[A-Za-z\s]*$/.test(values.surname)) {
      errors.surname = "Surname must only contain letters!";
      setShow(true);
      setErrors(errors);
      console.log(errors);
      return false;
    } else if (values.surname.length > 25) {
      errors.name = "Surname can't be more than 25 characters!";
      setShow(true);
      setErrors(errors);
      console.log(errors);
      return false;
    }

    return true;
  };

  console.log(errors);

  const createPlayer = async () => {
    await axios
      .post(
        "http://localhost:8080/players/",
        {
          name: data.name,
          surname: data.surname,
          email: data.email,
          AMKA: data.AMKA,
          preferred_foot: data.preferred_foot,
          [`position`]: position,
          [`height`]: height,
          [`nationality`]: nationality,
          [`weight`]: weight,
          ["birthdate"]:
            date.getFullYear() +
            "/" +
            (date.getMonth() + 1) +
            "/" +
            date.getDate(),
          team: {
            name: team.name,
            team_id: team._id,
          },
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setPlayer(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const chooseModal = () => {
    var flag = validate(data);
    setdata({
      ...data,
      [`position`]: position,
      [`height`]: height,
      [`nationality`]: nationality,
      [`weight`]: weight,
      ['preferred_foot']:preferredFoot,
      ["birthdate"]:
        date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate(),
      team: {
        name: team.name,
        team_id: team._id,
      },
    });

    console.log(data);
    console.log(errors);
    console.log(errors.length);

    

    if (flag === true) {
      createPlayer();
      if (position === "Goalkeeper") {
        setOpenModalGoalkeeper(true);
        setOpenModalCentralDefender(false);
        setOpenModalWideDefender(false);
        setOpenModalMidfielder(false);
        setOpenModalAttackingMidfielderWide(false);
        setOpenModalAttackingMidfielderCenter(false);
        setOpenModalForward(false);
      } else if (position === "Central Defender") {
        console.log("mpika");
        setOpenModalGoalkeeper(false);
        setOpenModalCentralDefender(true);
        setOpenModalWideDefender(false);
        setOpenModalMidfielder(false);
        setOpenModalAttackingMidfielderWide(false);
        setOpenModalAttackingMidfielderCenter(false);
        setOpenModalForward(false);
      } else if (
        position === "Right Defender" ||
        position === "Left Defender"
      ) {
        setOpenModalGoalkeeper(false);
        setOpenModalCentralDefender(false);
        setOpenModalWideDefender(true);
        setOpenModalMidfielder(false);
        setOpenModalAttackingMidfielderWide(false);
        setOpenModalAttackingMidfielderCenter(false);
        setOpenModalForward(false);
      } else if (position === "Midfielder") {
        setOpenModalGoalkeeper(false);
        setOpenModalCentralDefender(false);
        setOpenModalWideDefender(false);
        setOpenModalMidfielder(true);
        setOpenModalAttackingMidfielderWide(false);
        setOpenModalAttackingMidfielderCenter(false);
        setOpenModalForward(false);
      } else if (
        position === "Attacking Midfielder Left" ||
        position === "Attacking Midfielder Right"
      ) {
        setOpenModalGoalkeeper(false);
        setOpenModalCentralDefender(false);
        setOpenModalWideDefender(false);
        setOpenModalMidfielder(false);
        setOpenModalAttackingMidfielderWide(true);
        setOpenModalAttackingMidfielderCenter(false);
        setOpenModalForward(false);
      } else if (position === "Attacking Midfielder Center") {
        setOpenModalGoalkeeper(false);
        setOpenModalCentralDefender(false);
        setOpenModalWideDefender(false);
        setOpenModalMidfielder(false);
        setOpenModalAttackingMidfielderWide(false);
        setOpenModalAttackingMidfielderCenter(true);
        setOpenModalForward(false);
      } else if (position === "Forward") {
        setOpenModalGoalkeeper(false);
        setOpenModalCentralDefender(false);
        setOpenModalWideDefender(false);
        setOpenModalMidfielder(false);
        setOpenModalAttackingMidfielderWide(false);
        setOpenModalAttackingMidfielderCenter(false);
        setOpenModalForward(true);
      }
    }
  };

  const handleChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    /* if (e.target.name === "Preferred Foot") {
            setPreferredFoot(e.target.value)
        }*/
  };
  console.log(data);

  const [values, setValues] = useState({
    ssn: "",
    name: "",
    surname: "",
  });

  const handleClose = () => {
    setShow(false);
  };

  const [startDate, setStartDate] = useState(new Date());

  console.log(startDate);

  return (
    <div className="modalBackground">
      <div className="col-12 space"></div>
      <div className="modalContainerPlayer ">
        <div className="col-12 x-button">
          <button className="x" onClick={() => closeModalPlayer(false)}>
            X
          </button>
        </div>
        <div className="col-12 title">New Player</div>
        <div className="modalbody">
          <form>
            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>SSN</label>
              </div>
              <div className="col-4 ">
                <input
                  className="inputs"
                  name="AMKA"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Email</label>
              </div>
              <div className="col-4 ">
                <input
                  className="inputs"
                  name="email"
                  type="email"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Name</label>
              </div>
              <div className="col-4 ">
                <input
                  className="inputs"
                  name="name"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Surname</label>
              </div>
              <div className="col-4 ">
                <input
                  className="inputs"
                  name="surname"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Nationality</label>
              </div>
              <div className="col-4 " name="nationality">
                <Dropdown_nationality
                  handleChangeCallback={handleChangeParent2}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Position</label>
              </div>
              <div className="col-4 ">
                <Dropdown_position
                  name="position"
                  handleChangeCallback={handleChangeParent}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Preferred Foot</label>
              </div>
              <div className="col-4 ">
                <select
                  className="positions"
                  name="preferred_foot"
                  onChange={handleChange}
                  defaultValue={preferredFoot}
                >
                  <option value="right">Right</option>
                  <option value="left">Left</option>
                  <option value="both">Both</option>
                </select>
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Birth Date</label>
              </div>
              <div className="col-4">
                <DatePicker
                  className="date"
                  dateFormat="yyyy/MM/dd"
                  selected={date}
                  onChange={(date) => setDate(date)}
                />
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Height(cm)</label>
              </div>
              <div className="col-4 " name="Height">
                <Dropdown_height
                  className="height_op"
                  handleChangeCallback={handleChangeParent1}
                />
              </div>
            </div>

            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>Weight(kg)</label>
              </div>
              <div className="col-4">
                <Dropdown_weight
                  className="weight_op"
                  handleChangeCallback={handleChangeParent3}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="footer">
          <div className="col-12 btns">
            <div className="offset-7 col-2">
              <button
                className="cancel-button PL_cancel"
                onClick={() => closeModalPlayer(false)}
              >
                Cancel
              </button>
            </div>
            <div className="col-2">
              <button className="next-button PL_next" onClick={chooseModal}>
                {" "}
                Next{" "}
              </button>

              {OpenModalGoalkeeper && (
                <ModalGoalkeeper
                  player={data}
                  response={player}
                  closeModalGoalkeeper={setOpenModalGoalkeeper}
                  closeModalPlayer={closeModalPlayer}
                />
              )}
              {OpenModalCentralDefender && (
                <ModalCentralDefender
                  response={player}
                  player={data}
                  closeModalCentralDefender={setOpenModalCentralDefender}
                  closeModalPlayer={closeModalPlayer}
                />
              )}
              {OpenModalWideDefender && (
                <ModalWideDefender
                  response={player}
                  player={data}
                  closeModalWideDefender={setOpenModalWideDefender}
                  closeModalPlayer={closeModalPlayer}
                />
              )}
              {OpenModalMidfielder && (
                <ModalMidfielder
                  response={player}
                  player={data}
                  closeModalMidfielder={setOpenModalMidfielder}
                  closeModalPlayer={closeModalPlayer}
                />
              )}
              {OpenModalAttackingMidfielderWide && (
                <ModalAttackingMidfielderWide
                  response={player}
                  player={data}
                  closeModalAttackingMidfielderWide={
                    setOpenModalAttackingMidfielderWide
                  }
                  closeModalPlayer={closeModalPlayer}
                />
              )}
              {OpenModalAttackingMidfielderCenter && (
                <ModalAttackingMidfielderCenter
                  response={player}
                  player={data}
                  closeModalAttackingMidfielderCenter={
                    setOpenModalAttackingMidfielderCenter
                  }
                  closeModalPlayer={closeModalPlayer}
                />
              )}
              {OpenModalForward && (
                <ModalForward
                  response={player}
                  player={data}
                  closeModalForward={setOpenModalForward}
                  closeModalPlayer={closeModalPlayer}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="showErrors">
            {errors.name}
            {errors.ssn}
            {errors.surname}
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPlayer;
