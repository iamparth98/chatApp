import React from "react";

const Register = () => {
  return (
    <section className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chatappa</span>
        <span className="title">Register</span>
        <form>
          <input type="text" name="name" id="name" placeholder="Name" />
          <input type="email" name="email" id="email" placeholder="Email" />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />
          <input
            type="file"
            name="displayPicture"
            id="displayPicture"
            // style={{ display: none }}
          />
          <label htmlFor="displayPicture">potato</label>
          <button type="submit">Sign Up</button>
        </form>
        <p>Already have an account? Login</p>
      </div>
    </section>
  );
};

export default Register;
