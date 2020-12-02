import React, { useEffect, useReducer, useState } from "react"
const Context = React.createContext()
import PostsData from "./post.json"


function ContextProvider({children}) {
    const [state, dispatch] = useReducer((state, action) => {
        switch(action.type) {
            case "POST_LIST": return {...state, postList: action.postList};
            case "USER": return {...state, user: action.value}
            case "ADD_NEW_POST":
                return {
                    ...state, postList: action.postList}
                
            
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
        dispatch({type: "POST_LIST", postList: PostsData})
    
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

    
    function addComment(e) {
     e.preventDefault()
     const newComment = {
         friend: user.userName,
         friendProfile: user.profile,
         commentText: e.target.comment.value
     }
     setPosts([...posts, newComment])

    }
    return (
        <Context.Provider
        value={{state, dispatch}}
        >
            {children}
        </Context.Provider>
    )
}
export {ContextProvider, Context}