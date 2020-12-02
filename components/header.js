import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../context"
function Header() {
    const { state, dispatch } = useContext(Context)
    const { users } = state
    const getUser = users.map((user, index) => {
        if (index === 0) {
            return <div>
                <p>
                    {user.userName}
                </p>
                <img className="profile" src={user.profilePictureUrl} alt={user.userName} />
            </div>
        }
    })


    return (
        <div className="page__heading">
            <h1>OnjaBook</h1>
            <div className="page__menu">
                <Link to="/">
                    <p className="menu">Feed</p>
                </Link>

                <Link to="/addPost">
                    <p className="menu">Add a post</p>
                </Link>
                <Link to="/profile">
                    {getUser}
                </Link>

            </div>
        </div>

    )
}
export default Header;