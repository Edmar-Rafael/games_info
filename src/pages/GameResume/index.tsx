import React, { useState, useEffect} from 'react'
import dayjs from 'dayjs'
import { mapPlatforms } from '../../utils'
import reddit from '../../images/reddit.png'
import { 
  BoxVideo, 
  Button, 
  Container, 
  Icons, 
  LinkStore, 
  LoaderS, 
  MetaCritic, 
  ModalGame, 
  Row,
  Separator
} from '../../components'
import { 
  AboutResume, 
  AboutText, 
  BoxResume, 
  BoxZ, 
  DateBox, 
  DateRelease, 
  GamePublishers, 
  LinkOfficial, 
  LinkReddit, 
  PlatformIcon, 
  PlatformsContainer, 
  Playtime, 
  RedditIcon, 
  RedditLinkOfficial, 
  Resume, 
  ResumeBox, 
  StoreWraper, 
  Title 
} from './styles'
import { useNavigate, useParams } from 'react-router-dom'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { requestGamesListById } from '../../store/ducks/gamesListById'
import { GameIdDataProps, useAppDispatch, useAppSelector } from '../../@Types/types'


function GameResume() {
  const [showAbout, setShowAbout] = useState(false)
  const {data: gameIdData, loading}: GameIdDataProps = useAppSelector(
    ({gamesListByIdState}) => gamesListByIdState
  )

  const params = useParams()
  const navigate = useNavigate()
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(requestGamesListById(Number(params.id)))
  }, [dispatch, params.id])


  return (
    <Container>
      <Separator y={50}/>
      {loading ? (
      <LoaderS/>
      ) : (
      <BoxResume image={gameIdData.background_image}>
        <BoxZ >
            <Button onClick={() => navigate('/')} back_home>
              <Icons icon={faArrowLeft} back_home/>
            </Button>
          <Row>
            <Title>{gameIdData.name}</Title>
            { gameIdData.released && 
              <DateBox>
                <DateRelease>{dayjs(gameIdData.released).format('MMM DD, YYYY')}</DateRelease>
              </DateBox>
            }
          </Row>
          <Row>
            <PlatformsContainer>
            { gameIdData.parent_platforms && 
              gameIdData.parent_platforms.map((parent) => 
              <PlatformIcon key={parent.platform.id}>
                { mapPlatforms(parent.platform.slug, 'gameResume_platforms') }
              </PlatformIcon>
            )}
            </PlatformsContainer>
            <MetaCritic item={gameIdData}/>
          </Row>
          <Row>
            <PlatformsContainer>
            { gameIdData.publishers && gameIdData.publishers.length > 0 && (
              <>
                <GamePublishers >
                  <AboutText>
                    Publishers: 
                  </AboutText>
                </GamePublishers>    
                { gameIdData.publishers.map((publisher, index: number) => (
                  <GamePublishers key={publisher.id} >
                    <AboutText>
                      {publisher.name} {gameIdData.publishers.length -1 === index ? '' : ', '}
                    </AboutText>  
                  </GamePublishers>
                ))} 
              </>
            )}          
            </PlatformsContainer>
            { gameIdData.playtime !== 0 && 
              <Playtime>{'Playtime: '}{gameIdData.playtime}{'h'}</Playtime>
            }
          </Row>
          { gameIdData.description_raw && <AboutResume>{'About'}</AboutResume>}
          <Row>
            <ResumeBox onClick={()=> setShowAbout(!showAbout)}>
              <Resume>{gameIdData.description_raw}</Resume>          
            </ResumeBox>
            <BoxVideo gameById={gameIdData}/>
          </Row>
          <Row padT padB>
            <StoreWraper>
            { gameIdData.stores && gameIdData.stores.map((storeId, index: number) => 
              <LinkStore 
                key={index}  
                storeId={storeId} 
              />
            )}
            </StoreWraper>
            <RedditLinkOfficial>
            { gameIdData.website && 
              <LinkOfficial onClick={() => window.open(gameIdData.website , "_blank")}>
                Official Website
              </LinkOfficial>
            }
            { gameIdData.reddit_name &&
              <Row >
                <Button onClick={() => window.open(gameIdData.reddit_url , "_blank")}>
                  <RedditIcon src={reddit}/>
                  <LinkReddit>{gameIdData.reddit_name}</LinkReddit>
                </Button>
              </Row>
            }
            </RedditLinkOfficial>
          </Row>
        </BoxZ>
        <ModalGame 
          description={gameIdData.description_raw} 
          showModal={showAbout} 
          setShowAbout={setShowAbout}
        />
      </BoxResume>
    )}
    </Container>
  )
}

export default GameResume