import React from "react";
import { useState } from "react";
import FormSignup from "../../components/FormSignup/FormSignup";
import { Players } from "../Players";
import { Navigate, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setName } from "../../Store/Slices/coachSlice";
import { SET_USER_ID } from "../../Store/Slices/UserSlice";

export const SignUp = () => {
  /*

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [form, setForm] = useState("");
    const dispatch = useDispatch();


    function submitForm(e) {
        setIsSubmitted(true);
        console.log(e);
        setForm(e)
        dispatch(setName(e.username));
    }

    return (
        <div>
            <div className='form-container1'>

                {!isSubmitted ? (<FormSignup submitForm={submitForm} />) :

                    (form !== undefined && form.user === "coach") ? <Navigate to='/signUpMessage' /> : <Navigate to='/signUpMessage' />}

            </div>
            )
        </div>
    );
    */

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState("");
  const dispatch = useDispatch();
  const [userType, setUserType] = useState({});
  const [userId, setUserId] = useState("");
  const [recaptcha,setRecaptcha] = useState(false);

  function submitForm(e) {
    if (e.created) {
      setIsSubmitted(true);
      console.log(e);
      setUserType(e.user);
      setForm(e);
      console.log(e.email);
      setUserId(e.userId);
      dispatch(SET_USER_ID(e.userId));
      dispatch(setName(e.email));
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
    <div className="">
      <div className="form-container">
        {/* {!isSubmitted ? (<FormSignup submitForm={submitForm} />) :
  
                      (userType !== undefined && userType.user_type === "Coach") ? <Navigate to='/players' /> : <Navigate to='/PlayerUser' />} */}

        {!isSubmitted ? (
          <FormSignup submitForm={submitForm} />
        ) : (
          userType === "coach" ? <Navigate to="/teamName" /> : 
          <Navigate to="/signUpMessage" />
        )}
      </div>
    </div>
  );
};
