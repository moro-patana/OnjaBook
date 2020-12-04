import React, { useContext } from 'react';
import { Context } from '../context';
import AddComment from "../components/addComment"

export default function Feed() {
	const { state, dispatch } = useContext(Context);
    const { posts, loading, users, currentUser } = state;
    console.log(posts);
    const currentUserObj = users.find(user => user.userId === currentUser)
    	return (
		<div>
			<h2>Feed</h2>
			{loading && <p>Loading...</p>}
			{!loading && posts && (
				<div>
					{posts.map(post => (
						<div key={post.postId}  className="post_card">
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
                                {post.comments.map(comment => {
                                    const find = users.find(user => user.userId === comment.userId);
                                    
                                    return (
                                        <div key={comment.commentId}>
                                            <div className="post_heading">
                                                <div className="user_profile">
                                                    <img className="profile" src={find.profilePictureUrl} alt={find.userName}/>
                                                    <span>{find.userName}</span>
                                                </div>
                                                <span>{comment.date}</span>
                                            </div>
                                            <p>{comment.commentTextContent}</p>
                                        </div>
                                    )
                                })}
                            </div>
                            <AddComment post={post}/>
                        </div>
					))}
				</div>
			)}
		</div>
	);
}