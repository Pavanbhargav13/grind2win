'use client';

import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: ${props => props.theme.colors.text};
  text-align: center;
`;

export default function Home() {
  return (
    <MainContainer>
      <Title>Welcome to Grind2Win</Title>
      <Subtitle>
        Your journey to building consistency and discipline starts here!
      </Subtitle>
    </MainContainer>
  );
}
