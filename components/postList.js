import React, { useContext } from 'react'
import { Context } from "../context"
import AddComment from "./addComment"

function postList() {
    const { posts, user } = useContext(Context)
    console.log(posts);
    return (
        <div>
            {posts.map(post => (
                <article key={post.postId}>
                    {post.postId === user.id 
                    ? <header>
                        <img className="profile" src={user.profile} />
                        <p>{user.userName}</p>
                      </header>
                    : <header>
                        <img className="profile" src={post.userProfile} />
                        <p>{post.userName}</p>
                      </header>}
                    <div>
                        <p>{post.description}</p>
                        <img src={post.imgUrl}/>
                    </div>
                    <div>
                        <button>Like</button>
                        <span>0</span>
                    </div>
                    {post.comment.map(item => (
                        <div>
                            <div className="comment">
                                <img className="profile" src={item.friendProfile}/>
                                <p className="friend">{item.friend}</p>
                            </div>
                            <span className="commentText">{item.commentText}</span>
                        </div>
                    ))}
                    <AddComment/>
                </article>
            ))}
        </div>
    )
}


export default postList

