import React from 'react';
import styled from '@emotion/styled';
import LandingPageContainer from '../components/Container/Container';
import Welcome from '../resources/Welcome.png';

const WelcomeLogo = styled.img`
  width: 100vw;
  height: auto;
`;

export default function LandingPage() {
  return (
    <LandingPageContainer>
      <WelcomeLogo src={Welcome} alt="Logo" />
    </LandingPageContainer>
  );
}
