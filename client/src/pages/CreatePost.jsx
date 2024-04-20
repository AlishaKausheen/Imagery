import React, { useState } from 'react';
import styled from 'styled-components';
import GenerateImageForm from '../components/GenerateImageForm';
import GeneratedImageCard from '../components/GeneratedImageCard';

const Container = styled.div`
height: 100%;
overflow-y:scroll;
background: ${({theme})=> theme.bg};
padding: 30px 30px;
padding-bottom: 50px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
@media (max-width: 768){
  padding: 6px 10px;
}
`;

const Wrapper = styled.div`
flex: 1;
height: fit-content;
width: 100%;
max-width: 1200px;
gap: 8%;
display: flex;
justify-content: center;

@media (max-width: 768px){
  flex-direction: column;
}
`;


const CreatePost = () => {
  const [generateImageLoading, setGenerateImageLoading] = useState(false);
  const [createPostLoading, setCreatePostLoading] = useState(false);
  const [post, setPost] = useState({
    author: '',
    prompt: '',
    photo: '',
  });
  return (
    <Container>
      <Wrapper>
        <GenerateImageForm post={post} setPost={setPost}
          createPostLoading={createPostLoading}
          setCreatePostLoading = {setCreatePostLoading}
          generateImageLoading={generateImageLoading}
          setGenerateImageLoading={setGenerateImageLoading } />
        <GeneratedImageCard src={post?.photo} loading={ generateImageLoading } />
      </Wrapper>
    </Container>
  )
}

export default CreatePost
