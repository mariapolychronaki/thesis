import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { Players } from "../Players";
import { Navigate, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../../Store/Slices/coachSlice";
import FormSignIn from "../../components/FormSignIn/FormSignIn";
import { users } from "../../Constants/Constants";
import { SET_USER_ID } from "../../Store/Slices/UserSlice"

export const SignIn = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState("");
  const dispatch = useDispatch();
  const [userType, setUserType] = useState({});
  const [userId,setUserId] = useState("");

  function submitForm(e) {
    if (e.role) {
      setIsSubmitted(true);
      console.log(e);
      setUserType(e.role);
      setForm(e);
      console.log(e.email);
      setUserId(e.userId);
      dispatch(setName(e.email));
      dispatch(SET_USER_ID(e.userId));
    }
  }

  // const findPlayer = useCallback(() => {
  //     setUserType()
  // }, [form])

  // useEffect(() => {
  //     findPlayer()
  // }, [findPlayer])

  console.log(userType);

  return (
    <div>
      <div className="form-container">
        {/* {!isSubmitted ? (<FormSignIn submitForm={submitForm} />) :

                    (userType !== undefined && userType.user_type === "Coach") ? <Navigate to='/players' /> : <Navigate to='/PlayerUser' />} */}

        {!isSubmitted ? (
          <FormSignIn submitForm={submitForm} />
        ) : userType !== undefined && userType === "coach" ? (
          <Navigate to="/players" />
        ) : userType !== undefined && userType === "player" ? (
          <Navigate to={`/users/${userId}`} />
        ) : (
          <Navigate to="/Admin" />
        )}
      </div>
      )
    </div>
  );
};
