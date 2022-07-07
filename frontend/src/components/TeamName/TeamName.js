import React, { useState } from 'react'
import '../../assets/Style/TeamName.css'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {useSelector} from "react-redux";

export const TeamName = () => {
    const userId = useSelector((state) => state.user.userId);
    const [values, setValues] = useState({
        TeamName: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false);
    let navigate = useNavigate();

    const hadleChange = e => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value
        });
    };
    console.log(values)


    const hadleSubmit = e => {
        e.preventDefault();
        setErrors(validate(values));
        setIsSubmiting(true);
    };

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmiting) {
            navigate('/players')
        }
    }, [errors])

    // const isUpper = (str) => {
    //     return !/[a-z]/.test(str) && /[A-Z]/.test(str);
    // }

    // function isNumeric(num) {
    //     return !isNaN(num)
    // }
    const validate = async(values) => {


        // console.log(values.TeamName[0].toUpperCase())
        if (!values.TeamName) {
           setErrors({TeamName : "Team name is required"})
        }
        else if (values.TeamName.length < 3) {
            setErrors({TeamName :'Team name must be more than 3 characters'})
        }
        // if (values.TeamName.length > 0) {
        //     if (isUpper(values.TeamName[0]) === false) {
        //         errors.TeamName = "The first letter must be capital"
        //     }
        // }

        await axios
      .post(
        "http://localhost:8080/team",
        {
          name: values.TeamName,
          number_of_players: 0,
          coach_id:userId
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      )
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        setErrors({TeamName : "Team already exists"})
        console.log(e);
      });
    }

    return (
        <div className='TeamNameForm'>
            <form onSubmit={hadleSubmit}>
                <div className='row '>
                    <div className='spac'></div>
                    <div className='col-12 LabelTeam'>
                        Please enter your team's name
                    </div>
                    <input className="teamNameInput"
                        placeholder='Team Name'
                        name='TeamName'
                        value={values.TeamName}
                        onChange={hadleChange}>

                    </input>
                    {errors.TeamName && <p className='Errors'>{errors.TeamName}</p>}
                </div>
                <button className='offset-5 col-2 submitTeamName' type='submit'>Submit</button>
            </form>
        </div>
    )
}
