import React from "react"
import { Switch, Route } from "react-router-dom"
import Header from "../components/header"
import PostList from "../components/postList"
import AddNewPost from "../components/addNewPost"
import UserProfile from "../components/userProfile"
function App() {
    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <PostList/>
                </Route>
                <Route path="/addPost">
                    <AddNewPost/>
                </Route>
                <Route path="/profile">
                    <UserProfile/>
                </Route>
            </Switch>
        </div>
    )
}
export default App;