// import logo from '../Assets/logo.png';

const SignUp = () => {
  return (
    <div className="sign-container">
      <form className="login-form">
        <h2>SignUp</h2>
        <div className="sign-form">
          
          <div className="form-group">
            <label for="username">Email</label>
            <br/>
            <input
            className="sign-input"
            
              type="text"
              id="username"
              name="username"
              placeholder="Enter Email"
              required
            />
          </div>
          
          <div className="form-group">
            <label for="password">Password</label>
            <br />
            <input
            className="sign-input"
              type="password"
              id="password"
              name="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-group">
            <label for="password">Confirm Password</label>
            <br />
            <input
            className="sign-input"
              type="password"
              id="password"
              name="password"
              placeholder="Confirm password"
              required
            />
          </div>
        </div>
        <button type="submit">Signup</button>
        <div className="googlesignin">
          <p>or</p>
          <button className="googlesigninbtn">
            Sign In using Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
