import React from "react"

function AddNewPost() {
    return (
     <div className="form__group">
         <form>
          <fieldset>
              <label>New Post:</label>
              <textarea placeholder="Say what's in your mind"></textarea>
          </fieldset>
          <fieldset>
              <label>Picture url:</label>
              <input type="text" placeholder="Type Url"/>
          </fieldset>
          <button className="save">Save</button>
         </form>
     </div>
    )
}
export default AddNewPost;