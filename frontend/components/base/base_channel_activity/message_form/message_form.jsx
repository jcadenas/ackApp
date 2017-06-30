import React from 'react';


class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: '',
      channel_id: this.props.currentChannelId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(e) {
    debugger;
    e.preventDefault();
    e.stopPropagation();
    const message = this.state;
    this.props.createMessage(message);
    this.setState({body: ''})
  }

  handleChange(field) {
    return e => {
        e.stopPropagation();
        this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  renderErrors() {
  }

  render() {
    return (
      <div className="create-message-form-container">
        <form onSubmit={this.handleSubmit} className="create-message-form-box">
          <div className="create-team-form">
            <input type="text"
              id='body'
              value={this.state.body}
              onChange={this.handleChange('body')}
              className="create-message-input form-input"
              placeholder='Press Enter to Send'>
            </input>
          </div>
        </form>
      </div>
    );
  }


}
// <div className='create-team-form-buttons'>
//   <button className='create-message-form-submit'>Send</button>
// </div>

export default MessageForm;
