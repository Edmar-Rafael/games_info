import React from 'react';
import dayjs from 'dayjs'
import { 
  Anchor,
  GameContainer,
  GamePlatforms, 
  GameRelease, 
  GameTitle, 
  ImgGame, 
  InfoContainer, 
  LineContainer 
} from './styles';
import { MetaCritic } from '../../../components';


function Game({ item, isLast }) {

  return (
    <Anchor href={`/game/resume/${item.id}`}>
      <GameContainer>
        <ImgGame image={item.background_image} />
        <InfoContainer>
          <GameTitle>
            {item.name}
          </GameTitle>
          { item.platforms && 
            <GamePlatforms>
            { item.platforms.map((platform, index) => 
              `${platform.platform.name}${item.platforms.length - 1 === index ? "" : ", "}`
            )}
            </GamePlatforms>
          }
          { item.released && 
            <GameRelease size={14}>
              {'Released date: '} 
              <GameRelease>{dayjs(item.released).format('MMM DD, YYYY')}</GameRelease>
            </GameRelease>
          }
          <MetaCritic item={item} />
        </InfoContainer>
      </GameContainer>
      <LineContainer isLast={isLast}/>
    </Anchor>
  )
}

export default Game;