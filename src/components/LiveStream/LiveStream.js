import React, { useEffect } from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const LiveStream = () => {
  useEffect(() => {
    // Additional initialization or event handling can be done here
    return () => {
      // Cleanup or teardown logic can be performed here
    };
  }, []);

  return (
    <div className="live-stream">
      <TwitchEmbed
        channel="ESL_DOTA2"
        width="100%"
        height="500px"
        layout="video"
      />
    </div>
  );
};

export default LiveStream;