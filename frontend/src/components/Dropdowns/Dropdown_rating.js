import React,{useState} from 'react'

const Dropdown_rating = ({ handleChangeCallback, name, playerId, tade,setTade }) => {

    const [value,setValue] = useState(tade);
    console.log(name, playerId, tade)

    const handleChange = (e) => {
        if (playerId !== undefined) {
            if(setTade){
                setTade(e.target.value);
            }
            
            handleChangeCallback(e.target.value, name, playerId)
        } else {
            if(setTade){
                setTade(name,e.target.value);
            }
            handleChangeCallback(e.target.value, name);
        }
    }
    return (
        <div>
            <select onChange={handleChange} value={tade}>
                <option value='0'>0</option>
                <option value='1'>1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="5.5">5.5</option>
                <option value='6'>6</option>
                <option value="6.5">6.5</option>
                <option value="7">7</option>
                <option value="7.5">7.5</option>
                <option value="8">8</option>
                <option value="8.5">8.5</option>
                <option value="9">9</option>
                <option value="9.5">9.5</option>
                <option value="10">10</option>
            </select>

        </div>
    )
}

export default Dropdown_rating
