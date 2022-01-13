import React from 'react'

const Dropdown_position = () => {
    return (
        <div>
            <select className='positions'>
                <option value="goalkeeper">Goalkeeper</option>
                <option value="central_defender">Central Defender</option>
                <option value="right_defender">Right Defender</option>
                <option value="left_defender">Left Defender</option>
                <option value="midfielder">Midfielder</option>
                <option value="Att_mid_right">Attacking Midfielder Right</option>
                <option value="Att_mid_center">Attacking Midfielder Center</option>
                <option value="Att_mid_left">Attacking Midfielder Left</option>
                <option value="forward">Forward</option>
            </select>
        </div>
    )
}

export default Dropdown_position
