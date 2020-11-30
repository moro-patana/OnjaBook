import React from "react"
function AddComment() {
    return (
        <div className="add__comment">
            <form>
                <fieldset>
                    <input type="text" placeholder="Add a commment"/>
                    <button className="post">Post</button>
                </fieldset>
            </form>
        </div>
    )
}
export default AddComment;