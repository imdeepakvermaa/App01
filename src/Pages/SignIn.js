// import logo from '../Assets/logo.png';

const SignIn = () => {
  return (
    <div class="container">
      <form class="login-form">
        <h2>Login</h2>
        <div className="form">
          <div class="form-group">
            <label for="username">Email</label>
            <br />
            <input
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
