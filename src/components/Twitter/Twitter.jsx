import React from 'react';
import { Timeline } from 'react-twitter-widgets';

// import { Container } from './styles';

function Twitter() {
  return (
    <Timeline
      dataSource={{
        sourceType: 'profile',
        screenName: 'notaregistrada',
      }}
      options={{
        height: '400',
        chrome: 'noheader, nofooter',
      }}
    />
  );
}

export default Twitter;
