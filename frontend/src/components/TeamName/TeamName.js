import React, { useState } from 'react'
import '../../assets/Style/TeamName.css'
import { useEffect } from 'react';

export const TeamName = () => {
    const [values, setValues] = useState({
        TeamName: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmiting, setIsSubmiting] = useState(false);

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
        }
    }, [errors])

    const isUpper = (str) => {
        return !/[a-z]/.test(str) && /[A-Z]/.test(str);
    }

    const validate = (values) => {

        let errors = {}


        console.log(values.TeamName[0].toUpperCase())

        if (isUpper(values.TeamName[0]) === false) {

            errors.TeamName = "The first letter must be capital"
        }
        else if (!values.TeamName) {
            errors.TeamName = "Team name is required"
        } else if (values.TeamName.length < 3) {
            errors.TeamName = 'Team name must be more than 3 characters'
        }

        return errors;
    }

    return (
        <div className='TeamNameForm'>
            <form onSubmit={hadleSubmit}>
                <div className='col-12 '>
                    <div className='col-12 LabelTeam'>
                        <label>Please enter your team's name</label>
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
