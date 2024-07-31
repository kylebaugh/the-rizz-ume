import React from 'react'
import { useState } from 'react'

const Profile = () => {

    // change username
    // change password

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [verifyPassword, setVerifyPassword] = useState('')

    const changeUsername = () => {
        const bodyObj = {
            username: username,
            password: password
        }

        // change password endpoint

        alert(`New username, ${username}, set successfully`)
    }

    const changePassword = () => {

        if(newPassword === verifyPassword && newPassword.length >= 8){
            const bodyObj = {
                oldPassword: password,
                newPassword: newPassword,
                verifyPassword: verifyPassword
            }

            // password update

            alert('Password updated successfully')
        }else{
            alert('Old password incorrect or new passwords do not match')
        }


    }

    const cancel = () => {
        setUsername('')
        setPassword('')
        setNewPassword('')
        setVerifyPassword('')
        setOldPassword('')
    }

    return (
        <div id='profile'>
            <section className='profileSection'>
                Change Username

                <p>New Username</p>
                <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                
                <p>Verify Password</p>
                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>

                <button onClick={cancel}>Cancel</button>
                <button onClick={changeUsername}>Submit</button>
            </section>

            <section className='profileSection'>

                <p>Old Password</p>
                <input type='password' value={oldPassword} onChange={(e) => setOldPassword(e.target.value)}/>

                <p>New Password</p>
                <input type='password' value={newPassword} onChange={(e) => setNewPassword(e.target.value)}/>
                
                <p>Verify New Password</p>
                <input type='password' value={verifyPassword} onChange={(e) => setVerifyPassword(e.target.value)}/>

                <button onClick={cancel}>Cancel</button>
                <button onClick={changePassword}>Submit</button>

            </section>
            
        </div>
    )
}

export default Profile
