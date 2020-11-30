import React from "react"

function UserProfile() {
    return (
        <div className="user__profile">
            <form>
                <h3>Options</h3>
                <fieldset>
                 <label>UserName</label>
                 <input type="text" placeholder="Type your username here"/>
                </fieldset>
                <fieldset>
                 <label>Profile Picture</label>
                 <input type="text" placeholder="Paste a url here"/>
                </fieldset>
                <button className="save">Save</button>

            </form>
        </div>
    )
}
export default UserProfile;