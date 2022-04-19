import React, { useState, useEffect} from "react";
import { getGames } from "../../services/games";
import { Container, Drop, Game, Row, Search, Separator, SkeletonLoading, SwitchPages } from '../../components'
import { BigBox, HeaderContainer, SwitchBorder, Title } from './styles'

function Home() {
  const [games, setGames] = useState({})
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState({})

  const handleChange = event => {
    setSearchTerm(event.target.value)
    setPage(1);
  }

  const scrollToTop= (num)=>{
    setPage(page + num)
    window.scroll({
      top:0,
      behavior:'smooth'
    })
  }

  useEffect(() => {
    async function fetchGames() {
      setLoading(true)
      const response = await getGames(
        page, searchTerm, selectedPlatform.id ? 
        `platforms=${selectedPlatform.id}` : undefined
      )
      setGames(response.data)
      setLoading(false)
    }
      fetchGames()
  },[page, searchTerm, selectedPlatform])


  return (
    <Container>
      <Separator y={50}/>
      <BigBox>
        <HeaderContainer>
          <Row>
            <Title>GAMES_INFO</Title>
            <Search value={searchTerm} onChange={handleChange}/>
          </Row>
          <Row>
            <Drop 
              selectedPlatform={selectedPlatform} 
              setSelectedPlatform={setSelectedPlatform}
            />
          </Row>
        </HeaderContainer>
        { loading ? (
          <SkeletonLoading itemSize={10} />                                          
            ) : (
          games.results && games.results.map((game, index) =>
            <Game 
              key={game.id} 
              item={game} 
              isLast={games.results.length - 1 === index} 
            />
        ))}
      </BigBox>
      <SwitchBorder>
        <Row>
        { games.previous ? (
          <SwitchPages onClick={() => scrollToTop(- 1)} reverse={true} /> 
          ) : (
          <div /> 
        )}
        { games.next ? (
          <SwitchPages onClick={() => scrollToTop(1)} reverse={false}/> 
          ) : (
          <div /> 
        )}
        </Row>
      </SwitchBorder>
    </Container>
  )
}

export default Home