import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';


function BackHome() {

  const navigate = useNavigate()

  return  (
    <FontAwesomeIcon 
      onClick={() => navigate('/')}
      icon={faArrowLeft} 
      size={'3x'} 
      color={'white'}  
      style={{ cursor: 'pointer' }} 
    />
  )
}

export default BackHome;