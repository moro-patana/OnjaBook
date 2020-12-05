import React, { useContext, useState } from "react"
import { Context } from "../context"
function AddComment({ post }) {
    const { state, dispatch } = useContext(Context)
    let { currentUser } = state
    const [newComment, setNewComment] = useState("")
    function addNewComment(e) {
        e.preventDefault()
        const newCommentText = {
            commentId: Date.now(),
            userId: currentUser,
            date: Date.now(),
            commentTextContent: newComment

        }
        dispatch({ type: "ADD_COMMENT_TO_POST", postId: post.postId, newCommentText })
        setNewComment('')
    }
    return (
        <form className="add_comment" onSubmit={addNewComment}>
            <input
                type="text"
                placeholder="Add a comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
            />
            <button className="post">Post</button>
        </form>
    )
}
export default AddComment;