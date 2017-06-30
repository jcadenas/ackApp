import React from 'react';

class MessageThreadList extends React.Component {

  messageThreadListItems() {
    //debugger;
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
    //debugger;
    return messageThreadListItemsArray;
  }

  render() {
    //debugger;
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
