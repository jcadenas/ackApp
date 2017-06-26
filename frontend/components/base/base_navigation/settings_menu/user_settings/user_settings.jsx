import React from 'react';

class UserSettings extends React.Component {

  constructor (props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(e) {
    e.stopPropagation();
    this.props.destroySession();
  }

  render () {
    return (
      <section className='user-settings'>
        <section className='user-settings-header'>
          <i className="fa fa-grav" aria-hidden="true"></i>
          <div className='user-settings-usernames'>
            <span className='user-settings-username-header'>{this.props.current_user.username}</span>
            <span className='user-settings-username-handle'>@{this.props.current_user.username}</span>
          </div>
        </section>
        <ul className='user-settings-list'>
          <li className='user-settings-logout' onClick={this.handleLogOut}>Log Out</li>
        </ul>
      </section>
    );
  }

}

export default UserSettings;
