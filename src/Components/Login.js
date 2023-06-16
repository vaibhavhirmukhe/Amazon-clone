import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase';
import "../Style/Login.css"

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn= e =>{
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password).then((auth) => {
            navigate('/')
      })
      .catch(error => alert(error.message))
  }

  const register= e =>{
      e.preventDefault();

      auth.createUserWithEmailAndPassword(email, password).then((auth) => {
        // it successfully create new user with email and password
        if (auth){
            navigate('/')
        }
        // console.log(auth);
      })
      .catch(error => alert(error.message))
  }

  
  return (
    <div className='login'>
        <Link to="/">
            <img src="https://pngimg.com/uploads/amazon/amazon_PNG7.png" alt="error" className="login_logo" />
        </Link>

        <div className="login_container">
            <h1>Sign-In</h1>

            <form>
                <h5>E-mail</h5>
                <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

                <h5>Password</h5>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

                <button type='submit' onClick={signIn} className='login_signInButton'>
                    Sign In
                </button>
            </form>
            
            <p>By continuing, you agree to Amazon's fake clone Conditions of Use and Privacy Notice.</p>

            <small>New to Amazon?</small>
            
            <button onClick={register} className='login_registerButton'>
                Create your Amazon Account
            </button>
        </div>
    </div>
  )
}
