import React from 'react';
import CreateSubscriptionListItemContainer from './create_subscription_list_item_container';


class CreateSubscriptionModal extends React.Component {
  constructor(props) {
    super(props);
    this.handleDone = this.handleDone.bind(this);
  }

  componentDidMount() {
  }

  handleDone(e) {
    e.preventDefault();
    e.stopPropagation();
    this.props.collapseCreateSubscriptionModal();
  }

  handleChange(field) {
  }

  handleCancel(e) {
  }

  renderErrors() {
  }

  listItemsDisplay() {
    let listItemsToDisplay = this.props.nonUserTeamChannelsArr.map((channelId) => (
      <CreateSubscriptionListItemContainer channelId={channelId} />
    ));

    return listItemsToDisplay;

  }

  render() {
    return (
      <div className='form-modal'>
        <div className="create-subscription-form-container form-container">
          <form onSubmit={this.handleDone} className="create-subscription-form-box form-box">
            <br/>
            <h3 className='create-subscription-form-header form-header'>Join Channels</h3>
            <p className='create-subscription-form-blerb form-blerb'>Find and Join the Channels that you would like...to...join...? And start chattin!</p>
            <div className="create-subscription-form form">
              <br/>
              <ul className='create-subscription-list'>
                {this.listItemsDisplay()}
              </ul>
              <br/>
              <div className='create-subscription-form-buttons form-buttons'>
                <button className='create-subscription-form-done form-submit'>Done</button>
              </div>
              <br/>
            </div>
          </form>
        </div>
      </div>
    );
  }


}

export default CreateSubscriptionModal;
