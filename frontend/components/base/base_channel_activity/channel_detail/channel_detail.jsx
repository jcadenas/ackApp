import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { currentChannel, userTeamChannels } from '../../../../selectors/selectors';
import { destroySubscription } from '../../../../actions/subscription_actions';
import { destroyChannel } from '../../../../actions/channel_actions';
import { expandEditChannelModal } from '../../../../actions/modal_actions';

class ChannelDetailWrapper extends React.Component {

  constructor (props) {
    super(props);

    this.handleLeave = this.handleLeave.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  componentWillReceiveProps(newProps){

    // Handle leaving
    if (this.props.currentChannel && newProps.userTeamChannels.length > 0 && !newProps.userTeamChannels.includes(this.props.currentChannel.id)) {

      newProps.history.push(`/messages/${newProps.currentTeamId}/${newProps.userTeamChannels[0]}`);
    }
  }

  handleLeave(e) {

    e.stopPropagation();
    this.props.destroySubscription(this.props.currentChannel.id);
  }

  handleDelete(e) {
    e.stopPropagation();
    this.props.destroyChannel(this.props.currentChannel.id);
  }

  handleEdit(e) {
    e.stopPropagation();
    this.props.expandEditChannelModal();
  }


  render() {

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
            <span className='edit-channel-button' onClick={this.handleEdit}>Edit</span>
            <span className='leave-channel-button' onClick={this.handleLeave}>Leave</span>
            <span className='delete-channel-button' onClick={this.handleDelete}>Delete</span>
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
    destroyChannel: (channel_id) => dispatch(destroyChannel(channel_id)),
    expandEditChannelModal: () => dispatch(expandEditChannelModal())
  });
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetailWrapper));
