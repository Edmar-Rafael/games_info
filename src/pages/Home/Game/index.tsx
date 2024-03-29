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
  LineContainer, 
  PulsingBorder
} from './styles';
import { MetaCritic } from '../../../components';
import { ItemProps } from '../../../@Types/types'

type GameProps = {
  isLast: boolean;
  item: ItemProps;
}


function Game({ item, isLast }: GameProps) {

  return (
    <Anchor href={`/game/resume/${item.id}`}>
      <GameContainer>
        <PulsingBorder>
          <ImgGame image={item.background_image} />
        </PulsingBorder>
        <InfoContainer>
          <GameTitle>
            {item.name}
          </GameTitle>
          { item.platforms && 
            <GamePlatforms>
            { item.platforms.map((platform, index: number) => 
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