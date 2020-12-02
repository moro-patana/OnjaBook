import React, { useContext } from "react"
import { Link } from "react-router-dom"
import {Context } from "../context"
function Header() {
    const {posts, user} = useContext(Context)
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
                  <div className="menu profile_menu">
                      <p className="name">{user.userName}</p>
                      <img src={user.profile} className="profile"/>
                  </div>
    
              </Link>
    
          </div>
        </div>

    )
}
export default Header;