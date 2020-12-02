import React, {useContext} from "react"
import { Context } from "../context"
function UserProfile() {
    const {state, dispatch} = useContext(Context)
    const { user } = state

    function editProfile(e) {
        e.preventDefault()
        console.log(e.target);
        const newUserProfile = {
            id: Date.now(),
            userName: e.target.name.value,
            profile: e.target.profile.value
        }
        dispatch({type:"EDIT_PROFILE", user: {...user, newUserProfile}})
        // setUser(newUserProfile)
        e.target.reset()

    }
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