import React from 'react';
import MessageThreadWrapperContainer from './message_thread/message_thread_wrapper_container';
import MessageFormContainer from './message_form/message_form_container';
import ChannelDetail from './channel_detail/channel_detail';

class BaseChannelActivity extends React.Component {

  render() {
    return (
      <div className='base-channel-activity'>
        <ChannelDetail currentTeamId={this.props.match.params.team_id} currentChannelId={this.props.match.params.channel_id} />
        <MessageThreadWrapperContainer currentTeamId={this.props.match.params.team_id} currentChannelId={this.props.match.params.channel_id} />
        <MessageFormContainer currentTeamId={this.props.match.params.team_id} currentChannelId={this.props.match.params.channel_id} />
      </div>
    );
  }
}

export default BaseChannelActivity;
