import React from 'react';

class ChannelNavigationHeader extends React.Component {

  constructor(props) {
    super(props);
    this.handleCreateChannel = this.handleCreateChannel.bind(this);
    this.handleCreateSubscription = this.handleCreateSubscription.bind(this);
  }

  handleCreateChannel(e) {
    e.stopPropagation();
    this.props.expandCreateChannelModal();
  }

  handleCreateSubscription(e) {
    e.stopPropagation();
    this.props.expandCreateSubscriptionModal();
  }

  render() {
    return(
      <section className='channel-nav-header nav-header'>
        <span className='channel-nav-header-title nav-header-title' onClick={this.handleCreateSubscription}>Channels</span>
        <i onClick={this.handleCreateChannel} className="fa fa-plus-circle nav-header-create" aria-hidden="true"></i>
      </section>
    );
  }

}

export default ChannelNavigationHeader;
