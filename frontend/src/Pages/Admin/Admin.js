import React, { useCallback } from "react";
import NavPlayer from "../../components/Navbar/NavPlayer";
import Footer from "../../components/Footer/Footer";
import "../../assets/Style/Admin.css";
import ModalAddInjuredPlayer from "../../components/Modal/ModalAddInjuredPlayer";
import { useState, useEffect } from "react";
import "reactjs-popup/dist/index.css";
import CustomPopup from "./PopUp";
import {
  Enquiries,
  usersCoaches,
  usersPlayers,
  SignUpMessages,
} from "../../Constants/Constants";
import { useDispatch } from "react-redux";
import { setApproved, setRejected } from "../../Store/Slices/coachSlice";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";

const Admin = () => {
  const [removePlayerBtn, setRemovePlayerBtn] = useState(false);
  const [searchField, setSearchField] = useState("");
  const [searchFieldCoach, setSearchFieldCoach] = useState("");
  const [allTeams, setAllTeams] = useState([]);

  const [visibility, setVisibility] = useState(false);
  const [Player, setPlayer] = useState({});
  const [listOfPlayers, setListOfPlayers] = useState([]);
  const [listOfCoaches, setListOfCoaches] = useState([]);
  const [listOfEnquiries, setListOfEnquiries] = useState([]);
  const [selectedEnquiry,setSelectedEnquiry] = useState({});

  const [accept, setAccept] = useState(false);
  const [filteredPersons, setfilteredPersons] = useState(listOfPlayers);

  const [filteredPersonsCoaches, setfilteredPersonsCoaches] =
    useState(listOfCoaches);
  console.log(usersCoaches);

  const [Sign_UP_messages, setSign_UP_messages] = useState(true);
  const [Coach_Enquries, setCoach_Enquries] = useState(false);
  const [players, setPlayers] = useState(false);
  const [users, setUsers] = useState([]);
  const [coaches, setCoaches] = useState(false);
 
  const dispatch = useDispatch();

  const fetchNVUsers = async () => {
    await axios
      .get(
        "http://localhost:8080/users/not-verified",
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setUsers(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchEnquries = async () => {
    await axios
      .get(
        "http://localhost:8080/enquiry/waiting",
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        const temp_array = res.data.map((enquiry) => {
          const team = allTeams.filter(
            (team) => team.coach_id === enquiry.coach.coach_id
          )[0];
          console.log(team)
          return { ...enquiry, coach:{...enquiry.coach,team}};
        });
        console.log(temp_array);
        setListOfEnquiries(temp_array);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const findTeams = useCallback(() => {
    return axios
      .get(
        `http://localhost:8080/team`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setAllTeams(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [axios]);

  useEffect(() => {
    findTeams();
  }, [findTeams]);

  const fetchCoaches = async () => {
    await axios
      .get(
        "http://localhost:8080/users/coaches",
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        const temp_array = res.data.map((coach) => {
          const temp = allTeams.filter(
            (team) => team.coach_id === coach._id
          )[0];
          return { ...coach, team: temp };
        });
        console.log(temp_array);
        setListOfCoaches(temp_array);
        setfilteredPersonsCoaches(temp_array);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const fetchPlayers = async () => {
    await axios
      .get(
        "http://localhost:8080/players",
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setListOfPlayers(res.data);
        setfilteredPersons(res.data)
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    fetchNVUsers();
  }, [Sign_UP_messages]);

  useEffect(() => {
    fetchPlayers();
  }, [players]);

  useEffect(() => {
    fetchCoaches();
  }, [coaches]);

  useEffect(() => {
    fetchEnquries();
  }, [Coach_Enquries]);

  const acceptEnquiry = (Player) => {
    setPlayer(Player);
    setAccept(true);
  };

  const [acceptEn, setAcceptEn] = useState(false);

  const acceptEnquiryEn = (Eqnuiry) => {
    setSelectedEnquiry(Eqnuiry);
    setAcceptEn(true);
  };

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const playerToBeRemoved = (Player) => {
    setPlayer(Player);
    setRemovePlayerBtn(true);
  };

  const rejectEnquiryEn = (Eqnuiry) => {
    setSelectedEnquiry(Eqnuiry);
    setRemovePlayerBtn(true);
  };

  const Function_SignUpMessages = () => {
    setSign_UP_messages(true);
    setCoach_Enquries(false);
    setPlayers(false);
    setfilteredPersons(usersPlayers);
    setCoaches(false);
    setfilteredPersonsCoaches(usersCoaches);
  };
  const Function_CoachEnquiries = () => {
    setSign_UP_messages(false);
    setCoach_Enquries(true);
    setPlayers(false);
    setfilteredPersons(usersPlayers);
    setCoaches(false);
    setfilteredPersonsCoaches(usersCoaches); // setVisibility(!visibility)
  };
  const Function_Players = () => {
    setSign_UP_messages(false);
    setCoach_Enquries(false);
    setPlayers(true);
    setCoaches(false);
    setfilteredPersonsCoaches(usersCoaches); // setVisibility(!visibility)
  };
  const Function_Coaches = () => {
    setSign_UP_messages(false);
    setCoach_Enquries(false);
    setPlayers(false);
    setfilteredPersons(usersPlayers);
    setCoaches(true);
    // setVisibility(!visibility)
  };

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  useEffect(() => {
    setfilteredPersons(
      listOfPlayers.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchField.toLowerCase()) ||
          person.surname.toLowerCase().includes(searchField.toLowerCase())
        );
      })
    );
    setfilteredPersonsCoaches(
      listOfCoaches.filter((person) => {
        return (
          person.name.toLowerCase().includes(searchField.toLowerCase()) ||
          person.surname.toLowerCase().includes(searchField.toLowerCase())
        );
      })
    );
    console.log(searchField);
    console.log(filteredPersons);
    console.log(filteredPersonsCoaches);
  }, [searchField]);

  const approveUser = async () => {
    await axios
      .put(
        `http://localhost:8080/users/verify/${Player._id}`,
        {
          state: "verified",
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSign_UP_messages(false);
        setSign_UP_messages(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteUser = async () => {
    await axios
      .delete(
        `http://localhost:8080/users/${Player._id}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setSign_UP_messages(false);
        setSign_UP_messages(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deletePlayer = async () => {
    await axios
      .delete(
        `http://localhost:8080/players/${Player._id}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setPlayers(false);
        setPlayers(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const deleteCoach = async () => {
    await axios
      .delete(
        `http://localhost:8080/users/${Player._id}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setCoaches(false);
        setCoaches(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const transferPlayer = async () =>{
    await axios
    .put(
      `http://localhost:8080/players/transfer/${selectedEnquiry.player.player_id}`,
      {
        teamId:selectedEnquiry.coach.team._id
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => {
      console.log(res);
      //setCoach_Enquries(false);
      //setCoach_Enquries(true);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  const acceptEnquiryPromise = async () =>{
    await axios
    .put(
      `http://localhost:8080/enquiry/${selectedEnquiry._id}`,
      {
        state:"accepted"
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => {
      console.log(res);
      setCoach_Enquries(false);
      setCoach_Enquries(true);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  const declineEnquiryPromise = async () =>{
    await axios
    .put(
      `http://localhost:8080/enquiry/${selectedEnquiry._id}`,
      {
        state:"not-accepted"
      },
      {
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    )
    .then((res) => {
      console.log(res);
      setCoach_Enquries(false);
      setCoach_Enquries(true);
    })
    .catch((e) => {
      console.log(e);
    });
  }

  const deleteEnquiry = async () => {
    await axios
      .delete(
        `http://localhost:8080/enquiry/${selectedEnquiry._id}`,
        {},
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setCoach_Enquries(false);
        setCoach_Enquries(true);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const manageDelete = () => {
    setRemovePlayerBtn(!removePlayerBtn);
    console.log(Player);
    deletePlayer();
  };

  const removeCoach = () => {
    setRemovePlayerBtn(!removePlayerBtn);
    console.log(Player);
    deleteCoach();
  };

  const rejectFunction = () => {
    popupCloseHandler();
    setRemovePlayerBtn(!removePlayerBtn);
    console.log(Player);
    declineEnquiryPromise();
    //deleteUser();
    //dispatch(setApproved(true))
  };
  const acceptFunction = () => {
    console.log(Player);
    popupCloseHandler();
    setAcceptEn(!acceptEn);
    dispatch(setRejected());
    acceptEnquiryPromise();
    transferPlayer();
  };

  const acceptFunctionSignUp = () => {
    console.log(Player);
    popupCloseHandler();
    setAccept(!accept);
    dispatch(setRejected());
    approveUser();
  };

  const rejectFunctionSignUp = () => {
    console.log(Player);
    popupCloseHandler();
    setRemovePlayerBtn(!removePlayerBtn);
    dispatch(setRejected());
    deleteUser();
  };

  const useSortableData = (usersPlayers1, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    const sortedarrayPlayers = React.useMemo(() => {
      let sortablearrayPlayers = [...usersPlayers1];
      if (sortConfig !== null) {
        sortablearrayPlayers.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            console.log(a[sortConfig.key], b);
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }

          return 0;
        });
      }
      return sortablearrayPlayers;
    }, [usersPlayers, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };

    return { usersPlayers: sortedarrayPlayers, requestSort, sortConfig };
  };

  const useSortableDataCoaches = (usersCoaches1, config = null) => {
    const [sortConfig, setSortConfig] = React.useState(config);

    console.log(sortConfig)

    const sortedarrayPlayers = React.useMemo(() => {
      let sortablearrayPlayers = [...usersCoaches1];
      if (sortConfig !== null) {
        sortablearrayPlayers.sort((a, b) => {
          if (a[sortConfig.key] < b[sortConfig.key]) {
            console.log(a[sortConfig.key], b);
            return sortConfig.direction === "ascending" ? -1 : 1;
          }
          if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          }

          return 0;
        });
      }
      return sortablearrayPlayers;
    }, [usersCoaches, sortConfig]);

    const requestSort = (key) => {
      let direction = "ascending";
      if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === "ascending"
      ) {
        direction = "descending";
      }
      setSortConfig({ key, direction });
    };

    return { usersCoaches: sortedarrayPlayers, requestSort, sortConfig };
  };

  var usersPlayers = [];
  var usersCoaches = [];

  const findUsers = () => {
    users.map((user) => {
      if (user.user_type === "Player") {
        usersPlayers.push(user);
      } else if (user.user_type === "Coach") {
        usersCoaches.push(user);
      }
    });
  };
  console.log(usersPlayers);
  console.log(usersCoaches);

  const ProductTablePlayer = ({ props }) => {
    console.log(props);
    const { usersPlayers, requestSort, sortConfig } =
      useSortableData(props);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <>
        <div className="offset-4 col-4 TitleInAdminSignUp">Players Users</div>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th>#</th>

              <th
                scope="col"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </th>
              <th
                scope="col"
                onClick={() => requestSort("surname")}
                className={getClassNamesFor("surname")}
              >
                Surname
              </th>
              <th>Email</th>
              {/* <th>Team</th> */}
              <th
                scope="col"
                onClick={() => requestSort("team")}
                className={getClassNamesFor("team")}
              >
                Team
              </th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {usersPlayers.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td className="font_bold">{user.name}</td>
                <td className="font_bold">{user.surname}</td>
                <td className="font_bold">{user?.email}</td>

                <td className="font_bold">{user?.team?.name}</td>

                <td>
                  <button
                    className="BTN_Decline"
                    onClick={() => playerToBeRemoved(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  console.log(filteredPersonsCoaches);

  const ProductTableCoach = ({ props }) => {
    console.log(props);
    const { usersCoaches, requestSort, sortConfig } = useSortableDataCoaches(
      props
    );
    console.log(usersCoaches);
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };
    return (
      <>
        <div className="offset-4 col-4 TitleInAdminSignUp">Coach Users</div>
        <table className="table">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th>#</th>

              <th
                scope="col"
                onClick={() => requestSort("name")}
                className={getClassNamesFor("name")}
              >
                Name
              </th>
              <th
                scope="col"
                onClick={() => requestSort("surname")}
                className={getClassNamesFor("surname")}
              >
                Surname
              </th>
              <th>Email</th>
              <th>Team</th>
              <th>Players</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {usersCoaches.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td className="font_bold">{user.name}</td>
                <td className="font_bold">{user.surname}</td>
                <td className="font_bold">{user.email}</td>

                <td className="font_bold">{user?.team?.name}</td>
                <td className="font_bold">{user?.team?.number_of_players}</td>

                <td>
                  <button
                    className="BTN_Decline"
                    onClick={() => playerToBeRemoved(user)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  };

  return (
    <div>
      {/*<NavPlayer />*/}
      <Navbar comesFrom={"admin"}/>

      {findUsers()}

      <div>
        <div className="container-fluid">
          <div className="col-12 space"></div>
          <div className="row RowAdmin">
            <div className="col-2 Sign_UP_messages">
              <div className="marginBtns">
                <button
                  className={
                    !Sign_UP_messages
                      ? "btn buttonsAdmin"
                      : "btn buttonsAdmin ActiveButton"
                  }
                  onClick={Function_SignUpMessages}
                >
                  {" "}
                  Sign up Messages
                </button>
              </div>
              <div className="marginBtns">
                <button
                  className={
                    !Coach_Enquries
                      ? "btn buttonsAdmin"
                      : "btn buttonsAdmin ActiveButton"
                  }
                  onClick={Function_CoachEnquiries}
                >
                  {" "}
                  Coaches' enquiries
                </button>
              </div>

              <div className="marginBtns">
                <button
                  className={
                    !players
                      ? "btn buttonsAdmin"
                      : "btn buttonsAdmin ActiveButton"
                  }
                  onClick={Function_Players}
                >
                  Player Users
                </button>
              </div>
              <div className="marginBtns">
                <button
                  className={
                    !coaches
                      ? "btn buttonsAdmin"
                      : "btn buttonsAdmin ActiveButton"
                  }
                  onClick={Function_Coaches}
                >
                  Coach Users
                </button>
              </div>
            </div>
          </div>

          {Sign_UP_messages && (
            <CustomPopup
              onClose={
                (popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn))
              }
              show={removePlayerBtn}
            >
              <div>
                Are you sure you want to reject{" "}
                <span className="RemovePlayerSurname">
                  {Player.name} {Player.surname}'s
                </span>{" "}
                sign up request?
              </div>
              <div className="space"></div>
              <div className="offset-5 col-3">
                <button onClick={rejectFunctionSignUp} className="YesBtnPopUp">
                  Yes
                </button>
                <button
                  className="NoBtnPopUp"
                  onClick={
                    (popupCloseHandler,
                    () => setRemovePlayerBtn(!removePlayerBtn))
                  }
                >
                  No
                </button>
              </div>
            </CustomPopup>
          )}

          {accept && (
            <CustomPopup
              onClose={(popupCloseHandler, () => setAccept(!accept))}
              show={accept}
            >
              <div>
                Are you sure you want to accept{" "}
                <span className="AddUserToBase">
                  {Player.name} {Player.surname}'s
                </span>{" "}
                sign up request?
              </div>
              <div className="space"></div>
              <div className="offset-5 col-3">
                <button onClick={acceptFunctionSignUp} className="YesBtnAccept">
                  Yes
                </button>
                <button
                  className="NoBtnPopUp"
                  onClick={(popupCloseHandler, () => setAccept(!accept))}
                >
                  No
                </button>
              </div>
            </CustomPopup>
          )}

          {!removePlayerBtn && !accept && Sign_UP_messages && (
            <div className="row">
              <div className="col-12 TitleInAdminSignUp">Sign Up Messages</div>
              <div className="user_sign_up_messages">
                <table className="table SM">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col"></th>
                      <th scope="col">Name</th>
                      <th scope="col">Surname</th>
                      <th scope="col"></th>
                      <th scope="col"></th>

                      <th scope="col"></th>
                      <th scope="col">Email</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((message, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>User</td>
                        <td className="font_bold">
                          {message.name} <span className="span1"></span>
                        </td>
                        <td className="font_bold">{message.surname}</td>
                        <td>has asked to sign up</td>
                        <td>as</td>
                        <td className="font_Dec">{message.user_type}</td>
                        <td className="font_bold">{message.email}</td>
                        <td>
                          <button
                            className="BTN_Approve"
                            onClick={() => acceptEnquiry(message)}
                          >
                            Approve
                          </button>
                          <button
                            className="BTN_Decline"
                            onClick={() => playerToBeRemoved(message)}
                          >
                            Decline
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {Coach_Enquries && (
            <CustomPopup
              onClose={
                (popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn))
              }
              show={removePlayerBtn}
            >
              <div>
                Are you sure you want to reject{" "}
                <span className="RemovePlayerSurname">{selectedEnquiry?.coach?.surname}'s</span>{" "}
                request to sign{" "}
                <span className="RemovePlayerSurname">
                  {Player.name} {selectedEnquiry?.player?.surname}'s
                </span>
                ?
              </div>
              <div className="space"></div>
              <div className="offset-5 col-3">
                <button onClick={rejectFunction} className="YesBtnPopUp">
                  Yes
                </button>
                <button
                  className="NoBtnPopUp"
                  onClick={
                    (popupCloseHandler,
                    () => setRemovePlayerBtn(!removePlayerBtn))
                  }
                >
                  No
                </button>
              </div>
            </CustomPopup>
          )}

          {acceptEn && (
            <CustomPopup
              onClose={(popupCloseHandler, () => setAcceptEn(!acceptEn))}
              show={acceptEn}
            >
              <div>
                Are you sure you want to accept{" "}
                <span className="AddUserToBase">{Player.coach}'s</span> request
                to sign{" "}
                <span className="AddUserToBase">
                  {Player.name} {Player.surname}
                </span>
                ?
              </div>
              <div className="space"></div>
              <div className="offset-5 col-3">
                <button onClick={acceptFunction} className="YesBtnAccept">
                  Yes
                </button>
                <button
                  className="NoBtnPopUp"
                  onClick={(popupCloseHandler, () => setAcceptEn(!acceptEn))}
                >
                  No
                </button>
              </div>
            </CustomPopup>
          )}

          {!removePlayerBtn && !acceptEn && Coach_Enquries && (
            <div className="row">
              <div className="col-12 TitleInAdminSignUp">
                Coaches' Enquiries
              </div>
              <div className="coach_messages">
                <table className="table CE">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Coach</th>
                      <th scope="col">of team</th>
                      <th scope="col">with players</th>
                      <th scope="col">claimed Player</th>
                      <th scope="col">from Team</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listOfEnquiries.map((enquiry, index) => (
                      <tr>
                        <td>{index + 1}</td>

                        <td className="font_bold">{enquiry?.coach?.name +" "+enquiry?.coach?.surname}</td>
                        <td>{enquiry?.coach?.team?.name}</td>
                        <td>{enquiry?.coach?.team?.number_of_players}</td>
                        <td className="font_bold">
                          {enquiry?.player?.name}
                          <span className="span1">{enquiry?.player?.surname}</span>
                        </td>

                        <td className="font_bold">{enquiry?.team?.name}</td>
                        <td>
                          <button
                            className="BTN_Approve"
                            onClick={() => acceptEnquiryEn(enquiry)}
                          >
                            Approve
                          </button>
                          <button
                            className="BTN_Decline"
                            onClick={() => rejectEnquiryEn(enquiry)}
                          >
                            Decline
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {coaches && (
            <CustomPopup
              onClose={
                (popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn))
              }
              show={removePlayerBtn}
            >
              <div>
                Are you sure you want to delete user{" "}
                <span className="RemovePlayerSurname">
                  {Player.name} {Player.surname}{" "}
                </span>{" "}
                from database?
              </div>
              <div className="space"></div>
              <div className="offset-5 col-3">
                <button onClick={removeCoach} className="YesBtnPopUp">
                  Yes
                </button>
                <button
                  className="NoBtnPopUp"
                  onClick={
                    (popupCloseHandler,
                    () => setRemovePlayerBtn(!removePlayerBtn))
                  }
                >
                  No
                </button>
              </div>
            </CustomPopup>
          )}

          {!removePlayerBtn && coaches && (
            <section className="">
              <div className="">
                <input
                  className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                  type="search"
                  placeholder="Search Player"
                  onChange={handleChange}
                />
              </div>
            </section>
          )}

          {!removePlayerBtn && coaches && (
            <ProductTableCoach props={filteredPersonsCoaches} />
          )}

          {players && (
            <CustomPopup
              onClose={
                (popupCloseHandler, () => setRemovePlayerBtn(!removePlayerBtn))
              }
              show={removePlayerBtn}
            >
              <div>
                Are you sure you want to delete user{" "}
                <span className="RemovePlayerSurname">
                  {Player.name} {Player.surname}{" "}
                </span>{" "}
                from database?
              </div>
              <div className="space"></div>
              <div className="offset-5 col-3">
                <button onClick={manageDelete} className="YesBtnPopUp">
                  Yes
                </button>
                <button
                  className="NoBtnPopUp"
                  onClick={
                    (popupCloseHandler,
                    () => setRemovePlayerBtn(!removePlayerBtn))
                  }
                >
                  No
                </button>
              </div>
            </CustomPopup>
          )}

          {!removePlayerBtn && players && (
            <section className="">
              <div className="">
                <input
                  className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                  type="search"
                  placeholder="Search Player"
                  onChange={handleChange}
                />
              </div>
            </section>
          )}
          {!removePlayerBtn && players && (
            <ProductTablePlayer props={filteredPersons} />
          )}

          {/* {!removePlayerBtn && players && <div className='coach_messages'>

                    <div className='offset-5 col-2 coach_messagesTitle'>All Active Users Players</div>
                    <section className="">
                        <div className="">
                            <input
                                className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
                                type="search"
                                placeholder="Search Player"
                                onChange={handleChange}
                            />
                        </div>
                    </section>
                    <table className="table tablePlayers">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Surname</th>
                                <th scope="col">Email</th>
                                <th scope="col">Team</th>
                                <th scope="col">Actions</th>

                            </tr>

                        </thead>
                        <tbody>
                            {usersPlayers.map((user, index) =>
                                <tr>

                                    <td >
                                        {index}
                                    </td>
                                    <td className='font_bold'>
                                        {user.name}
                                    </td>
                                    <td className='font_bold'>
                                        {user.surname}
                                    </td>
                                    <td className='font_bold'>
                                        {user.email}
                                    </td>

                                    <td className='font_bold'>
                                        {user.team}
                                    </td>

                                    <td>

                                        <button className='BTN_Decline' onClick={() => playerToBeRemoved(user)}>Delete</button>


                                    </td>


                                </tr>

                            )}

                        </tbody>


                    </table>
                </div>} */}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Admin;
