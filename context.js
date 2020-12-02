import React, { useEffect, useReducer,useState } from "react"
const Context = React.createContext()
import PostsData from "./post.json"


function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "POST_LIST": return {...state, postList: action.value};
            case "USER": return {...state, user: action.value}
            
        } 
    }, {
        postList: [],
        user: {
            id: 11111,
            userName: "Hallie",
            profile:"https://picsum.photos/100"
        }
        
    });
    useEffect(() => {
        dispatch({type: "POST_LIST", value: PostsData})
    
     }, [])

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

    function addPost(e) {
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
        //  value={{posts, user, setUser, editProfile, addPost}}
        value={{state, dispatch}}
        >
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}