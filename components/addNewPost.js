import React, { useContext, useState } from "react"
import { Context } from "../context"

function AddNewPost() {
    const {handleSubmit} = useContext(Context)
    const [photo, setPhoto] = useState("")
    const [legend, setLegend] = useState("")
    
    return (
     <div className="form__group">
         <form onSubmit={handleSubmit}>
          <fieldset>
              <label>New Post:</label>
              <textarea 
              name="legend"
              value={legend}
              onChange={(e) => setLegend(e.target.value)}/>
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
          <button className="save">Save</button>
         </form>
     </div>
    )
}
export default AddNewPost;