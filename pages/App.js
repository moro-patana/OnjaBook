import React from "react"
import { Switch, Route } from "react-router-dom"
import Header from "../components/header"
import PostList from "../components/postList"
function App() {
    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route path="/">
                    <PostList/>
                </Route>
            </Switch>
        </div>
    )
}
export default App;