import React from 'react';
import '../../assets/Style/Message.css'
import 'react-bootstrap'


export const SignUpMessage = () => {
    return <div className='Message'>
        <div className='offset-3 col-6 container'>
            <div className='MessageContainer'>
                <div className='Mess'>
                    Thank you for choosing Football App.
                    Your request is being proccessed.<br/>
                    You wil be informed for its progress via e-mail.
                </div>
            </div>

        </div>
    </div>;
};
