import React, { useContext } from 'react'
import { Context } from "../context"
import AddComment from "./addComment"

function postList() {
    const { state, dispatch} = useContext(Context)
    const {postList} = state
    return (
        <div>
            {postList.map(post => (
                <article key={post.postId}>
                      <header>
                        <img className="profile" src={post.userProfile} />
                        <p>{post.userName}</p>
                      </header>
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

