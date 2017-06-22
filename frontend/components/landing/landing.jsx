import React from 'react';
import { Link } from 'react-router-dom';
import LandingNav from './landing_nav';
import LandingBody from './landing_body';


class Landing extends React.Component {

  render(){
    return(
      <div className='landing-wrapper'>
        <LandingNav />
        <LandingBody />
      </div>
    );
  }

}

export default Landing;
