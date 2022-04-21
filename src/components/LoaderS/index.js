import React from 'react';
import Loader from "react-loader-spinner";
import Colors from '../../resources/Colors';
import { BoxLoader } from './styles';


function LoaderS() {
  
  return (
    <BoxLoader>
      <Loader
        type= "Puff"
        color= {`${Colors.loaderS}`}
        height= {300}
        width= {300}
      />
    </BoxLoader>
  );
}

export default LoaderS;