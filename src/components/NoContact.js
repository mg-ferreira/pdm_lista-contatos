import React from 'react';
import { Container, Title, Image } from '../styles';
import image from '../assets/alone.png';

const NoContact = () => {
  return (
    <Container height={340} justify='space-around'>
      <Image source={image} />
      <Title color='white'>Nenhum contato adicionado!</Title>
    </Container>
  )
}

export default NoContact;
