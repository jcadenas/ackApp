import React from 'react';
import { Link } from 'react-router-dom';


class Landing extends React.Component {

  nav_list() {
    return (
      <ul className='landing-nav-list'>
        <li className='landing-nav-list-item'>Sign Up</li>
      </ul>
    );
  }

  render(){
    return(
      <div className='landing-wrapper'>
        <nav className='landing-nav'>
          <span className='landing-nav-logo'>Ack!</span>
          {this.nav_list()}
        </nav>
      </div>
    );
  }

}

export default Landing;
