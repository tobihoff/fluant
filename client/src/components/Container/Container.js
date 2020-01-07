import styled from '@emotion/styled';

const LandingPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: ${props => props.theme.light.secondary};
`;

export const LoginPageContainer = styled(LandingPageContainer)`
  border: 5px solid ${props => props.theme.light.primary};
  padding-bottom: 80px;
`;

export const SignInContainer = styled(LandingPageContainer)`
  height: 10px;
  width: 90vw;
  flex-direction: row;
  margin-top: 20px;
`;

export default LandingPageContainer;
