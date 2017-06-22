import React from 'react';
import { Link } from 'react-router-dom';


const nav_list = () => {
  return(
    <ul className='landing-nav-list'>
      <li className='landing-nav-list-item'><Link to='/signup'>Sign Up</Link></li>
      <li className='landing-nav-list-item'><Link to='/login'>Login</Link></li>
      <li className='landing-nav-list-item'><Link to='/signup?demo_user=updatethislink'>Demo User</Link></li>
    </ul>
  );
};

const LandingNav = () => {

  return(
    <div className='landing-wrapper'>
      <nav className='landing-nav'>
        <span className='landing-nav-logo'>Ack!</span>
        {nav_list()}
      </nav>
    </div>
  );


};

export default LandingNav;
