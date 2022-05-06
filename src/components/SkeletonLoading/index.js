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
          <SkeletonItem width={300} />
          <SkeletonItem width={350} />
          <SkeletonItem width={200} />
          <SkeletonItem width={100} />
        </Column>
      </Wrapper>
    ))}
    </>
  );
}

export default SkeletonLoading;