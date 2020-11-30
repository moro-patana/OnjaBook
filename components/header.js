import React from "react"
import { Link } from "react-router-dom"
function Header() {
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
                  <div className="menu">
                      <p>UserName</p>
                      <img src="https://bit.ly/3fPpcpr" alt="My profile"/>
                  </div>
              </Link>
    
          </div>
        </div>

    )
}
export default Header;