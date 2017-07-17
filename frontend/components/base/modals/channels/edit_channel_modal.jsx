import { connect } from 'react-redux';
import { updateOneChannel, clearChannelErrors } from '../../../../actions/channel_actions';
import { collapseEditChannelModal } from '../../../../actions/modal_actions';
import { currentChannel } from '../../../../selectors/selectors';
import { withRouter } from 'react-router-dom';
import React from 'react';


class EditChannelModal extends React.Component {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      name: this.props.currentChannel.name,
      purpose: this.props.currentChannel.purpose,
      team_id: this.props.match.params.team_id,
      id: this.props.currentChannel.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.clearChannelErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    e.stopPropagation();
    const channel = this.state;
    return this.props.updateOneChannel(channel);
  }

  handleChange(field) {
    return e => {
        e.stopPropagation();
        this.setState({
        [field]: e.currentTarget.value
      });
    };
  }

  handleCancel(e) {
    e.stopPropagation();
    e.preventDefault();
    this.props.collapseEditChannelModal();
  }

  renderErrors() {
    if(this.props.errors){
      return(
        <ul>
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`} className='form-error-item'>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    return (
      <div className='form-modal'>
        <div className="update-channel-form-container form-container">
          <form onSubmit={this.handleSubmit} className="update-channel-form-box">
            <br/>
            <h3 className='update-channel-form-header form-header'>Update #{this.props.currentChannel.name}</h3>
            <p className='update-channel-form-blerb form-blerb'>Up the channel and justify your random choices of conversation topic</p>
            {this.renderErrors()}
            <div className="update-channel-form form">
              <br/>
              <label htmlFor='name' className='update-channel-form-label form-label'>Channel Name</label>
              <input type="text"
                id='name'
                value={this.state.name}
                onChange={this.handleChange('name')}
                className="update-channel-input form-input"
                ></input>
              <br/>
              <label htmlFor='purpose' className='update-channel-form-label form-label'>Purpose</label>
              <input type="text"
                id='purpose'
                value={this.state.purpose}
                onChange={this.handleChange('purpose')}
                className="update-channel-input form-input"
                ></input>
              <br/>
              <div className='update-channel-form-buttons form-buttons'>
                <button className='update-channel-form-submit form-submit'>Update Channel</button>
                <button onClick={this.handleCancel} className='cancel-update-channel-form form-cancel'>Cancel</button>
              </div>
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

const mapStateToProps = (state, ownProps) => {
  return ({
    errors: state.channels.errors,
    currentChannel: currentChannel(state, ownProps.match.params.channel_id)
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    updateOneChannel: (channel) => dispatch(updateOneChannel(channel)),
    clearChannelErrors: () => dispatch(clearChannelErrors()),
    collapseEditChannelModal: () => dispatch(collapseEditChannelModal())
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditChannelModal);
