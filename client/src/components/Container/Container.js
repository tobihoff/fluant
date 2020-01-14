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

export const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 240px;
  margin-bottom: 10px;
`;

export const ScoreContainer = styled(AddButtonContainer)`
  margin: 0 auto;
  flex-direction: column;
  max-height: 240px;
  overflow: auto;
  margin-bottom: none;
  margin-top: 20px;
  animation: slideInUp 1s;
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInUp {
    animation-name: slideInUp;
  }
`;

export const TextareaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

export const ProfileButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default LandingPageContainer;
