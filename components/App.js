import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddNewPost from "../components/addNewPost";
import Feed from '../components/Feed'
import Options from "../components/Options"
import Header from "../components/header"

export default function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/" exact>
					<Feed />
				</Route>
				<Route path="/add">
					<AddNewPost />
				</Route>
				<Route path="/options">
					<Options />
				</Route>
			</Switch>
		</div>
	);
}
