import React from 'react';
import Loader from "react-loader-spinner";
import { BoxLoader } from './styles';


function LoaderS() {
  
  return (
    <BoxLoader>
      <Loader
        type="Puff"
        color="#00BFFF"
        height={300}
        width={300}
      />
    </BoxLoader>
  );
}

export default LoaderS;