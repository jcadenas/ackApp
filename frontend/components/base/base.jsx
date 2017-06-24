import React from 'react';
import BaseNavigation from './base_navigation/base_navigation';
import BaseChannelActivity from './base_channel_activity/base_channel_activity';

const Base = () => {
  return(
    <div className='all-of-base'>
      <BaseNavigation />
      <BaseChannelActivity />
    </div>
  );
};

export default Base;
