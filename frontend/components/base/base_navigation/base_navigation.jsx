import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter } from 'react-router-dom';
import SettingsMenuContainer from './settings_menu/settings_menu_container';
import ChannelNavigationContainer from './channel_navigation/channel_navigation_container';
import SettingsMenuWrapper from './settings_menu/settings_menu_wrapper';


class BaseNavigation extends React.Component{

  componentDidMount() {

  }

  render(){
    return (
      <nav className='base-navigation'>
        <SettingsMenuWrapper />
        <Route path='/messages/:team_id' component={ChannelNavigationContainer}  />
      </nav>
    );
  }
}


export default BaseNavigation;
