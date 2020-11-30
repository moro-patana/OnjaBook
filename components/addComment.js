import React, { useState } from "react"
function AddComment() {
    const [comment, setComment] = useState("")
    function handleClick(e) {
        e.preventDefault()
        setComment(e.target.comment.value)
        e.target.reset()
    }
    return (
        <div className="add__comment">
            <div className="comment">
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