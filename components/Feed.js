import React, { useContext } from 'react';
import { Context } from '../context';
import AddComment from "../components/addComment"
import Likes from "../components/Likes"

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
                <article>
                    {posts.map(post => (
                        <div key={post.postId} className="post_card">
                            <div className="post_heading">
                                <div className="user">
                                    <img className="profile-picture" src={currentUserObj.profilePictureUrl} />
                                    <p className="name">{currentUserObj.userName}</p>
                                </div>
                                <p>{new Date(post.date).toLocaleDateString()}</p>
                            </div>
                            <div>
                                <p>{post.postTextContent}</p>
                                <img className="post-image" src={post.imgUrl} />
                            </div>
                            <Likes post={post} />
                            <div className="comment-container">
                                {post.comments.map(comment => {
                                    const find = users.find(user => user.userId === comment.userId);

                                    return (
                                        <div key={comment.commentId} className="post-comment">
                                            <div className="post_heading">
                                                <div className="user_profile">
                                                    <img className="profile-picture" src={find.profilePictureUrl} alt={find.userName} />
                                                    <span className="name">{find.userName}</span>
                                                </div>
                                                <span>{new Date(comment.date).toLocaleDateString()}</span>
                                            </div>
                                            <p className="comment">{comment.commentTextContent}</p>
                                            <hr></hr>
                                        </div>
                                    )
                                })}
                            </div>
                            <AddComment post={post} />
                        </div>
                    ))}
                </article>
            )}
        </div>
    );
}