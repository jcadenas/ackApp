import React from 'react';
import { Link } from 'react-router-dom';



class LandingNav extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    this.props.destroySession();
  }

  logged_in_nav_list() {
    return (
      <ul className='landing-nav-list'>
        <li><button className='landing-nav-list-item-logout' onClick={this.handleLogout}>Log Out</button></li>
      </ul>
    )
  }

  logged_out_nav_list () {
    return(
      <ul className='landing-nav-list'>
        <li className='landing-nav-list-item'><Link to='/signup'>Sign Up</Link></li>
        <li className='landing-nav-list-item'><Link to='/login'>Login</Link></li>
        <li className='landing-nav-list-item'><Link to='/signup?demo_user=updatethislink'>Demo User</Link></li>
      </ul>
    );
  };

  determine_nav(){
    if (this.props.loggedIn){
      return this.logged_in_nav_list()
    } else {
      return this.logged_out_nav_list()
    }
  }

  render () {
    return(
      <div className='landing-wrapper'>
        <nav className='landing-nav'>
          <span className='landing-nav-logo'>Ack!</span>
          {this.determine_nav()}
        </nav>
      </div>
    );
  }

};

export default LandingNav;
