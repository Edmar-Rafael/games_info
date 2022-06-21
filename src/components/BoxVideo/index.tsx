import React from 'react';
import YouTube, { Options } from 'react-youtube';
import { Video } from './styles';

type BoxVideoProps = {
  gameById: {
    clip: {
      video: string;
    };
  }
}


function BoxVideo({gameById}: BoxVideoProps) {

  const opts: Options = {
    height: '211',
    width: '407',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    }
  }

  if(gameById && gameById.clip && gameById.clip.video){
    return (
      <Video>
        <YouTube videoId={gameById.clip.video} opts={opts }/>
      </Video>
    );
  }
  
  return null
}

export default BoxVideo;