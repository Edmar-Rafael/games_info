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
  const [gameById, setGameById] = useState({})
  const [showAbout, setShowAbout] = useState(false)
  const [loading, setLoading] = useState(false)

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchGames() {
      setLoading(true)
      const response = await getGameById(params.id)
      setGameById(response.data)
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
      <BoxResume image={gameById.background_image}>
        <BoxZ>
          <Row>
            <Icons onClick={() => navigate('/')} icon={faArrowLeft} back_home='true'/>
          </Row>
          <Row>
            <Title>{gameById.name}</Title>
            { gameById.released && 
              <DateBox>
                <DateRelease>{dayjs(gameById.released).format('MMM DD, YYYY')}</DateRelease>
              </DateBox>
            }
          </Row>
          <Row>
            <PlatformsContainer>
            { gameById.parent_platforms && gameById.parent_platforms.map((parent) => 
              <PlatformIcon key={parent.platform.id}>
                { mapPlatforms(parent.platform.slug, 'game_resume_platforms') }
              </PlatformIcon>
            )}
            </PlatformsContainer>
            <MetaCritic item={gameById}/>
          </Row>
          <Row>
            <PlatformsContainer>
            { gameById.publishers && gameById.publishers.length > 0 && (
              <>
                <GamePublishers >
                  <AboutText>
                    Publishers: 
                  </AboutText>
                </GamePublishers>    
                { gameById.publishers.map((publisher, index) => (
                  <GamePublishers key={publisher.id} >
                    <AboutText>
                      {publisher.name} {gameById.publishers.length-1 === index ? '' : ', '}
                    </AboutText>  
                  </GamePublishers>
                ))} 
              </>
            )}          
            </PlatformsContainer>
            { gameById.playtime !== 0 && 
              <Playtime>{'Playtime: '}{gameById.playtime}{'h'}</Playtime>
            }
          </Row>
          { gameById.description_raw && <AboutResume>{'About'}</AboutResume>}
          <Row>
            <ResumeBox onClick={()=> setShowAbout(!showAbout)}>
              <Resume>{gameById.description_raw}</Resume>          
            </ResumeBox>
            <BoxVideo gameById={gameById}/>
          </Row>
          <Row pad0>
            <StoreWraper>
            { gameById.stores && gameById.stores.map((storeId, index) => 
              <LinkStore 
                key={index} 
                storeId={storeId.store} 
                url={storeId.url}
              />
            )}
            </StoreWraper>
            <RedditLinkOfficial>
            { gameById.website && 
              <LinkOfficial onClick={() => window.open(gameById.website , "_blank")}>
                Official Website
              </LinkOfficial>
            }
            { gameById.reddit_name &&
              <Row onClick={() => window.open(gameById.reddit_url , "_blank")}>
                <RedditIcon src={reddit}/>
                <LinkReddit>{gameById.reddit_name}</LinkReddit>
              </Row>
            }
            </RedditLinkOfficial>
          </Row>
        </BoxZ>
        <ModalGame 
          description={gameById.description_raw} 
          showModal={showAbout} 
          setShowAbout={setShowAbout}
        />
      </BoxResume>
    )}
    </Container>
  )
}

export default GameResume