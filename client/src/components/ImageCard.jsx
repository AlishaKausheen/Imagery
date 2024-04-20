import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Card = styled.div`
position: relative;
display: flex;
border-radius: 20px;
box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 60};
cursor: pointer;
trasition: all 0.3s ease;
&:hover{
    box-shadow: 1px 2px 40px 8px ${({ theme }) => theme.black + 80};
    scale: 1.05;
}

&:nth-child(7n+1){
    grid-column: auto/span 2;
    grid-row: auto/span 2;
}
`;

const HoverOverlay = styled.div`

`;

const Prompt = styled.div`

`;

const Author = styled.div`

`;


const ImageCard = () => {
  return (
    <Card>
     <LazyLoadImage width="100%" src='https://th.bing.com/th/id/OIP.wzhvW5NxoZ24A4WZfvM3bQHaKb?rs=1&pid=ImgDetMain'/> 
          <HoverOverlay>
              <Prompt>Prompt</Prompt>
              <Author>Alisha</Author>
    </HoverOverlay>
      </Card>
  )
}

export default ImageCard
