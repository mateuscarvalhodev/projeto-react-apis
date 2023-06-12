import styled from 'styled-components';
import simplePokeBall from './assets/img/simple_pokeball.gif';
const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #181b1d;
`;
const LoadingIndicator = () => {
  return (
    <LoadingContainer>
      <img src={simplePokeBall} />
    </LoadingContainer>
  );
};

export default LoadingIndicator;
