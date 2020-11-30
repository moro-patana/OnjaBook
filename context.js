import React, { useEffect, useState } from "react"
import PostData from "./post.json"

const Context = React.createContext()

function ContextProvider({children}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(PostData)
    },[])
    function toggleLike(id) {
        const likePost = posts.map(post => {
            if (post.id === Number(id)) {
                console.log(post.like);
                return {
                    ...post,
                    like: post.like + 1
                }
            }
            return { ...post };
        })
        setPosts(likePost)
    }
     return (
        <Context.Provider value={{posts, toggleLike}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}