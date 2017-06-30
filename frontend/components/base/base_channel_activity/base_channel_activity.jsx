import React from 'react';
import MessageThreadWrapperContainer from './message_thread/message_thread_wrapper_container';
import MessageFormContainer from './message_form/message_form_container';

class BaseChannelActivity extends React.Component {

  render() {
    //debugger;
    return (
      <div className='base-channel-activity'>
        <div className='channel-detail'>Hello from Base Channel Detail!</div>
        <MessageThreadWrapperContainer currentTeamId={this.props.match.params.team_id} currentChannelId={this.props.match.params.channel_id} />
        <MessageFormContainer currentTeamId={this.props.match.params.team_id} currentChannelId={this.props.match.params.channel_id} />
      </div>
    );
  }
}

export default BaseChannelActivity;
