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
        <p className='session-blerb'>Create an account today and get your work on</p>
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
        <p className='session-username-reqs'>Usernames must be lowercase, shorter than 22 characters, and without special characters, periods or spaces.</p>
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
        <p className='session-password-reqs'>Passwords must be a minimum of six characters, and without special characters and spaces.</p>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">sign up</Link>;
    } else {
      return <Link to="/login">log in</Link>;
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

  render() {
    return (
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
              <Link to='/' className='cancel-session-form'>Cancel</Link>
              <input type="submit" value="Submit" />
            </div>
            <br/>
            or {this.navLink()}
          </div>
        </form>
      </div>
    );
  }


}

export default SessionForm;
