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
  padding: 6vh 2vw;
  padding-bottom: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 3.5vh;
  background-color: #E9E9E9;
`;
const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  color: #9795AC;
`
const SubTitle = styled.h2`
  font-size: 36px;
  color: #8820CE;
`
const Description = styled.p`
  font-size: 24px;
  color: #9795AC;
`
const StyledTopics = styled.div`
  padding-left: 3vw;
  color: #3A3942;
  font-weight: 600;
  > li {
    margin-bottom: 1vh;
    font-size: 20px;
  }
`
