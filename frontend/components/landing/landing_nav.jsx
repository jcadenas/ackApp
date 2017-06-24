import React from 'react';
import { Link } from 'react-router-dom';



class LandingNav extends React.Component {

  constructor(props){
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleLoginDemoUser = this.handleLoginDemoUser.bind(this);
  }

  handleLogout(e) {
    this.props.destroySession();
  }

  loggedInNavList() {
    return (
      <ul className='landing-nav-list'>
        <li><button className='landing-nav-list-item-logout' onClick={this.handleLogout}>Log Out</button></li>
      </ul>
    );
  }

  handleLoginDemoUser(e){
    this.props.logInDemoUser({ username:'GobBluth', password:'GobBluth' });
    this.props.history.push('/messages');
  }

  loggedOutNavList () {
    return(
      <ul className='landing-nav-list'>
        <li className='landing-nav-list-item'><Link to='/signup'>Sign Up</Link></li>
        <li className='landing-nav-list-item'><Link to='/login'>Login</Link></li>
        <li><button onClick={this.handleLoginDemoUser} className='landing-nav-log-in-demo'>Demo User</button></li>
      </ul>
    );
  }

  determine_nav(){
    if (this.props.loggedIn){
      return this.loggedInNavList();
    } else {
      return this.loggedOutNavList();
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

}

export default LandingNav;
