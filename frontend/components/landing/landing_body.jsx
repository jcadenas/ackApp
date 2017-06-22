import React from 'react';
import { Link } from 'react-router-dom';
import LandingBodyContent from './landing_body_content';


class LandingBody extends React.Component {

  render() {
    return(
      <div className='landing-body'>
        <LandingBodyContent />
        <div className='landing-body-styling'/>
      </div>
    );
  }

}

export default LandingBody;
