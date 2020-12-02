import React, {useContext} from "react"
import { Context } from "../context"
function UserProfile() {
    const {user, setUser, editProfile} = useContext(Context)
     return (
        <div className="user__profile">
            <form onSubmit={editProfile}>
                <h3>Options</h3>
                <fieldset>
                 <label>UserName</label>
                 <input 
                 type="text" 
                 placeholder="Type your username here"
                 name="name"
                 />
                </fieldset>
                <fieldset>
                 <label>Profile Picture</label>
                 <input type="url" 
                 name="profile" 
                 placeholder="Paste a url here"
                 />
                </fieldset>
                <button className="save">Save</button>

            </form>
        </div>
    )
}
export default UserProfile;