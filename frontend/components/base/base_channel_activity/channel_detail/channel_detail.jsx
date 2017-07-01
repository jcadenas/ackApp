import React from 'react';
import { connect } from 'react-redux';
import { currentChannel } from '../../../../selectors/selectors';


class ChannelDetailWrapper extends React.Component {

  render() {
    if(this.props.currentChannel) {
      return(
        <section className='channel-detail'>
          <div className='channel-detail-display'>
            <span className='channel-detail-header-name'>
              <span className='channel-detail-header-name-hash'>#</span>
              {this.props.currentChannel.name}
            </span>
            <div>
              <div className='channel-user-count'>
                <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                <span>
                  {this.props.currentChannel.subscribers_by_id.length}
                </span>
              </div>
              <span>
                purpose: {this.props.currentChannel.purpose}
              </span>
            </div>
          </div>
          <div>
            <span>Leave</span>
            <span>Edit</span>
            <span>Delete</span>
          </div>
        </section>
      );
    } else {
      return <span>Channel Detail Nada</span>
    }
  }

}


const mapStateToProps = (state, ownProps) => {

  return ({
    currentChannel: currentChannel(state, ownProps.currentChannelId)
  })

}


export default connect(
  mapStateToProps,
  null
)(ChannelDetailWrapper)
