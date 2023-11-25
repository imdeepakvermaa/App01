// import logo from '../Assets/logo.png';

const SignIn = () => {
  return (
    <div class="sign-container">
      <form class="login-form">
        <div className="basic-headings">
          <h2>Sign In</h2>
          <h5>New to BillBuddy ? <a href="# ">Sign Up on the BillBuddy </a></h5>
        </div>
        <div className="sign-form">
          <div class="form-group">
            <label for="username">Email</label>
            <br />
            <input
              className="sign-input"
              type="text"
              id="username"
              name="username"
              placeholder="john@gmail.com"
              required
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <br />
            <input
              className="sign-input"
              type="password"
              id="password"
              name="password"
              placeholder="Abcd123@"
              required
            />
          </div>
        </div>
        <button type="submit">Login</button>
        <div className="googlesignin">
          <h4>or</h4>
          <button className="googlesigninbtn">
            Sign In using Google
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
