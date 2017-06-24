import React from 'react';
import SettingsMenuContainer from './settings_menu/settings_menu_container';


const BaseNavigation = () => {
  return (
    <nav className='base-navigation'>
      <SettingsMenuContainer />
    </nav>
  );
}

export default BaseNavigation;
