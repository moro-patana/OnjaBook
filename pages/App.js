import React from "react"
import { Switch, Route } from "react-router-dom"
import Header from "../components/header"
import PostList from "../components/postList"
function App() {
    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/">
                    <PostList/>
                </Route>
                <Route path="/addPost">
                    Post
                </Route>
            </Switch>
        </div>
    )
}
export default App;