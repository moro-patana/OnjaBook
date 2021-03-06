import React, { createContext, useReducer, useEffect } from 'react';
import postsData from './postsData.json';
import usersData from './usersData.json';

const Context = createContext();

function ContextProvider({ children }) {
	const [state, dispatch] = useReducer(
		(state, action) => {
			switch (action.type) {
				case 'LOAD_JSON_DATA': {
					return {
						...state,
						loading: false,
						posts: postsData,
						users: usersData,
					};
				}
				case 'ADD_NEW_POST': {
					return {
						...state,
						posts: [...state.posts, action.newPost],
					};
				}
				case 'UPDATE_CURRENT_USER': {
					const newUsersArray = state.users.map(user => {
						if (user.userId === state.currentUser) {
							// update the user and return it
							return {
								...user,
								userName: action.userName,
								profilePictureUrl: action.profilePictureUrl,
							};
						}
						return user;
					});
					return {
						...state,
						users: newUsersArray,
					};
				}
				case "LIKE_POST": {
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							return {
								...post,
								likes: [...post.likes, action.newLike]
							}
						}
						return post
					})
					return {
						...state,
						posts: newPosts
					}
				}
				case "UNLIKE_POST": {
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							return {
								...post,
								likes: post.likes.filter(like => like.userId !== state.currentUser)
							}
						}
						return post
					})
					return {
						...state,
						posts: newPosts
					}
				}
				case "ADD_COMMENT_TO_POST": {
					const newPosts = state.posts.map(post => {
						if (post.postId === action.postId) {
							return {
								...post,
								comments: [...post.comments, action.newCommentText]
							}
						}
						return post
					})
					return {
						...state,
						posts: newPosts
					}
				}
				case "SWITCH_USER_ACCOUNT": {
					return {
						...state,
						currentUser: action.newUserId
					}
				}
				case "ADD_NEW_USER": {
					return {
						...state,
						users: [...state.users, action.newUser]
					}
				}
				default: {
					console.error('No actions defined for', action.type);
					break;
				}
			}
			return state;
		},
		{
			loading: true,
			posts: [],
			users: [],
			comments: [],
			comment: "",
			currentUser: '1',
		}
	);

	useEffect(() => {
		setTimeout(() => {
			'';
			dispatch({ type: 'LOAD_JSON_DATA' });
		}, 1000);
	}, []);

	return <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>;
}

export { Context, ContextProvider };