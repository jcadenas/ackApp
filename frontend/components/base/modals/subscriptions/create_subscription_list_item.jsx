import React from 'react';


class CreateSubscriptionListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const subscription = { channel_id: this.props.currentChannelId };
    this.props.createSubscription(subscription);
  }

  handleChange(field) {
  }

  handleCancel(e) {
  }

  renderErrors() {
  }

  currentChannel() {
    return this.props.channels[this.props.currentChannelId];
  }

  render() {
    const currentChannel = this.currentChannel();
    return (
      <li className='create-subscription-list-item'>
        <form onSubmit={this.handleSubmit} className='create-subscription-list-item-form'>
          <div className='create-subscription-list-item-description'>
            <span className='create-subscription-list-item-name'>{currentChannel.name}</span>
            <span className='create-subscription-list-item-purpose'>{currentChannel.purpose}</span>
          </div>
          <div className='create-subscription-form-buttons form-buttons'>
            <button className='form-join-channel-button'>Join</button>
          </div>
        </form>
      </li>
    );
  }


}

export default CreateSubscriptionListItem;
