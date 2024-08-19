import React from 'react';
import styled from 'styled-components';

const Info = () => (
  <HomeContainer>
    <Title>Info</Title>
    <SubTitle>Pedro Leoncio</SubTitle>
    <Description>This mini-project was created by using:</Description>
    <StyledTopics>
      <li>Front-End: React</li>
      <li>Front-End: Styled Components</li>
      <li>Front-End: Axios</li>
      <li>Back-End: Node.Js</li>
      <li>Back-End: Typescript</li>
      <li>Back-End: PrismaORM</li>
      <li>Database: PostgreSQL</li>
    </StyledTopics>

  </HomeContainer>
);

export default Info;

const HomeContainer = styled.div`
  min-height: 100vh;
  padding: 12vh 2vw;
  padding-bottom: 0;
  width: 100%;
  color: #000;
  display: flex;
  flex-direction: column;
  row-gap: 3.5vh;
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
