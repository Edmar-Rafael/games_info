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
import { useDispatch, useSelector } from 'react-redux'
import { requestGamesListById } from '../../store/ducks/gamesListById'


function GameResume() {
  const [showAbout, setShowAbout] = useState(false)
  const {data, loading} = useSelector(({gamesListByIdState}) => gamesListByIdState)

  const params = useParams()
  const navigate = useNavigate()
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGamesListById(params.id))
  }, [dispatch, params.id])


  return (
    <Container>
      <Separator y={50}/>
      {loading ? (
      <LoaderS/>
      ) : (
      <BoxResume image={data.background_image}>
        <BoxZ >
            <Button onClick={() => navigate('/')} back_home='true'>
              <Icons icon={faArrowLeft} back_home='true'/>
            </Button>
          <Row>
            <Title>{data.name}</Title>
            { data.released && 
              <DateBox>
                <DateRelease>{dayjs(data.released).format('MMM DD, YYYY')}</DateRelease>
              </DateBox>
            }
          </Row>
          <Row>
            <PlatformsContainer>
            { data.parent_platforms && data.parent_platforms.map((parent) => 
              <PlatformIcon key={parent.platform.id}>
                { mapPlatforms(parent.platform.slug, 'gameResume_platforms') }
              </PlatformIcon>
            )}
            </PlatformsContainer>
            <MetaCritic item={data}/>
          </Row>
          <Row>
            <PlatformsContainer>
            { data.publishers && data.publishers.length > 0 && (
              <>
                <GamePublishers >
                  <AboutText>
                    Publishers: 
                  </AboutText>
                </GamePublishers>    
                { data.publishers.map((publisher, index) => (
                  <GamePublishers key={publisher.id} >
                    <AboutText>
                      {publisher.name} {data.publishers.length-1 === index ? '' : ', '}
                    </AboutText>  
                  </GamePublishers>
                ))} 
              </>
            )}          
            </PlatformsContainer>
            { data.playtime !== 0 && 
              <Playtime>{'Playtime: '}{data.playtime}{'h'}</Playtime>
            }
          </Row>
          { data.description_raw && <AboutResume>{'About'}</AboutResume>}
          <Row>
            <ResumeBox onClick={()=> setShowAbout(!showAbout)}>
              <Resume>{data.description_raw}</Resume>          
            </ResumeBox>
            <BoxVideo gameById={data}/>
          </Row>
          <Row pad0 padB>
            <StoreWraper>
            { data.stores && data.stores.map((storeId, index) => 
              <LinkStore 
                key={index} 
                storeId={storeId.store} 
                url={storeId.url}
              />
            )}
            </StoreWraper>
            <RedditLinkOfficial>
            { data.website && 
              <LinkOfficial onClick={() => window.open(data.website , "_blank")}>
                Official Website
              </LinkOfficial>
            }
            { data.reddit_name &&
              <Row onClick={() => window.open(data.reddit_url , "_blank")}>
                <RedditIcon src={reddit}/>
                <LinkReddit>{data.reddit_name}</LinkReddit>
              </Row>
            }
            </RedditLinkOfficial>
          </Row>
        </BoxZ>
        <ModalGame 
          description={data.description_raw} 
          showModal={showAbout} 
          setShowAbout={setShowAbout}
        />
      </BoxResume>
    )}
    </Container>
  )
}

export default GameResume