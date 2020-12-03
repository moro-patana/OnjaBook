import React, { useContext } from 'react';
import { Context } from '../context';

export default function Feed() {
	const { state, dispatch } = useContext(Context);
    const { posts, loading, users, currentUser } = state;
    const currentUserObj = users.find(user => user.userId === currentUser)
    	return (
		<div>
			<h2>Feed</h2>
			{loading && <p>Loading...</p>}
			{!loading && posts && (
				<div>
					{posts.map(post => (
						<div key={post.postId}>
                             <div className="post_heading">
                                 <div className="user">
                                    <img className="profile" src={currentUserObj.profilePictureUrl}/>
                                    <p className="name">{currentUserObj.userName}</p>
                                  </div>
                                  <p>{post.date}</p>
                             </div>
                            <div>
                                <p>{post.postTextContent}</p>
                                <img src={post.imgUrl}/>
                            </div>
                            <div>
                                <button>Like</button>
                            </div>
                            <div>
                                {post.comments.map(comment => (
                                    
                                    <p key={comment.commentId}>{comment.commentTextContent}</p>
                                ))}
                            </div>
                        </div>
					))}
				</div>
			)}
		</div>
	);
}