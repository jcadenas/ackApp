import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import SettingsMenuContainer from './settings_menu/settings_menu_container';
import ChannelNavigationContainer from './channel_navigation/channel_navigation_container';


class BaseNavigation extends React.Component{

  render(){
    return (
      <nav className='base-navigation'>
        <SettingsMenuContainer baseCurrentTeamId={this.props.baseCurrentTeamId} />
        <ChannelNavigationContainer baseCurrentTeamId={this.props.baseCurrentTeamId} baseCurrentChannelId={this.props.baseCurrentChannelId} />
      </nav>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    baseCurrentTeamId: ownProps.baseCurrentTeamId,
    baseCurrentChannelId: ownProps.baseCurrentChannelId
  });
};


export default withRouter(connect(
  mapStateToProps,
  null
)(BaseNavigation));
