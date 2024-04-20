import React from 'react';
import styled from 'styled-components';

const Form = styled.div``;

const Top = styled.div` `;

const Title = styled.div``;

const Desc = styled.div``;

const Body = styled.div``;

const Actions = styled.div``;


const GenerateImageForm = () => {
  return (
    <Form>
          <Top>
              <Title>
                  Generate Image with Prompt
              </Title>
              <Desc>Write your prompt according to the image you want to generate</Desc>
          </Top>
          <Body>
              Body
          </Body>
          <Actions>
              Actions
          </Actions>
    </Form>
  )
}

export default GenerateImageForm
