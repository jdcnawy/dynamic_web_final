import React, { useState } from "react";
import styles from "./components.module.css";

const CreatePostForm = ({ createPostFunction }) => {
  const [imageUpload, setImageUpload] = useState();

  return (
    <div className={styles.CreatePostForm}>
      <h2>Create a Post!</h2>
      <form onSubmit={(e) => createPostFunction(e, imageUpload)}>
      <label htmlFor="albumTitle">Album Title</label>
        <input type="text" id="albumTitle" name="albumTitle" />

        <label htmlFor="artist">Artist</label>
        <input type="text" id="artist" name="artist" />

        <label htmlFor="review">Review</label>
        <textarea id="review" name="review"></textarea>
        <label htmlFor="image">Image</label>
        <input
          type="file"
          id="image"
          name="image"
          placeholder="Choose image"
          accept="image/png,image/jpeg,image/gif"
          onChange={(e) => {
            setImageUpload(e.target.files[0]);
          }}
        />
        <button type="submit">Create Post</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
