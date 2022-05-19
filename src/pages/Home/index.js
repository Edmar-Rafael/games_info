import React, { useState, useEffect} from "react";
import { Container, Row, Search, Separator, SkeletonLoading, Button, Icons } from '../../components'
import { BigBox, HeaderContainer, SwitchBorder, Title } from './styles'
import Game from "./Game";
import Drop from "./Drop";
import { requestGamesList } from "../../store/ducks/gamesList";
import { useDispatch, useSelector } from "react-redux";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Home() {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState({})
  const {data, loading} = useSelector(({gamesListState}) => gamesListState)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestGamesList(
      page, searchTerm, selectedPlatform.id && `platforms=${selectedPlatform.id}`
    ))
  },[dispatch, page, searchTerm, selectedPlatform])

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


  return (
    <Container>
      <Separator y={50}/>
      <BigBox>
        <HeaderContainer>
          <Row home_header_mobile='true'>
            <Title>GAMES_INFO</Title>
            <Search value={searchTerm} onChange={handleChange}/>
          </Row>
          <Drop 
            selectedPlatform={selectedPlatform} 
            setSelectedPlatform={setSelectedPlatform}
          />
          <Separator y={10}/>
        </HeaderContainer>
        { loading ? (
          <SkeletonLoading itemSize={10} />                                          
            ) : (
          data.results && data.results.map((game, index) =>
            <Game 
              key={game.id} 
              item={game} 
              isLast={data.results.length - 1 === index} 
            />
        ))}
      </BigBox>
      <SwitchBorder>
        <Row>
        { data.previous ? (
          <Button onClick={() => scrollToTop(- 1)}>
            <Icons icon={faChevronLeft} switch_border='true' />
          </Button>
          ) : (
          <div /> 
        )}
        { data.next ? (
          <Button onClick={() => scrollToTop(1)}>
            <Icons icon={faChevronRight} switch_border='true' />
          </Button> 
          ) : (
          <div /> 
        )}
        </Row>
      </SwitchBorder>
    </Container>
  )
}

export default Home