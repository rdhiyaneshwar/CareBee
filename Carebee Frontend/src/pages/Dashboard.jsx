import React from 'react';
import '../assets/css/Dash.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Navigation from './Navbar';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUtensils, faLeaf, faBath, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';
import PieChart from './Piechart';


const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <>
      <div className='dash'>
          <div className="dashboard-container">
        <header className="header">
        <h1 className='mag'>
  <i className="fas fa-tachometer-alt"></i> <span className="first-letter">Dash</span>
  <span className="second-letter">board</span>
</h1>
<Link to="/" className="logout-button">
      <i className="fas fa-sign-out-alt"></i> Logout
    </Link>
        </header>
        <main className="main-content">
          <div className="sidebar">
          <ul className="nav-menu">
  <li className="nav-item">
    <Link to="/home">
      <FontAwesomeIcon icon={faHome} className="icon" />
      HOME
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/diet">
      <FontAwesomeIcon icon={faUtensils} className="icon" />
      DIET
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/ecohaven">
      <FontAwesomeIcon icon={faLeaf} className="icon" />
      ECO-HAVEN
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/sanitation">
      <FontAwesomeIcon icon={faBath} className="icon" />
      SANITATION
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/mobilizing">
      <FontAwesomeIcon icon={faUsers} className="icon" />
      MOBILIZING
    </Link>
  </li>
  <li className="nav-item">
    <Link to="/feedback">
      <FontAwesomeIcon icon={faComments} className="icon" />
      FEEDBACK
    </Link>
  </li>
</ul>
          </div>
          <div className="content">
            {/* Four Cool Cards */}
            <div className="cardj">
              <h2 className='jani'>WELCOME {user.email}</h2>
              <p> "To our Elderly Home, where every day is a new chapter filled with warmth and care." </p>
            </div>
            <div className='cardcontainer'>
  <div className="cardmjani">
    <i className="fas fa-user fa-3x"></i>
    <h2>ELDERLY INDIVIDUAL</h2>
    <p>"Your comfort and well-being are our top priorities."<p>
"We provide personalized care and companionship for you."</p></p>
  </div>
  <div className="cardmjani1">
    <i className="fas fa-users fa-3x"></i>
    <h2>FAMILY</h2>
    <p>"We treat you like a member of our own family."
      <p>
"Count on us to support and care for your loved ones."
</p></p>
  </div>
  <div className="cardmjani2">
    <i className="fas fa-hands-helping fa-3x"></i>
    <h2>CARE TAKER</h2>
    <p>"Let us lighten your load and assist you in your caregiving journey."
      <p>
"Our dedicated team is here to lend a helping hand."</p></p>
  </div>

          <div className="pie-chart">
    <h2>People's Choice</h2>
    <PieChart />
  </div>
  </div>
  </div>

        </main>
      </div>
      </div>
    </>
  );
};

export default Dashboard;