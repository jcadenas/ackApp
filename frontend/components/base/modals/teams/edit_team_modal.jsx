import React from 'react';


class EditTeamModal extends React.Component {
  constructor(props) {
    super(props);
    let currentTeamId = this.props.match.params.team_id;
    let currentTeam = this.props.teams[currentTeamId];
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
    this.props.collapseEditTeamModal();
  }

  renderErrors() {
    if(this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className='form-error-item'>
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
      <div className='form-modal'>
        <div className="edit-team-form-container form-container">
          <form onSubmit={this.handleSubmit} className="edit-team-form-box form-box">
            <br/>
            <h3 className='edit-team-form-header form-header'>Edit Team</h3>
            <p className='edit-team-form-blerb form-blerb'>Edit your team and begin actually making sense when you chat with your coworkers.</p>
            {this.renderErrors()}
            <div className="edit-team-form form">
              <br/>
              <label htmlFor='name' className='edit-team-form-label form-label'>Team Name</label>
              <input type="text"
                id='name'
                value={this.state.name}
                onChange={this.handleChange('name')}
                className="edit-team-input form-input"
                ></input>
              <br/>
              <label htmlFor='description' className='edit-team-form-label form-label'>Description</label>
              <input type="text"
                id='description'
                value={this.state.description}
                onChange={this.handleChange('description')}
                className="edit-team-input form-input"
                ></input>
              <br/>
              <div className='edit-team-form-buttons form-buttons'>
                <button className='edit-team-form-submit form-submit'>Update Team</button>
                <button onClick={this.handleCancel} className='cancel-edit-team-form form-cancel'>Cancel</button>
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
