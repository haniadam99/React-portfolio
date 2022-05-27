import React from 'react'
import {Typewriter } from 'react-simple-typewriter'



import './Profile.css'


const Profile = () => {
    return(
        <div className='text'>
            <h1>
                Hello I'm Hani and I'm a

                <span>
                    <Typewriter 
                    loop 
                    cursor 
                    cursorStyle=""
                    typeSpeed= {70}
                    deleteSpeed= {50}
                    delaySpeed={1000}
                    words= {['Front-end Devloper', 'UX-designer', 'Student']}
                    />
                </span>
            </h1>

        </div>
    )
}



export default Profile
