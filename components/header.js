import React, { useContext } from "react"
import { Link } from "react-router-dom"
import {Context } from "../context"
function Header() {
    const {profile, name} = useContext(Context)
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
                  <p className="menu menu__profile">
                      <span>{name}</span>
                      <img className="profile__image" src={profile} alt={name}/>
                  </p>
              </Link>
    
          </div>
        </div>

    )
}
export default Header;