import React, { useContext } from 'react';
import { Context } from '../context';

export default function SwitchProfile() {
	const { state, dispatch } = useContext(Context);
	const { users, currentUser } = state;
	const usersOptions = users.map(user => (
		<option key={user.userId} value={user.userId}>
			{user.userName}
		</option>
	));
	function switchAccount(e) {
		e.preventDefault();
		const newUserId = e.target.userSelect.value;
		console.log(newUserId);
		dispatch({ type: 'SWITCH_USER_ACCOUNT', newUserId });
	}
	return (
		<div>
			<form onSubmit={switchAccount}>
				<select name="userSelect" defaultValue={currentUser}>
					{usersOptions}
				</select>
				<button>Save</button>
			</form>
		</div>
	);
}
