import React, { useContext } from 'react';

import { Context } from "../context";

export default function Likes({ post }) {
	const { state, dispatch } = useContext(Context);
	const { currentUser } = state;

	function checkIfLikedOrNot() {
		return post.likes.some(like => like.userId === currentUser);
	}

	function likePost() {
		const newLike = {
			likeId: Date.now(),
			userId: currentUser,
		};
		dispatch({ type: 'LIKE_POST', newLike, postId: post.postId });
	}

	function unlikePost() {
		dispatch({ type: 'UNLIKE_POST', postId: post.postId });
	}

	return (
		<div>
			{checkIfLikedOrNot() ? (
				<button onClick={unlikePost}>UnLike</button>
			) : (
				<button onClick={likePost}>Like</button>
			)}

			<span>{post.likes.length}</span>
		</div>
	);
}