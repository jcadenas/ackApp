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


  listItemsDisplay() {
    let listItemsToDisplay = this.props.nonUserTeamChannelsArr.map((channelId) => (
      <CreateSubscriptionListItemContainer key={channelId} channelId={channelId} />
    ));
    if (listItemsToDisplay.length > 0) {
      return listItemsToDisplay;
    } else {
      return (
        <li className="form-blerb">
          There are no channels to join at this time  -  Create a new Channel today!
        </li>
      )
    }

  }

  render() {
    return (
      <div className='form-modal'>
        <div className="create-subscription-form-container form-container">
          <form onSubmit={this.handleDone} className="create-subscription-form-box form-box">
            <br/>
            <h3 className='create-subscription-form-header form-header'>Browse Channels</h3>
            <p className='create-subscription-form-blerb form-blerb'>Join interesting channels and be a part of the conversation!</p>
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
