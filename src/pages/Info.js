import React from 'react';
import styled from 'styled-components';

const Info = () => (
  <HomeContainer>
    <Title>Info</Title>
    <SubTitle>Pedro Leoncio</SubTitle>
    <Description>This mini-project was created by using:</Description>
    <StyledTopics>
      <li>Technology A</li>
      <li>Technology B</li>
      <li>Technology C</li>
    </StyledTopics>

  </HomeContainer>
);

export default Info;

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 11vh 2vw;
  width: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  row-gap: 2vh;
`;
const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 2vh;
`
const SubTitle = styled.h2`
  font-size: 30px;
`
const Description = styled.p`
  font-size: 24px;
`
const StyledTopics = styled.div`
  padding-left: 3vw;
  > li {
    margin-bottom: 1vh;
    font-size: 20px;
  }
`
