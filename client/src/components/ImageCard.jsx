import React from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Avatar } from '@mui/material';

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
opacity: 0;
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
flex-direction: column;
align-items: start;
gap: 2px;
backdrop-filter: blur(2px);
background: rgba(0,0,0, 0.5);
color: ${({ theme }) => theme.white};
transition: opacity 0.3s ease;
border-radius: 6px;
justify-content: end;
padding: 12px;

${Card}:hover & {
    opacity: 1;
}
`;

const Prompt = styled.div`
font-weight: 400px;
color: ${({ theme }) => theme.white};
font-size: 15px;
`;

const Author = styled.div`
font-weight: 600px;
color: ${({ theme }) => theme.white};
font-size: 14px;
gap: 8px;
display: flex;
align-items: center;
`;


const ImageCard = () => {
  return (
    <Card>
     <LazyLoadImage width="100%" src='https://th.bing.com/th/id/OIP.wzhvW5NxoZ24A4WZfvM3bQHaKb?rs=1&pid=ImgDetMain'/> 
          <HoverOverlay>
              <Prompt>Prompt</Prompt>
              <Author>
                  <Avatar style={{width: '32px', height: '32px'}}>A</Avatar>
                  Alisha</Author>
    </HoverOverlay>
      </Card>
  )
}

export default ImageCard
