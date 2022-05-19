import React, {useEffect, useState} from 'react'
import SubDrop from './SubDrop'
import { Options, Select, SelectArrow } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { requestPlatforms } from '../../../store/ducks/platformsList'
import { Button } from '../../../components'


const Drop = ({ selectedPlatform, setSelectedPlatform }) => {
  const [show, toggleShow] = useState(false)  
  const [parents, setParents] = useState([])
  const {data} = useSelector(({platformsState}) => platformsState)

  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(requestPlatforms())
  }, [dispatch])

  function handleDropClosing() {
    toggleShow(false)
    setParents("")
  }
  

  return (
    <Select onMouseLeave={handleDropClosing}>
      <Button onClick={() => toggleShow(!show)} title_select='true'>
        {selectedPlatform.name || 'Platforms'}
        <SelectArrow show={show}/>
      </Button>
      <Options show={show}>
      { data.results && data.results.map(platform => 
        <SubDrop
          key={platform.id}
          item={platform}
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