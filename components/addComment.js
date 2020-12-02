import React, { useContext }  from "react"
import { Context } from "../context"
function AddComment() {
    const {addNewComment} = useContext(Context)
    return (
        <div className="add__comment">
            <form>
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