import React from 'react';


class EditTeamModal extends React.Component {
  constructor(props) {
    super(props);
    let currentTeamId = this.props.match.params.team_id;
    let currentTeam = this.props.state.teams.entities[currentTeamId];
    this.state = {
      name: currentTeam.name,
      description: currentTeam.description,
      id: this.props.match.params.team_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors([]);
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const team = this.state;
    debugger;
    return this.props.updateOneTeam(team);
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
    this.props.editTeamToggle();
  }

  renderErrors() {
    if(this.props.state.teams.errors){
      return(
        <ul>
          {this.props.state.teams.errors.map((error, i) => (
            <li key={`error-${i}`} className='session-error-item'>
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
    );
  }

  render() {
    return (
      <div>
        <div className="create-team-form-container">
          <form onSubmit={this.handleSubmit} className="create-team-form-box">
            <br/>
            <h3 className='create-team-form-header'>Edit Team</h3>
            <p className='create-team-form-blerb'>Edit your team and begin actually making sense when you chat with your coworkers.</p>
            {this.renderErrors()}
            <div className="create-team-form">
              <br/>
              <label htmlFor='name' className='create-team-form-label'>Team Name</label>
              <input type="text"
                id='name'
                value={this.state.name}
                onChange={this.handleChange('name')}
                className="create-team-input"
                ></input>
              <br/>
              <label htmlFor='description' className='create-team-form-label'>Description</label>
              <input type="text"
                id='description'
                value={this.state.description}
                onChange={this.handleChange('description')}
                className="create-team-input"
                ></input>
              <br/>
              <div className='create-team-form-buttons'>
                <button className='create-team-form-submit'>Update Team</button>
                <button onClick={this.handleCancel} className='cancel-create-team-form'>Cancel</button>
              </div>
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default EditTeamModal;
