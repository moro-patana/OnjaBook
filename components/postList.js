import React, { useContext } from "react"
import {Context} from "../context"
function PostList() {
    const {state, dispatch} = useContext(Context)
    const {posts, users} = state
console.log(users);
    const element = posts.map(post => {
        const findUserId = users.find(user => user.userId === post.userId)
        console.log(findUserId);
        
        return (
            <article key={post.postId}>
                <header>
                    <div className="user">
                        <img className="profile" src={findUserId.profilePictureUrl} alt={findUserId.userName}/>
                        <p>{findUserId.userName}</p>
                    </div>
                    <p>{post.date}</p>
                </header>
            <div>
                <p>{post.postTextContent}</p>
                <img src={post.imgUrl}/>
            </div>
                <div>
                    <button>Like</button>
                </div>
            {post.comments.map(comment => (
                <div key={comment.commentId}>
                    <img className="profile" src={users.find(user => user.userId === comment.userId).profilePictureUrl}/>
            <p>{users.find(user => user.userId === comment.userId).userName}</p>
                    <p>{comment.commentTextContent}</p>
                </div>
            ))}
          </article>
  
        )
    })
    return (
      <div>
          {element}
      </div>
    )
}
export default PostList;