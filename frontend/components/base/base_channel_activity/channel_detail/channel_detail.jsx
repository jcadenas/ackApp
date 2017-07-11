import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { currentChannel } from '../../../../selectors/selectors';
import { destroySubscription } from '../../../../actions/subscription_actions';


class ChannelDetailWrapper extends React.Component {

  constructor (props) {
    super(props);

    this.handleLeave = this.handleLeave.bind(this);
  }

  componentWillReceiveProps(newProps){

    // Handle leaving
    if (this.props.currentChannel && !newProps.currentChannel) {
      newProps.history.push(`/messages/${newProps.currentTeamId}/${newProps.teams[newProps.currentTeamId].channels_by_id[0]}`);
    }
  }

  handleLeave(e) {
    e.stopPropagation();
    this.props.destroySubscription(this.props.currentChannel.id);
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
                <i className="fa fa-user-circle-o fa-user-circle-o-channel-detail" aria-hidden="true"></i>
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
            <span>Edit</span>
            <span>Delete</span>
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
    currentTeamId: ownProps.currentTeamId
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {

  return ({
    destroySubscription: (channel_id) => dispatch(destroySubscription(channel_id))
  })
};


export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetailWrapper));
