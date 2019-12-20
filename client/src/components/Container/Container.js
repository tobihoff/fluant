import styled from '@emotion/styled';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 101vh;
  background: ${props => props.theme.secondary};
`;

export default LandingPageContainer;
