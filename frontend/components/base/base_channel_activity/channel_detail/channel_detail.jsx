import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { currentChannel, userTeamChannels } from '../../../../selectors/selectors';
import { destroySubscription } from '../../../../actions/subscription_actions';
import { destroyChannel } from '../../../../actions/channel_actions';

class ChannelDetailWrapper extends React.Component {

  constructor (props) {
    super(props);

    this.handleLeave = this.handleLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillReceiveProps(newProps){
    debugger;
    // Handle leaving
    if (this.props.currentChannel && newProps.userTeamChannels.length > 0 && !newProps.userTeamChannels.includes(this.props.currentChannel.id)) {
      debugger;
      newProps.history.push(`/messages/${newProps.currentTeamId}/${newProps.userTeamChannels[0]}`);
    }
  }

  handleLeave(e) {
    debugger;
    e.stopPropagation();
    this.props.destroySubscription(this.props.currentChannel.id);
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.destroyChannel(this.props.currentChannel.id);
  }


  render() {
    debugger;
    if(this.props.currentChannel) {
      return(
        <section className='channel-detail'>
          <div className='channel-detail-display'>
            <span className='channel-detail-header-name'>
              <span className='channel-detail-header-name-hash'>#</span>
              {this.props.currentChannel.name}
            </span>
            <div className='channel-detail-attributes'>
              <div className='channel-user-count'>
                <i className="fa fa-user-o fa-user-o-channel-detail" aria-hidden="true"></i>
                <span>
                  {this.props.currentChannel.subscribers_by_id.length}
                </span>
              </div>
              <div className='channel-detail-purpose'>
                purpose: {this.props.currentChannel.purpose}
              </div>
            </div>
          </div>
          <div className='channel-detail-functions'>
            <span onClick={this.handleLeave}>Leave</span>
            <span onClick={this.handleDelete}>Delete</span>
            <span>Edit</span>
          </div>
        </section>
      );
    } else {
      return <span>Channel Detail Nada</span>
    }
  }

};


const mapStateToProps = (state, ownProps) => {
  return ({
    currentChannel: currentChannel(state, ownProps.currentChannelId),
    currentTeamId: ownProps.currentTeamId,
    userTeamChannels: userTeamChannels(state, ownProps)
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    destroySubscription: (channel_id) => dispatch(destroySubscription(channel_id)),
    destroyChannel: (channel_id) => dispatch(destroyChannel(channel_id))
  });
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetailWrapper));
