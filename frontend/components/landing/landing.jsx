import React from 'react';
import { Link } from 'react-router-dom';
import LandingNavContainer from './landing_nav_container';
import LandingBody from './landing_body';


class Landing extends React.Component {

  render(){
    return(
      <div className='landing-wrapper'>
        <LandingNavContainer />
        <LandingBody />
      </div>
    );
  }

}

export default Landing;
