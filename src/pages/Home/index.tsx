import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Search,
  Separator,
  SkeletonLoading,
  Button,
  Icons
} from '../../components'
import { BigBox, HeaderContainer, SwitchBorder, Title } from './styles'
import Game from "./Game";
import Drop from "./Drop";
import { requestGamesList } from "../../store/ducks/gamesList";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { PlatformsProps, useAppDispatch, useAppSelector } from "../../@Types/types";

function Home() {
  const [page, setPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformsProps>()
  const { data: gamesListData, loading } = useAppSelector(({ gamesListState }) => gamesListState)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(requestGamesList(page, searchTerm, selectedPlatform))
  }, [dispatch, page, searchTerm, selectedPlatform])

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setPage(1);
  }

  const scrollToTop = (num: number) => {
    setPage(page + num)
    window.scroll({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <Container>
      <Separator y={50} />
      <BigBox>
        <HeaderContainer>
          <Row home_header_mobile>
            <Title>GAMES_INFO</Title>
            <Search
              onChange={handleChange}
              type='text'
              plc={'Type here'}
              text={'Search'}
              value={searchTerm}
            />
          </Row>
          <Drop
            selectedPlatform={selectedPlatform}
            setSelectedPlatform={setSelectedPlatform}
          />
          <Separator y={10} />
        </HeaderContainer>
        {loading ? (
          <SkeletonLoading itemSize={10} />
        ) : (
          gamesListData.results &&
          gamesListData.results.map((game: any, index: number) =>
            <Game
              key={game.id}
              item={game}
              isLast={gamesListData.results.length - 1 === index}
            />
          ))}
      </BigBox>
      <SwitchBorder>
        <Row>
          {gamesListData.previous ? (
            <Button onClick={() => scrollToTop(- 1)}>
              <Icons icon={faChevronLeft} switch_border />
            </Button>
          ) : (
            <div />
          )}
          {gamesListData.next ? (
            <Button onClick={() => scrollToTop(1)}>
              <Icons icon={faChevronRight} switch_border />
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