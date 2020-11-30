import React, { useContext } from "react"
import { Context } from "../context"
import AddComment from "./addComment"

function PostList() {
    const {posts, toggleLike} = useContext(Context)
    return (
       <div className="post__container">
           {posts.map(post => (
               <article key={post.id} className="post">
                   <div className="user__profile">
                       <img className="profile__image" src="https://bit.ly/37m6KRs" alt="my profile"/>
                       <p className="name">Hallie Cheyenne</p>
                   </div>
                   <p>{post.legend}</p>
                   <img src={post.photo} alt={post.legend}/>
                   <div className="post__like">
                       <button className="like" onClick={() => toggleLike(post.id)}>Like</button>
                       <span>{post.like}</span>
                   </div>
                   <AddComment/>
               </article>
           ))}
       </div>
    )
}
export default PostList;