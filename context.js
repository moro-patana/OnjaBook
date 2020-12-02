import React, { useEffect, useState } from "react"
const Context = React.createContext()
import PostsData from "./post.json"


function ContextProvider({children}) {
    const [posts, setPosts] = useState([])
    console.log(posts);
    const [user, setUser] = useState({
            userName: "Hallie", 
            id: 11111, 
            profile:"https://picsum.photos/100"})

    useEffect(() => {
        setPosts(PostsData)
    },[])
    function editProfile(e) {
        e.preventDefault()
        const newUserProfile = {
            id: Date.now(),
            userName: e.target.name.value,
            profile: e.target.profile.value
        }
        setUser(newUserProfile)
        e.target.reset()

    }

    function addNewPost(e) {
          e.preventDefault()
        const newPost = {
            id: 11111,
            userProfile: user.profile,
            userName: user.userName,
            imgUrl: e.target.photo.value,
            description: e.target.description.value,
            comment: [
                {
                friend: "Delancy",
                friendProfile: "http://picsum.photos/10",
                commentText: "Nice baby"
                }
            ]
        }
        setPosts([...posts, newPost])
    }
    // function addComment(e) {
    //  e.preventDefault()
    //  const newComment = {
    //      friend: user.userName,
    //      friendProfile: user.profile,
    //      commentText: e.target.comment.value
    //  }
    //  setPosts([...posts, newComment])

    // }
    return (
        <Context.Provider
         value={{posts, user, setUser, editProfile, addNewPost}}
        >
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}