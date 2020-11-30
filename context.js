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
    function handleSubmit(e) {
        e.preventDefault();
        const form = e.target
        console.log(input);
        const newPost = {
            photo: form.photo.value,
            legend: form.legend.value,
            like: 0,
            id: Date.now()
        }
        posts.push(newPost)
        setPosts([...posts])
        console.log(posts);
        e.target.reset()
    }
     return (
        <Context.Provider value={{posts, toggleLike, handleSubmit}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}