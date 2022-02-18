import React from 'react'

const Dropdown_position = ({handleChangeCallback,position}) => {

    const handleChange = (e) =>{
        handleChangeCallback(e.target.value);     
    }
    return (
        <div>
            <select onChange={handleChange} className='positions' defaultValue={position}>
                <option value="Goalkeeper">Goalkeeper</option>
                <option value="Central Defender">Central Defender</option>
                <option value="Right Defender">Right Defender</option>
                <option value="Left Defender">Left Defender</option>
                <option value="Midfielder">Midfielder</option>
                <option value="Attacking Midfielder Right">Attacking Midfielder Right</option>
                <option value="Attacking Midfielder Center">Attacking Midfielder Center</option>
                <option value="Attacking Midfielder Left">Attacking Midfielder Left</option>
                <option value="Forward">Forward</option>
            </select>
        </div>
    )
}

export default Dropdown_position
