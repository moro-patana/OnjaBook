import React, { useState, useContext } from 'react';
import { Context } from '../context';

export default function AddPost() {
	const [postContent, setPostContent] = useState('');
	const [postImage, setPostImage] = useState('http://picsum.photos/100');

	const { state, dispatch } = useContext(Context);
	const { currentUser } = state;

	function handleNewPost(e) {
		e.preventDefault();
		const form = e.target;
		const newPost = {
			postId: Date.now(),
			date: Date.now(),
			postTextContent: postContent,
			userId: currentUser,
			imgUrl: postImage,
			likes: [],
			comments: [],
		};
		console.log({ newPost });
		dispatch({ type: 'ADD_NEW_POST', newPost: newPost });
		resetForm();
	}

	function resetForm() {
		setPostContent('');
		setPostImage('');
	}

	return (
		<div>
			<h2>Add a post</h2>
			<form onSubmit={handleNewPost} className="add-post">
				<label>New post content:</label>
				<textarea
					placeholder="Say what's on your mind..."
					value={postContent}
					name="postContent"
					onChange={e => setPostContent(e.target.value)}
					required
				/>
				<label>New post picture :</label>
				<input
					type="text"
					placeholder="Paste a picture url here"
					value={postImage}
					onChange={e => setPostImage(e.target.value)}
					required
				/>
				<button className="post">Post</button>
			</form>
		</div>
	);
}
