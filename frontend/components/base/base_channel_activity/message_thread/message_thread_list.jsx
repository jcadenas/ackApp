import React from 'react';

class MessageThreadList extends React.Component {

  messageThreadListItems() {
    debugger;
    const messageThreadListItemsArray = this.props.channelMessages.map((message) => {
      return (
        <li key={message.id}>
          <span className='message-thread-item-username'>{message.author_username}</span>
          <span className='message-thread-item-body'>{message.body}</span>
        </li>
      );
    });
    debugger;
    return messageThreadListItemsArray;
  }

  render() {
    debugger;
    if(this.props.channelMessages !== undefined) {
      return (
        <ul className='message-thread-list'>
          {this.messageThreadListItems()}
        </ul>
      );
    } else {
      return <span>Uh</span>;
    }

  }

}


export default MessageThreadList;
