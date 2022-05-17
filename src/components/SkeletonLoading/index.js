import React from 'react';
import { Column, SkeletonImage, SkeletonItem, Wrapper } from './styles';


function SkeletonLoading({ itemSize }) {

  const sizes = new Array(itemSize || 5).fill(1)

  return (
    <>
    { sizes.map((size, index) => (
        <Wrapper key={index}>
        <SkeletonImage />
        <Column>
          <SkeletonItem width={80} />
          <SkeletonItem width={90} />
          <SkeletonItem width={75} />
          <SkeletonItem width={70} />
        </Column>
      </Wrapper>
    ))}
    </>
  );
}

export default SkeletonLoading;