import React from "react"
import { Link } from "react-router-dom"
function Header() {
    return (
        <div className="page__heading">
          <Link to="/">
              <p className="menu">Feed</p>
          </Link>

          <Link to="/styles">
             <p className="menu">Add a post</p>
          </Link>
           <Link to="/addsong">
              <div className="menu">
                  <p>UserName</p>
                  <img src="https://bit.ly/3fPpcpr" alt="My profile"/>
              </div>
          </Link>

        </div>

    )
}
export default Header;