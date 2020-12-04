import React, {useContext} from "react"
import { Context } from "../context"
function AddComment() {
    const {state, dispatch} = useContext(Context)
    let {posts} = state
    function comment(e) {
        e.preventDefault()
        const newComment = {
                commentId: "3",
                userId: "1",
                date: 1606974894366,
                commentTextContent: e.target.value

        }
        posts: [...posts, newComment]
        dispatch({type:"ADD_NEW_COMMENT", postList: posts})
    }

    return (
        <div className="add__comment">
            <form onSubmit={comment}>
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