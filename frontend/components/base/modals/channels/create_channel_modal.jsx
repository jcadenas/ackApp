import React from 'react';


class CreateChannelModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      purpose: '',
      team_id: this.props.match.params.team_id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.clearChannelErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const channel = this.state;
    return this.props.createChannel(channel);
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
    this.props.collapseCreateChannelModal();
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

  render() {
    return (
      <div className='form-modal'>
        <div className="create-channel-form-container form-container">
          <form onSubmit={this.handleSubmit} className="create-channel-form-box">
            <br/>
            <h3 className='create-channel-form-header form-header'>Create New Channel</h3>
            <p className='create-channel-form-blerb form-blerb'>Create a new channel and justify your random choices of conversation topic</p>
            {this.renderErrors()}
            <div className="create-channel-form form">
              <br/>
              <label htmlFor='name' className='create-channel-form-label form-label'>Channel Name</label>
              <input type="text"
                id='name'
                value={this.state.name}
                onChange={this.handleChange('name')}
                className="create-channel-input form-input"
                ></input>
              <br/>
              <label htmlFor='purpose' className='create-channel-form-label form-label'>Purpose</label>
              <input type="text"
                id='purpose'
                value={this.state.purpose}
                onChange={this.handleChange('purpose')}
                className="create-channel-input form-input"
                ></input>
              <br/>
              <div className='create-channel-form-buttons form-buttons'>
                <button className='create-channel-form-submit form-submit'>Create Channel</button>
                <button onClick={this.handleCancel} className='cancel-create-channel-form form-cancel'>Cancel</button>
              </div>
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default CreateChannelModal;
