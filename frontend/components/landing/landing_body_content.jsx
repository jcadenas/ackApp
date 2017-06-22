import React from 'react';
import { Link } from 'react-router-dom';


class LandingBodyContent extends React.Component {

  render() {
    return(
      <div className='landing-body-content'>
        <div className='landing-body-content-cta'>
          <span>Where work</span><i className="fa fa-asterisk fa-fw-big-ast" aria-hidden="true"></i><span>happens.</span>
        </div>
        <div className='landing-body-content-desc'>
          <p><i className="fa fa-asterisk fa-fw fa-fw-little-ast" aria-hidden="true"></i>Whatever work means for you, Ack! brings all the
            pieces and people you need together so you can get things done.</p>
        </div>
        <Link to='/signup' className='landing-body-content-cta-link'>Get Started</Link>
        <div className='landing-body-content-signin'>
          <span>Already joined an Ack! team? <Link to='/login'>Log in</Link></span>
        </div>

      </div>
    );
  }

}

export default LandingBodyContent;
