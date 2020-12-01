import React, { useContext, useState } from "react"
import { Context } from "../context"
function AddComment() {
    const [comment, setComment] = useState("")
    const {name, profile} = useContext(Context)
    function handleClick(e) {
        e.preventDefault()
        setComment(e.target.comment.value)
        e.target.reset()
    }
    return (
        <div className="add__comment">
            <div className="comment">
                <div className="user__profile">
                        <img className="profile__image" src={profile} alt={name}/>
                        <p className="name">{name}</p>
                </div>
                <p>{comment}</p>
            </div>
            <form onSubmit={handleClick}>
                <fieldset>
                    <input 
                    type="text" 
                    placeholder="Add a comment"
                    name="comment"
                    />
                    <button className="post">Post</button>
                </fieldset>
            </form>
        </div>
    )
}
export default AddComment;