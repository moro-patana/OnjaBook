import React from "react"
import { Switch, Route } from "react-router-dom"
import Header from "../components/header"
import PostList from "../components/postList"
import AddNewPost from "../components/addNewPost"
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
            </Switch>
        </div>
    )
}
export default App;