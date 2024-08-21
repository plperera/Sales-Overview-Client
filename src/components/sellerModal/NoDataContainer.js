import styled from 'styled-components';

const NoDataContainer = ({ children }) => {
  return (
    <Container>
      {children}
    </Container>
  );
};

export default NoDataContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #FFF3CD;
  padding: 2vh;
  border-radius: 10px;
  border: 3px solid #FFEEBA;
  color: #856404;
  font-size: 20px;
  font-weight: 600;
`;
