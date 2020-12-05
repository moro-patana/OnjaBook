import React from 'react'
import {Switch, Route, Link} from "react-router-dom"
import AddProfile from "../components/AddProfile"
import SwitchProfile from "../components/SwitchProfile"
import ProfileOptions from "../components/ProfileOptions"

export default function Options() {
    return (
        <div>
            <Link to="/options">Account Options</Link>
            <Link to="/options/add">Add new Profile</Link>
            <Link to="/options/switch">Switch account</Link>

            <Switch>
                <Route exact path="/options"><ProfileOptions/></Route>
                <Route path="/options/add"><AddProfile/></Route>
                <Route path="/options"><SwitchProfile/></Route>
            </Switch>
        </div>
    )
}
