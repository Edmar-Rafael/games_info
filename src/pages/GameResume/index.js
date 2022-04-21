import React, { useState, useEffect} from 'react'
import dayjs from 'dayjs'
import { mapPlatforms } from '../../utils'
import { getGameById } from '../../services/games'
import reddit from '../../images/reddit.png'
import { 
  BoxVideo, 
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


function GameResume() {
  const [game, setGame] = useState({})
  const [showAbout, setShowAbout] = useState(false)
  const [loading, setLoading] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchGames() {
      setLoading(true)
      const response = await getGameById(params.id)
      setGame(response.data)
      setLoading(false)
    }
    fetchGames()
  }, [params.id])


  return (
    <Container>
      <Separator y={50}/>
      {loading ? (
      <LoaderS/>
      ) : (
      <BoxResume image={game.background_image}>
        <BoxZ>
          <Icons onClick={() => navigate('/')} icon={faArrowLeft} back_home/>
          <Row>
            <Title>{game.name}</Title>
            { game.released && 
              <DateBox>
                <DateRelease>{dayjs(game.released).format('MMM DD, YYYY')}</DateRelease>
              </DateBox>
            }
          </Row>
          <Row>
            <PlatformsContainer>
            { game.parent_platforms && game.parent_platforms.map((parent) => 
              <PlatformIcon key={parent.platform.id}>
                { mapPlatforms(parent.platform.slug) }
              </PlatformIcon>
            )}
            </PlatformsContainer>
            <MetaCritic item={game}/>
          </Row>
          <Row>
            <PlatformsContainer>
            { game.publishers && game.publishers.length > 0 && (
              <>
                <GamePublishers >
                  <AboutText>
                    Publishers: 
                  </AboutText>
                </GamePublishers>    
                { game.publishers.map((publisher, index) => (
                  <GamePublishers key={publisher.id} >
                    <AboutText>
                      {publisher.name} {game.publishers.length-1 === index ? '' : ', '}
                    </AboutText>  
                  </GamePublishers>
                ))} 
              </>
            )}          
            </PlatformsContainer>
            { game.playtime !== 0 && 
              <Playtime>{'Playtime: '}{game.playtime}{'h'}</Playtime>
            }
          </Row>
          { game.description_raw && <AboutResume>{'About'}</AboutResume>}
          <Row>
            <ResumeBox onClick={()=> setShowAbout(!showAbout)}>
              <Resume>{game.description_raw}</Resume>          
            </ResumeBox>
            <BoxVideo game={game}/>
          </Row>
          <Row pad0>
            <StoreWraper>
            { game.stores && game.stores.map((item, index) => 
              <LinkStore key={index} store={item.store} url={item.url}/>
            )}
            </StoreWraper>
            <RedditLinkOfficial>
            { game.website && 
              <LinkOfficial onClick={() => window.open(game.website , "_blank")}>
                Official Website
              </LinkOfficial>
            }
            { game.reddit_name &&
              <Row onClick={() => window.open(game.reddit_url , "_blank")}>
                <RedditIcon src={reddit}/>
                <LinkReddit>{game.reddit_name}</LinkReddit>
              </Row>
            }
            </RedditLinkOfficial>
          </Row>
        </BoxZ>
        <ModalGame 
          description={game.description_raw} 
          showModal={showAbout} 
          setShowAbout={setShowAbout}
        />
      </BoxResume>
    )}
    </Container>
  )
}

export default GameResume