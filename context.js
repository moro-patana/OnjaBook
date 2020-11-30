import React, { useEffect, useState } from "react"
import PostData from "./post.json"

const Context = React.createContext()

function ContextProvider({children}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(PostData)
    },[])
     return (
        <Context.Provider value={{posts}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}