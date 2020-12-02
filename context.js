import React, { createContext, useReducer,useEffect } from 'react';
import PostData from "./post.json"
import UserData from "./user.json"
const Context = createContext();
function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
                case "SET_POST": 
                 return {...state, posts: action.value}
                case "SET_USERS": 
                return {...state, users: action.value}
			}
		},
		{
			posts: [],
			users: [],
			// userLoggedIn: '',
		}
    );
    useEffect(() => {
        dispatch({type:"SET_POST", value: PostData})
        dispatch({type:"SET_USERS", value: UserData})
    }, [])
	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}
export { Context, ContextProvider };