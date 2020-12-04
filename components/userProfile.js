import React, { useState, useContext, useEffect } from 'react';
import { Context } from "../context";

export default function UserProfile() {
	const { state, dispatch } = useContext(Context);
	const { users, currentUser } = state;
	const [userName, setUserName] = useState('');
	const [profilePictureUrl, setProfilePictureUrl] = useState('');

	// we get the full current user object back, so we have a name and picture instead of just an id
	const currentUserObj = users.find(user => user.userId === currentUser) || {
		userName: '',
		profilePictureUrl: '',
	};

	// at the beginning, the users array will be empty. so we want to update our inputs with the good values when it will be updated!
	useEffect(() => {
		setUserName(currentUserObj.userName);
		setProfilePictureUrl(currentUserObj.profilePictureUrl);
	}, [users]);

	function handleNewOptions(e) {
		e.preventDefault();
		dispatch({ type: 'UPDATE_CURRENT_USER', userName, profilePictureUrl });
	}
	return (
		<div>
			<h2>Profile Options</h2>
			<form onSubmit={handleNewOptions} className="profile-post">
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
				<button className="save">Save</button>
			</form>
		</div>
	);
}