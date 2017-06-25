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
      <section>
        <span>{this.props.state.session.current_user.username}</span>
        <div onClick={this.handleLogOut}>Log Out</div>
      </section>
    );
  }

}

export default UserSettings;
