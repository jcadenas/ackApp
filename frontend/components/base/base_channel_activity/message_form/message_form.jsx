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

  componentWillReceiveProps (newProps) {
    if (this.props.currentChannelId !== newProps.currentChannelId){
      this.setState({channel_id: newProps.currentChannelId })
    }
  }

  handleSubmit(e) {
    //debugger;
    e.preventDefault();
    e.stopPropagation();
    const message = this.state;
    debugger;
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
    debugger;
    return (
      <div className="create-message-form-container">
        <form onSubmit={this.handleSubmit} className="create-message-form-box">
          <div className="create-team-form">
            <input type="text"
              id='body'
              value={this.state.body}
              onChange={this.handleChange('body')}
              className="create-message-input"
              placeholder='Press Enter to Send'>
            </input>
          </div>
        </form>
      </div>
    );
  }


}

export default MessageForm;
