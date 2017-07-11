import React from 'react';
import * as _ from 'lodash';


class MessageThreadList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      channelMessages: this.props.channelMessages
    }

  }

  componentDidMount() {
    Pusher.logToConsole = true;

    var pusher = new Pusher('4d8588d7933b16b4135c', {
      cluster: 'us2',
      encrypted: true
    });

    var channel = pusher.subscribe('new-message');
    channel.bind(`new-message-channel-${this.props.currentChannelId}`, (data) => {
      this.props.createdOneMessage(data)
    });
  }

  messageThreadListItems() {
    const messageThreadListItemsArray = this.props.channelMessages.map((message) => {
      return (
        <li key={message.id}>
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
          <div className='message-thread-list-item-text-container'>
            <span className='message-thread-item-username'>{message.author_username}</span>
            <span className='message-thread-item-body'>{message.body}</span>
          </div>
        </li>
      );
    });
    return messageThreadListItemsArray;
  }

  componentDidUpdate() {
    if(this.bottom){
      this.bottom.scrollIntoView();
    }
   }

  render() {
    if(this.props.channelMessages !== undefined) {
      return (
        <ul className='message-thread-list'>
          {this.messageThreadListItems()}
          <div ref={el => this.bottom = el}></div>
        </ul>
      );
    } else {
      return <span>Uh</span>;
    }

  }

}


export default MessageThreadList;
