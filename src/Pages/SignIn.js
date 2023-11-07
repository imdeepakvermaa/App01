import logo from '../Assets/logo.png';

const SignIn = () => {
  return (
    <div className='Signin'>
        <div className='formpage'>
        <h1>Login</h1>
            <form action="#">
                <label>Email</label>
                <input type="text" placeholder='Enter Email' />
                <label>Password</label>
                <input type="text" placeholder='Enter Password' />
            </form>
        </div>
      
    </div>
  )
}

export default SignIn;
