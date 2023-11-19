import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/Navbar.css';
import 'font-awesome/css/font-awesome.min.css';
import cblogo from '../assets/img/logo.png';

const Navigation = () => {
  const handleLogout = () => {
    localStorage.removeItem('Token');
    localStorage.removeItem('uid');
    window.location.href = '/';
  };
  return (
    <nav className='landingNav'>
      <ul className='landingUl'>
      <img className='logoimg' src={cblogo} alt="Logo" />
        CareBee
        <Link to='/home'>
          <li className='LandList1'><i className="fa fa-home"></i> HOME</li>
        </Link>
        <li class="dropdown">
      <div class="LandList">OUR SERVICES</div>
      <div class="dropdown-content">
        <Link to="/Diet">Diet</Link>
        <Link to="/Eco">Eco-Haven</Link>
        <Link to="/Sanitation">Sanitation</Link>
        <Link to="/Physio">Mobilizing</Link>
      </div>
    </li>
        <Link to='/feedback'>
          <li className='LandList'><i className="fa fa-envelope"></i> FEEDBACK</li>
        </Link>
        <Link to='/'>
          <li onClick={handleLogout} className='LandList'><i className="fa fa-lock"></i> LOGOUT</li>
        </Link>
        <Link to='/Form'>
          <li className='LandList'><i class="fa fa-wpforms"></i> FORM</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;