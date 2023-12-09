import React, {useState} from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";
import validCredentials from './passus';


const Login = ({fun}) =>{
  
  const [username, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();



   function handleclick(event) {
    event.preventDefault();

    const isValidCredentials = validCredentials.some(
      (cred) => cred.username === username && cred.password === password
    );

    if (isValidCredentials) {
      fun(false);
      navigate('/dashboard');
    } else {
      alert('Invalid credentials. Please try again.');
    }
  }


    return(
        <div className='p-3 mb-2 top-50 start-50 end-50 translate-middle" maindiv'>
          <div class="text-center">
          <img src="https://imagizer.imageshack.com/img923/9871/xsdreo.png" alt="logo" border="0"/>
          </div>
            <div className='input input-group float-start'>
              <form  action="submit" id='lg'>
                <div class='form-floating mb-4'>
                <input type="text" class="form-control" placeholder='Username' name='username' onChange={(e) => setUserName(e.target.value)}/>
                <label for="floatingInput">username</label>
                </div>
                <div class="form-floating mb-4">
                <input type="password" class="form-control" placeholder="Password" name="password" id="" onChange={(e) => setPassword(e.target.value)} />
                <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating position">
                <button type="submit" class="btn floatingbtn btn-lg btn-success" formAction='submit' form='lg' onClick={handleclick}>Login</button>
                </div>
                <div class="form-floating position ftdiv">
                <p className='ft'>Forgot Password?</p>

                </div>
                
              </form>

              
            
          </div>
        </div>
      )
    }
    
    export default Login;