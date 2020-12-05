import React, { useContext, useState } from 'react'
import {Context} from "../context"

export default function AddProfile() {
    const {dispatch} = useContext(Context)
    const [userName, setUserName] = useState("")
    const [profilePicture, setProfilePicture] = useState("https://i.pinimg.com/474x/0b/ff/e5/0bffe5023acabbff7eaa12a9f135a3aa.jpg")
    const [birthDate, setBirthDate] = useState("")
    function createNewUser(e) {
        e.preventDefault()
        const newUser = {
            userId: Date.now().toString(),
            profilePictureUrl:profilePicture,
            userName: userName,
            birthDate: birthDate
        }
        dispatch({type: "ADD_NEW_USER", newUser})
 
     }
    return (
        <div>
            <h2>Add Profile</h2>
            <form onSubmit={createNewUser}>
                <input 
                type="text"
                placeholder="Type the userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}/> 
                <input 
                type="url"
                placeholder="Type your picture url"
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}/> 
                <input 
                type="date"
                placeholder="Type your birthdate"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}/> 
                <button>Save</button>
            </form>
        </div>
    )
}
