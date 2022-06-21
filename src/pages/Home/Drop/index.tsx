import React, {useEffect, useState} from 'react'
import SubDrop from './SubDrop'
import { Options, Select, SelectArrow } from './styles'
import { requestPlatforms } from '../../../store/ducks/platformsList'
import { Button } from '../../../components'
import { 
  PlatformsDataProps, PlatformsProps, useAppDispatch, useAppSelector 
} from '../../../@Types/types'

type DropProps = {
  selectedPlatform?: PlatformsProps;
  setSelectedPlatform?: (value: PlatformsProps) => void;
}


const Drop = ({ selectedPlatform, setSelectedPlatform }: DropProps) => {
  const [show, toggleShow] = useState(false)  
  const [parents, setParents] = useState({})
  const {data: platformsData}: PlatformsDataProps = useAppSelector(
    ({platformsState}) => platformsState
  )

  const dispatch = useAppDispatch()

  useEffect(()=> {
    dispatch(requestPlatforms())
  }, [dispatch])

  function handleDropClosing() {
    toggleShow(false)
    setParents({})
  }
  

  return (
    <Select onMouseLeave={handleDropClosing}>
      <Button onClick={() => toggleShow(!show)} title_select>
        { selectedPlatform?.name || 'Platforms'}
        <SelectArrow show={show}/>
      </Button>
      <Options show={show}>
      { platformsData.results && setSelectedPlatform &&  platformsData.results.map((result) => 
        <SubDrop
          key={result.id}
          result={result}
          setSelectedPlatform={setSelectedPlatform}
          parents={parents}
          setParents={setParents}
        />
      )}
      </Options>            
    </Select>
  )
}

export default Drop