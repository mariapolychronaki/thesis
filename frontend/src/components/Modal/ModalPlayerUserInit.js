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
import axios from "axios";

const ModalPlayerPlayerUserInit = ({
  closeModalPlayer,
  isOpen,
  player,
  user,
  fullname,
  setPlayerId
}) => {
  console.log(player);

  const [position, setPosition] = useState("");
  const [SSN, setSSN] = useState("");
  const [height, setHeight] = useState("");
  const [nationality, setNationality] = useState("");
  const [weight, setWeight] = useState("");
  const [preferred_foot, setPreferredFoot] = useState("right");

  const [show, setShow] = useState(false);

  const [showConfirm, setshowConfirm] = useState(false);

  const [errors, setErrors] = useState({});
  const [date, setDate] = useState("");

  const [data, setdata] = useState({});

  console.log(fullname);

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

  useEffect(() => {
    setSSN(player.SSN);
    setPosition(player.position);
    setNationality(player.nationality);
    setHeight(player.height);
    setWeight(player.weight);
    setDate(new Date());
  }, [player]);

  const validate = (values) => {
    let errors = {};

    console.log(values);

    if (Object.keys(data).length == 0) {
      console.log("HELLOOOOO");
      setshowConfirm(true);
    } else if (!values.SSN) {
      errors.SSN = "SSN is required!";
      setShow(true);
    } else if (!/^\d+$/.test(values.SSN)) {
      errors.SSN = "Snn must be only numbers!";
      setShow(true);
      setErrors(errors);
      console.log(errors);
      return false;
    } else if (values.SSN.length !== 11) {
      errors.SSN = "SNN must be 11 numbers!";
    }
    console.log(errors);
    setErrors(errors);

    return errors;
  };

  const updatePlayer = async () => {
    await axios
      .put(
        `http://localhost:8080/players/${player.player_id}`,
        { ...data, AMKA: SSN },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setshowConfirm(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const createPlayer = async () => {
    await axios
      .post(
        `http://localhost:8080/players/`,
        {
          ...data,
          AMKA: SSN,
          team: {},
          name: user.name,
          surname: user.surname,
          email: user.email,
          preferred_foot:preferred_foot
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setPlayerId(res.data._id)
        setshowConfirm(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const chooseModal = () => {
    validate(data);
    if (
      Object.keys(data).length != 0 &&
      Object.keys(validate(data)).length == 0 &&
      fullname !== "undefined undefined"
    ) {
      updatePlayer();
    } else if (fullname === "undefined undefined") {
      createPlayer();
    }

    console.log(data);
  };

  const handleChange = (e) => {
    if (e.target.name === "SSN") {
      setSSN(e.target.value);
    }else{
      setdata({ ...data, [e.target.name]: e.target.value });
    }
    if(e.target.name==="preferred_foot"){
      setPreferredFoot(e.target.value);
      setdata({ ...data, [e.target.name]: e.target.value });
    }
    
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

  const handleClose1 = () => {
    setshowConfirm(false);
    closeModalPlayer(false);
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="modalBackground">
      <div className="col-12 space"></div>
      <div className="modalContainerPlayer ">
        <div className="col-12 x-button"></div>
        <div className="col-12 space"></div>
        <div className="col-12 title">
          {fullname === "undefined undefined"
            ? user.name + " " + user.surname
            : fullname}
        </div>
        <div className="modalbody">
          <form>
            <div className="col-12 space"></div>
            <div className="col-12 name">
              <div className="offset-1 col-4 text">
                <label>SSN</label>
              </div>
              <div className="col-4 ">
                <input
                  className="inputs"
                  name="SSN"
                  value={SSN}
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
                  name="nationality"
                  handleChangeCallback={handleChangeParent2}
                  handleOnChange={handleChange}
                  nationality={nationality}
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
                  handleOnChange={handleChange}
                  position={position}
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
                  value={preferred_foot}
                  onChange={handleChange}
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
                  name="birthdate"
                  dateFormat="yyyy/MM/dd"
                  selected={date}
                  onChange={(date) => {
                    setDate(date);
                    setdata({ ...data, birthdate: date });
                  }}
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
                  name="height"
                  handleChangeCallback={handleChangeParent1}
                  handleOnChange={handleChange}
                  height={height}
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
                  name="weight"
                  handleChangeCallback={handleChangeParent3}
                  handleOnChange={handleChange}
                  weight={weight}
                />
              </div>
            </div>
          </form>
        </div>
        <div className="footer">
          <div className="col-12 btns">
            <div className="offset-7 col-2"></div>
            <div className="col-2">
              <button
                className="next-button confirmStoEdit"
                onClick={chooseModal}
              >
                {" "}
                Confirm{" "}
              </button>
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
            {Object.keys(data).length === 0
              ? "No change was made"
              : "You have succesfully updated your player!"}
          </div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose} className="modal">
        <Modal.Header closeButton>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="showErrors">{errors.SSN}</div>
        </Modal.Body>

        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalPlayerPlayerUserInit;
