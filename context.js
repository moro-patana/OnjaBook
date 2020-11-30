import React, { useEffect, useState } from "react"
import PostData from "./post.json"

const Context = React.createContext()

function ContextProvider({children}) {
    const [posts, setPosts] = useState([])
    const [profile, setProfile] = useState("https://bit.ly/37m6KRs")
    const [name, setName] = useState("Hallie Cheyenne")

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
        console.log(form.photo.value);

        const newPost = {
            photo: form.photo.value,
            legend: form.legend.value,
            like: 0,
            id: Date.now()
        }
        console.log(newPost);
        setPosts([...posts, newPost])
        e.target.reset()
    }
     return (
        <Context.Provider value={{posts, toggleLike, handleSubmit, profile, name}}>
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}