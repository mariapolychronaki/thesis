import React from "react";
import "../../assets/Style/ModalUser.css";
import "react-bootstrap";
import { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Dropdown_height from "../Dropdowns/Dropdown_height";
import Dropdown_weight from "../Dropdowns/Dropdown_weight";
import Dropdown_nationality from "../Dropdowns/Dropdown_nationality";
import Dropdown_position from "../Dropdowns/Dropdown_position";
import ModalPlayer from "./ModalPlayer";
import ModalPlayerUserInit from "../../components/Modal/ModalPlayerUserInit";
import { Modal } from "react-bootstrap";
import axios from "axios";

const ModalPlayerUser = ({ player_id }) => {
  const [data, setdata] = useState({});
  const [secondaryData, setsecondaryData] = useState({})
  const [position, setPosition] = useState("");
  const [height, setHeight] = useState("");
  const [nationality, setNationality] = useState("");
  const [preferred_foot, setPreferredFoot] = useState("");
  const [weight, setWeight] = useState("");
  const [closeModalPlayer, setcloseModalPlayer] = useState(true);
  const [fullname, setfullname] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [edit, setEdit] = useState(false);

  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
  };

  const handleChange = (e) => {
    if(e.target.name==="preferred_foot"){
        setPreferredFoot(e.target.value)
    }
    setsecondaryData({ ...secondaryData, [e.target.name]: e.target.value });
  };
  console.log(secondaryData);

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

  const updatePlayer = async () => {
    await axios
      .put(
        `http://localhost:8080/players/${player_id}`,
        secondaryData,
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setEdit(!edit)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const confirm = () => {
    if(Object.keys(secondaryData).length !==0){
        updatePlayer();
    }
    console.log(player_id);
  };

  const fetchPlayer = async () => {
    await axios
      .get(
        `http://localhost:8080/players/${player_id}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);

        setdata({
          SSN: res.data.AMKA,
          nationality: res.data.nationality,
          position: res.data.position,
          weight: res.data.weight,
          height: res.data.height,
          preferred_foot: res.data.preferred_foot,
          birthdate: res.data.birthdate,
          player_id: player_id,
        });
        setNationality(res.data.nationality);
        setPosition(res.data.position);
        setPreferredFoot(res.data.preferred_foot);
        setWeight(res.data.weight);
        setHeight(res.data.height);
        setfullname(res.data.name + " " + res.data.surname);
        setName(res.data.name);
        setSurname(res.data.surname);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  console.log(data);

  useEffect(() => {
    fetchPlayer();
  }, [player_id, closeModalPlayer,edit]);


  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      {closeModalPlayer && (
        <ModalPlayerUserInit
          player={data}
          fullname={fullname}
          closeModalPlayer={setcloseModalPlayer}
        />
      )}

      {!edit && (
        <div className="modalBackgroundUser">
          <div className="col-12 space"></div>
          <div className="modalContainerUser">
            <div className="col-12 x-button"></div>
            <div className="col-12 titleUser">{fullname}</div>
            <div className="modalbody">
              <form>
                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>SSN</label>
                  </div>
                  <div className="col-4 BackendInputs">{data.SSN}</div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Name</label>
                  </div>
                  <div className="col-4 ">
                    <div className="col-4 BackendInputs">{name}</div>
                  </div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Surname</label>
                  </div>
                  <div className="col-4 ">
                    <div className="col-4 BackendInputs">{surname}</div>
                  </div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Nationality</label>
                  </div>
                  <div className="col-4 BackendInputs">{data.nationality}</div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Position</label>
                  </div>
                  <div className="col-4 BackendInputs">{data.position}</div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Preferred Foot</label>
                  </div>
                  <div className="col-4">
                    <div className="col-4 BackendInputs">
                      {data.preferred_foot}
                    </div>
                  </div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Birth Date</label>
                  </div>
                  <div className="col-4 BackendInputs">
                    {data.birthdate &&
                      new Date(data.birthdate).toLocaleDateString()}
                  </div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Height(cm)</label>
                  </div>
                  <div className="col-4 BackendInputs">{data.height}</div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Weight(kg)</label>
                  </div>
                  <div className="col-4 BackendInputs">{data.weight}</div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 btns">
                <div className="offset-9 col-2">
                  <button
                    className="confirm_button"
                    onClick={() => setEdit(!edit)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {edit && (
        <div className="modalBackgroundUser">
          <div className="col-12 space"></div>
          <div className="modalContainerUser">
            <div className="col-12 x-button"></div>
            <div className="col-12 titleUser">{fullname}</div>
            <div className="modalbody">
              <form>
                <div className="space"></div>

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
                      handleChangeCallback={handleChangeParent2}
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
                      onChange={handleChange}
                      value={preferred_foot}
                    >
                      <option value="right">Right</option>
                      <option value="left">Left</option>
                      <option value="both">Both</option>
                    </select>
                  </div>
                </div>

                <div className="col-12 name">
                  <div className="offset-1 col-4 text">
                    <label>Height(cm)</label>
                  </div>
                  <div className="col-4 ">
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
                      handleChangeCallback={handleChangeParent3}
                      onChange={handleChange}
                      handleOnChange={handleChange}
                      weight={weight}
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="footer">
              <div className="col-12 btns">
                <div className="offset-9 col-2">
                  <button
                    className="confirm_button"
                    onClick={confirm}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Modal show={show} onHide={handleClose} className="modal">
                <Modal.Header closeButton>
                    <Modal.Title>Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='playerAccept'>
                        You have been tranferred to 
                        <span style={{fontWeight:"bolder",marginLeft:"2%"}}>
                         Anthestion
                    </span>
                </div>
            </Modal.Body>

            <Modal.Footer>

            </Modal.Footer>
        </Modal> */}
    </>
  );
};

export default ModalPlayerUser;
