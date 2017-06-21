import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup">Sign up!</Link>
  </nav>
);

const personalGreeting = (currentUser, destroySession) => (
	<div className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={destroySession}>Log Out</button>
	</div>
);

const Greeting = ({ currentUser, destroySession }) => {
  return(
    currentUser ? personalGreeting(currentUser, destroySession) : sessionLinks()
  );

};

export default Greeting;
