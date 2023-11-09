// import logo from '../Assets/logo.png';

const SignIn = () => {
  return (
    <div class="sign-container">
      <form class="login-form">
        <h2>Log In</h2>
        <div className="sign-form">
          <div class="form-group">
            <label for="username">Email</label>
            <br />
            <input
            className="sign-input"
              type="text"
              id="username"
              name="username"
              placeholder="Enter Email"
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
              placeholder="Enter password"
              required
            />
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default SignIn;
