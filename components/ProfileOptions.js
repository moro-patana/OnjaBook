import React, { useState, useContext, useEffect } from 'react';
import {Context } from "../context";

export default function ProfileOptions() {
	const { state, dispatch } = useContext(Context);
	const { users, currentUser } = state;
	const [userName, setUserName] = useState('');
	const [profilePictureUrl, setProfilePictureUrl] = useState('');

	const currentUserObj = users.find(user => user.userId === currentUser) || {
		userName: '',
		profilePictureUrl: '',
	};
	useEffect(() => {
		setUserName(currentUserObj.userName);
		setProfilePictureUrl(currentUserObj.profilePictureUrl);
	}, [users]);

	function handleNewOptions(e) {
		e.preventDefault();
		dispatch({ type: 'UPDATE_CURRENT_USER', userName, profilePictureUrl });
		alert('Profile updated successfully');
	}
	return (
		<div>
			<h2>Profile Options</h2>
			<form onSubmit={handleNewOptions}>
				<input
					type="text"
					value={userName}
					onChange={e => setUserName(e.target.value)}
					required
				/>
				<input
					type="url"
					value={profilePictureUrl}
					onChange={e => setProfilePictureUrl(e.target.value)}
					required
				/>
				<button>Save</button>
			</form>
		</div>
	);
}