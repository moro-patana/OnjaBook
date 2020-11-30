import React, { useContext } from "react"
import { Context } from "../context"

function PostList() {
    const {posts} = useContext(Context)
    return (
       <div>
           {posts.map(post => (
               <article className="post">
                   <div className="user__profile">
                       <p>{post.userName}</p>
                   </div>
                   <img src={post.photo} alt={post.legend}/>
                   <p>{post.legend}</p>
                   <div className="post__like">
                       <button className="like">Like</button>
                       <span>{post.like}</span>
                   </div>
               </article>
           ))}
       </div>
    )
}
export default PostList;