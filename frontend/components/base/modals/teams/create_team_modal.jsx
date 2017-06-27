import React from 'react';


class CreateTeamModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const team = this.state;
    return this.props.createTeam(team);
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
    this.props.collapseCreateTeamModal();
  }

  renderErrors() {
    if(this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className='session-error-item'>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className='form-modal'>
        <div className="create-team-form-container form-container">
          <form onSubmit={this.handleSubmit} className="create-team-form-box">
            <br/>
            <h3 className='create-team-form-header form-header'>Create New Team</h3>
            <p className='create-team-form-blerb form-blerb'>Create a new team and begin chatting with your coworkers faster</p>
            {this.renderErrors()}
            <div className="create-team-form form">
              <br/>
              <label htmlFor='name' className='create-team-form-label form-label'>Team Name</label>
              <input type="text"
                id='name'
                value={this.state.name}
                onChange={this.handleChange('name')}
                className="create-team-input form-input"
                ></input>
              <br/>
              <label htmlFor='description' className='create-team-form-label form-label'>Description</label>
              <input type="text"
                id='description'
                value={this.state.description}
                onChange={this.handleChange('description')}
                className="create-team-input form-input"
                ></input>
              <br/>
              <div className='create-team-form-buttons form-buttons'>
                <button className='create-team-form-submit form-submit'>Create Team</button>
                <button onClick={this.handleCancel} className='cancel-create-team-form form-cancel'>Cancel</button>
              </div>
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default CreateTeamModal;
