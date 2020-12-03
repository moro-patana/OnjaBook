import React, { useContext } from 'react';
import { Context } from '../context';

export default function Feed() {
	const { state, dispatch } = useContext(Context);
	const { posts, loading } = state;
	return (
		<div>
			<h2>Feed</h2>
			{loading && <p>Loading...</p>}
			{!loading && posts && (
				<ul>
					{posts.map(post => (
						<li key={post.postId}>{post.postTextContent}</li>
					))}
				</ul>
			)}
		</div>
	);
}