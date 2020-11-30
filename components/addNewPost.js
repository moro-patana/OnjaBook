import React, { useState } from "react"
import { Context } from "../context"

function AddNewPost() {
    const {handleSubmit} = useState(Context)
    const [photo, setPhoto] = useState("")
    const [legend, setLegend] = useState("")
    
    return (
     <div className="form__group">
         <form onSubmit={handleSubmit}>
          <fieldset>
              <label>New Post:</label>
              <textarea 
              placeholder="Say what's in your mind"
              name={legend}
              onChange={(e) => setLegend(console.log(e.target.value))}
              ></textarea>
          </fieldset>
          <fieldset>
              <label>Picture url:</label>
              <input 
              type="text" 
              name="photo"
              placeholder="Type Url"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              />
          </fieldset>
          <button type="submit" className="save">Save</button>
         </form>
     </div>
    )
}
export default AddNewPost;