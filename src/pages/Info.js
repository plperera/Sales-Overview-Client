import React from 'react';
import styled from 'styled-components';

const Info = () => (
  <InfoContainer>

    <LeftContainer>
      <Title>Sales Overview App</Title>
      <GreetingText>Hi I'm</GreetingText>
      <SubTitle>Pedro Leoncio</SubTitle>
      <Description>This project is a full-stack application for sales management, comprising a web interface and an API backend. The frontend focuses on displaying and filtering orders, while the backend provides robust data management capabilities.</Description>
      <SubDescription>For more technical details and installation guide, see the project's README.</SubDescription>
    </LeftContainer>

    <RightContainer>
    <a href="https://www.linkedin.com/in/pedro-leoncio/" target="_blank" rel="noopener noreferrer">
        <img 
          src="https://media.licdn.com/dms/image/v2/D4D03AQG9MT-ObqKDgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1686666138443?e=1729728000&v=beta&t=l8iyvgZvGqu4i432aGEGVCKnIfvSoXbx0H5NoUi2sgQ" 
          alt="LinkedIn Profile" 
        />
      </a>
    </RightContainer>

    <StacksContainer>
      <StacksTitle>This Project was Created Using:</StacksTitle>
      <StackCard>
        <StackSubTitle>Front-End</StackSubTitle>
        <StackText>React</StackText>
        <StackText>Styled Components</StackText>
        <StackText>Axios</StackText>
      </StackCard>

      <StackCard>
        <StackSubTitle>Back-End</StackSubTitle>
        <StackText>Node.js</StackText>
        <StackText>Typescript</StackText>
        <StackText>Express</StackText>
        <StackText>Prisma ORM</StackText>
        <StackText>Morgan</StackText>
      </StackCard>
      
      <StackCard>
        <StackSubTitle>Database</StackSubTitle>
        <StackText>PostgreSQL</StackText>
      </StackCard>
    </StacksContainer>

    <FeaturesContainer>
      <FeaturesTitle>Features</FeaturesTitle>
      <FeatureCard>
        <FeatureSubTitle>Orders Overview</FeatureSubTitle>
        <FeatureText>Filtering by seller and country</FeatureText>
        <FeatureText>Sorting by various criteria</FeatureText>
        <FeatureText>Pagination for easy navigation</FeatureText>
      </FeatureCard>

      <FeatureCard>
        <FeatureSubTitle>Sellers Overview</FeatureSubTitle>
        <FeatureText>Top Sellers ranking with detailed modal</FeatureText>
        <FeatureText>Sales breakdown by country in a pie chart</FeatureText>
        <FeatureText>List of top-selling products</FeatureText>
      </FeatureCard>

      <FeatureCard>
        <FeatureSubTitle>Info Page</FeatureSubTitle>
        <FeatureText>Displays information about the technologies used</FeatureText>
      </FeatureCard>
    </FeaturesContainer>

    
  </InfoContainer>
);

export default Info;

const InfoContainer = styled.div`
  min-height: 100vh;
  padding: 6vh 2vw;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  row-gap: 3.5vh;
  background-color: #E9E9E9;
`;

const LeftContainer = styled.div`
  width: 80%;
`;

const RightContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  img {
    width: 250px;
    border-radius: 100%;
    border: 10px groove #885FF6;
    cursor: pointer;
    transition: all ease .2s;

    &:hover{
      transform: scale(1.05)
    }
  }
`;

const Title = styled.h1`
  color: #9795AC;
  font-size: 42px;
  font-weight: 600;
`;

const GreetingText = styled.p`
  color: #9795AC;
  font-size: 22px;
  font-weight: 600;
  margin-top: 5vh;
`;

const SubTitle = styled.h2`
  color: #504F5D;
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 1.5vh;
  border-bottom: 4px solid #885FF6;
  width: 50%;
  margin-top: 2vh;
`;

const Description = styled.p`
  color: #504F5D9D;
  font-weight: 600;
  font-size: 18px;
  width: 80%;
  margin-top: 1vh;
  line-height: 25px;
`;

const SubDescription = styled.p`
  color: #504F5D;
  font-weight: 600;
  font-size: 18px;
  width: 80%;
  margin-top: 1vh;
  line-height: 25px;
`;

const StacksContainer = styled.div`
  width: 100%;
  padding-top: 4vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const StacksTitle = styled.h3`
  color: #504F5D;
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 1.5vh;
  width: 50%;
  margin-bottom: 1vh;
  width: 100%;
`;

const StackCard = styled.div`
  width: 30%;
  border: 10px solid #6F4FC844;
  background-color: #885FF6;
  border-radius: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2vh 1vw;
  column-gap: 1vw;
  row-gap: 1vh;
`;

const StackSubTitle = styled.h4`
  width: 100%;
  text-align: center;
  padding-bottom: 2vh;
  color: #FFFFFF;
  font-size: 22px;
  font-weight: 600;
`;

const StackText = styled.p`
  background-color: #FFFFFF;
  color: #885FF6;
  padding: 1vh 1.5vw;
  border-radius: 10px;
  font-weight: 600;
`;

const FeaturesContainer = styled.div`
  width: 100%;
  padding-top: 1vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const FeaturesTitle = styled.h3`
  color: #504F5D;
  font-size: 28px;
  font-weight: 600;
  padding-bottom: 1.5vh;
  width: 50%;
  margin-bottom: 1vh;
  width: 100%;
`;

const FeatureCard = styled.div`
  width: 30%;
  box-shadow: -4px 10px 24px -8px rgba(0,0,0,0.1);
  border: 10px solid #6F4FC813;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-wrap: wrap;
  padding: 2vh 1vw;
  column-gap: 1vw;
  row-gap: 1vh; 
`;

const FeatureSubTitle = styled.h4`
  width: 100%;
  text-align: center;
  padding-bottom: 2vh;
  color: #885FF6;
  font-size: 22px;
  font-weight: 600;
`;

const FeatureText = styled.p`
  text-align: center;
  background-color: #885FF6;
  color: #FFFFFF;
  padding: 1vh 1.5vw;
  border-radius: 10px;
  font-weight: 600;
`;
