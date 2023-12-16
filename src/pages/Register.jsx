import { Link } from "react-router-dom";
import "../styles/styles.scss";
function Register() {
  return (
    <div className="register">
      <div className="formContainer">
        <span className="title">Panda Chat</span>
        <div className="formWrapper">
          <form>
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" id="" placeholder="Email" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <input type="file" />
            <button type="submit"> Sign Up</button>
          </form>
          <span className="text">
            Already have an account? <Link to="/login">Login</Link>
          </span>
        </div>
      </div>
    </div>
  );
}
export default Register;
