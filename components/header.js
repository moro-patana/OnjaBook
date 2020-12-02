import React, { useContext } from "react"
import { Link } from "react-router-dom"
import {Context } from "../context"
function Header() {
    const {state, dispatch} = useContext(Context)
    const {users} = state
    console.log(users[0]);
        
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
                 <p>UseName</p>
                 {/* {users.map(user => (
                     <p>{console.log(user.userName[0])}</p>
                 ))} */}
    
              </Link>
    
          </div>
        </div>

    )
}
export default Header;