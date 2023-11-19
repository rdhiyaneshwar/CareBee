import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/css/Login.css';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginUser } from '../redux/authAction';
import { useDispatch } from 'react-redux';
import { userRegister,userLogin } from '../services/api';
import Chatbot from '../pages/ChatbotComponent';

const LoginSignUp = () => {
  const user=1;
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const dispatch=useDispatch();


  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
  
    const res=await userLogin(loginData)
    console.log(res)
  

    if (((res.status)===200)) {
        
      toast.success('Login successful!', { position: 'top-center' });
      const getuid=(res.data.uid);
      localStorage.setItem('uid',getuid)
      console.log(res)
      localStorage.setItem('Token',res.data.token)
      dispatch(loginUser(loginData));
      
      const adminRegex = /^[^\s@]+@admin\.com$/;
      if (adminRegex.test(loginData.email)) {
          navigate('/dash');
          return;
      } 
      const userRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (userRegex.test(loginData.email)) {
        navigate('/Dashboard');
        return;
    } 
      }
     else {       
        toast.error('Login failed. Please check your credentials and try again.', { position: 'top-center' });
      }
    };
  
    const handleSignupSubmit = async (e) => {
        e.preventDefault();
      
        
        const {name, email, password } = signupData;
      
        
        if (!name || !email || !password) {
          toast.error('Please fill in all fields.', { position: 'top-center' });
          return;
        }     
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          toast.error('Invalid email address. Please enter a valid email.', { position: 'top-center' });
           user=1;
          return;
        }
         
        if (password.length < 6) {
          toast.error('Password must be at least 6 characters long.', { position: 'top-center' });
          return;
        }    
        
          try {
            const res = await userRegister(signupData);
            console.log(res);
            if (res.data === "User registered successfully") {
              toast.success(` Signup Successful !`, {
                position: "top",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log(res.data);

                navigate('/');

            }
          } catch (error) {
            console.error("Error during registration:", error);
          }
        
        }       
      
  
  return (
    <>
     <div className='dui'>
      <div className="container11">
        <div className="container1">
          <input id="register_toggle" type="checkbox" />
          <div className="slider">
            <form className="form" onSubmit={handleLoginSubmit}>
              <span className="title1">Login</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={loginData.email}
                  onChange={handleLoginChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  value={loginData.password}
                  onChange={handleLoginChange}
                />
              </div>
              <button type="submit">Login</button>

              <span className="bottom_text">
                Don't have an account?{' '}
                <label className="switch" htmlFor="register_toggle">
                  Sign Up
                </label>{' '}
              </span>
            </form>
            <form className="form" onSubmit={handleSignupSubmit}>
              <span className="title1">Sign Up</span>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={signupData.name}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={signupData.email}
                  onChange={handleSignupChange}
                />
              </div>
              <div className="form_control">
                <input
                  required
                  className="input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={signupData.password}
                  onChange={handleSignupChange}
                />
              </div>

              <button type="submit">Sign Up</button>

              <span className="bottom_text">
                Already have an account?{' '}
                <label className="switch" htmlFor="register_toggle">
                  Log In
                </label>{' '}
              </span>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
      
      
     
      </div>
      <Chatbot/>
    </>
  );
};

export default LoginSignUp;