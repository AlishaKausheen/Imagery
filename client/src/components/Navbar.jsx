import Button from './button';
import React from 'react'
import styled from 'styled-components';


const Container = styled.div``;

const Navbar = () => {
  return (
      <Container>
          Imagery
          <Button text="Create new post"/>
    </Container>
  )
}

export default Navbar
