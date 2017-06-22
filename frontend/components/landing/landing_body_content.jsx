import React from 'react';
import { Link } from 'react-router-dom';


class LandingBodyContent extends React.Component {

  render() {
    return(
      <div className='landing-body-content'>
        <div className='landing-body-content-cta'>
          <span>Where work<span className='big-asterisk'>*</span> happens.</span>
        </div>
        <div className='landing-body-content-desc'>
          <p><span className='little-asterisk'>*</span>Whatever work means for you, Ack! brings all the
            pieces and people you need together so you can get things done</p>
        </div>
        <div className='landing-body-content-button'>
          <button>Get Started</button>
        </div>
        <div className='landing-body-content-signin'>
          <span>Already joined an Ack! team? <Link to='/login'>Sign in</Link></span>
        </div>

      </div>
    );
  }

}

export default LandingBodyContent;
