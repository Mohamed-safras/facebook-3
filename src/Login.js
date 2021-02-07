import React,{ useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import { auth } from './firebase'
import {useHistory} from 'react-router-dom'
const Login = () => {

  const [email,setEmail] = useState('');
  const [ password, setPassword ] = useState('')
  const history = useHistory('');

  const Login = (event)=>{
    event.preventDefault();
    auth.signInWithEmailAndPassword(email,password)
    .then((auth)=>{
      
      history.push('/Home');
    }).catch((err)=>{
     console.log(err)
    })
    
  }
  return (
    <div className="login">
      <div className="login__continer">
        <form>
          <center>
            <input  onChange={(e)=>setEmail(e.target.value)} className="email" type="email" placeholder="Email address or phone number" required/>
          </center>
          <center>
            <input onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="password" required/>
          </center>
          <center>
            <button onClick={Login} type="submit">Log In</button>
          </center>
        </form>
        <center>
          <p>Forgotten password?</p>
        </center>
        <center>
          <hr />
        </center>
        <center>
          <Link  to="/register">
            <button className="Register">create New Account</button>
          </Link>
        </center>
      </div>
      <center>
      <h4>Facebook helps you connect and share with the people in your life.</h4>
      </center>
      
    </div>
  );
};

export default Login;
