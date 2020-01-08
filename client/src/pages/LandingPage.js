import React from 'react';
import styled from '@emotion/styled';
import LandingPageContainer from '../components/Container/Container';
import Welcome from '../resources/Welcome.png';
import { useHistory } from 'react-router-dom';

const WelcomeLogo = styled.img`
  width: 100vw;
  height: auto;
`;

export default function LandingPage() {
  const history = useHistory();
  setTimeout(() => history.push('/login'), 1500);

  return (
    <LandingPageContainer>
      <WelcomeLogo src={Welcome} alt="Logo" />
    </LandingPageContainer>
  );
}
