import React from "react";
import "../../assets/Style/FormSignIn.css";
import { useState, useEffect, useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { users } from "../../Constants/Constants";
import axios from "axios";
import jwt_decode from "jwt-decode";

const FormSignIn = ({ submitForm }) => {
  const [errors, setErrors] = useState({});
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
    role: "",
    userId: "",
    recaptcha: false,
  });
  function onChange(value) {
    console.log("Captcha value:", value);
    setValues({ ...values, recaptcha: true });
    setErrors({});
  }

  const validate = async (values) => {
    let flag = false;
    let flagPassword = false;
    /*
        users.map((user) => {
            if (user.email === values.email) {
                console.log(values.password)
                console.log(user.password)
                if (user.password === values.password) {
                    flagPassword = true;
                }

                flag = true;


            }

        })*/

    if (!values.email.trim()) {
      errors.email = "Email required";
    } else if (!values.password) {
      errors.password = "Password is required";
    }

    await axios
      .post(
        "http://localhost:8080/users/login",
        {
          email: values.email,
          password: values.password,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        const { token } = res.data;
        const decoded = jwt_decode(token);
        if (decoded) {
          if (!values.recaptcha) {
            console.log(values.recaptcha);
            setErrors({
              recaptcha: "You need to verify recaptcha!",
            });
          }

          flag = true;
          flagPassword = true;
          setValues((values) => ({
            ...values,
            userId: decoded.id,
            role: decoded.role,
          }));
        }
      })
      .catch((e) => {
        flag = false;
        flagPassword = false;
        setErrors({ password: "Invalid password/email" });
        console.log(e);
      });
    /*
    if (!values.email.trim()) {
      errors.email = "Email required";
    } else if (flag === false) {
      errors.email = "Invalid email";
    } else if (flagPassword === false) {
      console.log(flagPassword);
      errors.password = "Invalid password";
    }*/

    console.log(values);
  };

  console.log(errors);

  const hadleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    console.log(values);
  };
  const hadleSubmit = (e) => {
    e.preventDefault();
    validate(values);
    setIsSubmiting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmiting) {
      submitForm(values);
    }
  }, [values]);

  const recaptchaRef = useRef(null);
  console.log(values);
  console.log(errors);

  return (
    <div className="form-content-right">
      <form className="form" onSubmit={hadleSubmit}>
        <div className="title_Sign_In">Welcome to Football App</div>
        <div className="form1-inputs ">
          <label htmlFor="username" className="form-label">
            *Email
          </label>
          <input
            id="username"
            type="text"
            name="email"
            className="form-input "
            placeholder="Enter your name"
            value={values.email}
            onChange={hadleChange}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>

        <div className="form1-inputs">
          <label htmlFor="password" className="form-label">
            *Password
          </label>
          <input
            type="password"
            name="password"
            className="form-input"
            placeholder="Enter your password"
            value={values.password}
            onChange={hadleChange}
          />
          {errors.password && <p>{errors.password}</p>}
          {errors.wrongPassword && <p>{errors.wrongPassword}</p>}
          {errors.recaptcha && <p>{errors.recaptcha}</p>}
        </div>
        <button className="form-input-btn" type="submit">
          Submit
        </button>
        <div className="Already">
          You don't have an account? <a href="/">Sign up</a>
        </div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={"6Ldr7GoeAAAAAGvm11RyeyquphZY8YHo5alDE2YV"}
          onChange={onChange}
        />
      </form>
    </div>
  );
};

export default FormSignIn;
