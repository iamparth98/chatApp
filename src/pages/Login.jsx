import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <div className="formContainer">
        <span>Panda Chat</span>
        <div className="formWrapper">
          <form>
            <input type="email" name="email" id="" placeholder="Email" />
            <input
              type="password"
              name="password"
              id=""
              placeholder="Password"
            />
            <button type="submit">Login</button>
            <span>
              Don&apos;t have an account? <Link to="/register">Rgister</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
