import React  from 'react';
import { Link } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors([]);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    return this.props.processForm(user);
  }

  handleChange(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  header() {
    if (this.props.formType === 'signup'){
      return (
        <h3 className='session-form-header'>Sign Up</h3>
      );
    } else {
      return (
        <h3 className='session-form-header'>Log In</h3>
      );
    }
  }

  blerb() {
    if (this.props.formType === 'signup'){
      return (
        <p className='session-blerb'>Create an account today and get your work on.</p>
      );
    } else {
      return (
        <p className='session-blerb'>Log In! You have missed so much . . .
          Seriously,  get in there  -  Everyone is talking about you. </p>
      );
    }
  }

  username_requirements() {
    if (this.props.formType === 'signup'){
      return (
        <p className='session-input-reqs'>Usernames must be lowercase, shorter than 22 characters, and without special characters, periods or spaces.</p>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  password_requirements() {
    if (this.props.formType === 'signup'){
      return (
        <p className='session-input-reqs'>Passwords must be a minimum of six characters, and without special characters and spaces.</p>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  button_cta() {
    if (this.props.formType === 'signup'){
      return (
        'Create Account'
      );
    } else {
      return (
        'Log In'
      );
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <span className='session-form-orlink'>Don't have an account? <Link to="/signup">Sign Up</Link></span>;
    } else {
      return <span className='session-form-orlink'>Already have an account? <Link to="/login">Log In</Link></span>;
    }
  }

  renderErrors() {
    if(this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  // Currently not used
  esc_button() {
    return (
      <div className='form_escape_button'>
        <i className="fa fa-times-circle-o" aria-hidden="true"></i>
      </div>
    )
  }

  render() {
    return (
      <div>
        <div className="session-form-container">
          <form onSubmit={this.handleSubmit} className="login-form-box">
            <br/>
            {this.header()}
            {this.blerb()}
            {this.renderErrors()}
            <div className="session-form">
              <br/>
              <label htmlFor='username' className='session-form-label'>Username</label>
              <input type="text"
                id='username'
                value={this.state.username}
                onChange={this.handleChange('username')}
                className="session-input"
                ></input>
              {this.username_requirements()}
              <br/>
              <label htmlFor='password' className='session-form-label'>Password</label>
              <input type="password"
                id='password'
                value={this.state.password}
                onChange={this.handleChange('password')}
                className="session-input"
                ></input>
              {this.password_requirements()}
              <br/>
              <div className='session-form-buttons'>
                <button className='session-form-submit'>{this.button_cta()}</button>
                <Link to='/' className='cancel-session-form'>Cancel</Link>
              </div>
              <br/>
              {this.navLink()}
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default SessionForm;
