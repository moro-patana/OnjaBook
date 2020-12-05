import React, { useContext, useState } from 'react'
import {Context} from "../context"

export default function AddProfile() {
    const {dispatch} = useContext(Context)
    const [userName, setUserName] = useState("")
    const [profilePicture, setProfilePicture] = useState("")
    const [birthdate, setBirthdate] = useState("")
    return (
        <div>
            <form>
                <input 
                type="text"
                placeholder="Type the userName"
                value={userName}/> 
                <input 
                type="url"
                placeholder="Type your picture url"
                value={profilePicture}/> 
                <input 
                type="date"
                placeholder="Type your birthdate"
                value={birthdate}/> 
                <button>Save</button>
            </form>
        </div>
    )
}
