import React, { useContext, useState } from "react"
import { Context } from "../context"

function AddNewPost() {
    const {state, dispatch} = useContext(Context)
    const { postList, user } = state;
    const [photo, setPhoto] = useState("")
    const [legend, setLegend] = useState("")

    function handleSubmit(e) {
      e.preventDefault();
        console.log(e.target);
      const newPost = {
          id: 11111,
          userProfile: user.profile,
          userName: user.userName,
          imgUrl: e.target.photo.value,
          description: e.target.description.value,
          likes: 0,
          comment: [
              {
              friend: "Delancy",
              friendProfile: "http://picsum.photos/10",
              commentText: "Nice baby"
              }
          ]
      }
      dispatch({type:"ADD_NEW_POST", postList: [...postList, newPost]})
  }
    
    return (
     <div className="form__group">
         <form onSubmit={handleSubmit}>
          <fieldset>
              <label>New Post:</label>
              <textarea 
              name="description"
              placeholder="What's in your mind"
              />
          </fieldset>
          <fieldset>
              <label>Picture url:</label>
              <input 
              type="text" 
              name="photo"
              placeholder="Type Url"
              />
          </fieldset>
          <button className="save">Save</button>
         </form>
     </div>
    )
}
export default AddNewPost;