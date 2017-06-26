import React from 'react';


class CreateMembershipModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      team_id: this.props.match.params.team_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    // TODO handle errors
    // this.props.clearErrors([]);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const membership = this.state;
    return this.props.createMembership(membership);
  }

  handleChange(field) {
    return e => {
        e.stopPropagation();
        this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleCancel(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.collapseCreateMembershipModal();
  }

  currentTeamName () {
    return this.props.state.teams.entities[this.props.match.params.team_id].name;
  }

  renderErrors() {
    // TODO Error Handling
    return undefined;
    // if(this.props.state.teams.errors){
    //   return(
    //     <ul>
    //       {this.props.state.teams.errors.map((error, i) => (
    //         <li key={`error-${i}`} className='session-error-item'>
    //           {error}
    //         </li>
    //       ))}
    //     </ul>
    //   );
    // }
  }

  render() {
    return (
      <div>
        <div className="form-container">
          <form onSubmit={this.handleSubmit} className="form-box">
            <br/>
            <h3 className='form-header'>Add User to {this.currentTeamName()}</h3>
            <p className='form-blerb'>Add a new user & start chattin!</p>
            {this.renderErrors()}
            <div className="form">
              <br/>
              <label htmlFor='name' className='form-label'>Add by Username</label>
              <input type="text"
                id='name'
                value={this.state.username}
                onChange={this.handleChange('username')}
                className="form-input"
                ></input>
              <br/>
              <div className='form-buttons'>
                <button className='form-submit'>Add User</button>
                <button onClick={this.handleCancel} className='cancel-form'>Cancel</button>
              </div>
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default CreateMembershipModal;
