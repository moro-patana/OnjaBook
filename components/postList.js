import React, { useContext } from "react"
import { Context } from "../context"
import AddComment from "./addComment"

function PostList() {
    const {posts, toggleLike, profile, name} = useContext(Context)
    return (
       <div className="post__container">
           {posts.map(post => (
               <article key={post.id} className="post">
                   <div className="user__profile">
                       <img className="profile__image" src={post.profile} alt={post.userName}/>
                       <p className="name">{post.userName}</p>
                   </div>
                   <p>{post.legend}</p>
                   <img src={post.photo} alt={post.legend}/>
                   <div className="post__like">
                       <button className="like" onClick={() => toggleLike(post.id)}>Like</button>
                       <span>{post.like}</span>
                   </div>
                   <div className="post__comment">
                   <div className="user__profile">
                       <img className="profile__image" src={post.userProfile} alt={post.user}/>
                       <p className="name">{post.user}</p>
                   </div>
                   <p>{post.comment}</p>
                   </div>
                   <AddComment/>
               </article>
           ))}
       </div>
    )
}
export default PostList;