import React from 'react';
import { Link, Route } from 'react-router-dom';
import MessageThreadListContainer from './message_thread_list_container';

class MessageThreadWrapper extends React.Component {

  componentDidMount() {
    this.props.fetchChannelMessages(this.props.currentChannelId);
  }

  componentWillReceiveProps(newProps){

    if (this.props.currentChannelId !== newProps.currentChannelId){
      this.props.fetchChannelMessages(newProps.currentChannelId);
    }

  }

  render() {
    return (
      <section className='message-thread'>
        <MessageThreadListContainer currentChannelId={this.props.currentChannelId} channelMessages={this.props.channelMessages} />
      </section>
    );
  }

}


export default MessageThreadWrapper;
