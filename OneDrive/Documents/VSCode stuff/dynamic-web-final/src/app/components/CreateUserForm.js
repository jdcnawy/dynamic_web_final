// Importing necessary modules and styles
import React from "react";
import styles from "./components.module.css";

const CreateUserForm = ({ createUser }) => {
  return (
    <div className={styles.CreateUserForm}>
      <h2>Create an Account!</h2>
      <form onSubmit={(e) => createUser(e)}>
        <label htmlFor="name">Username</label>
        <input type="name" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" />

        <label htmlFor="aboutMe">About Me</label>
        <textarea
          id="aboutMe"
          name="aboutMe"
        ></textarea>

        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUserForm;
