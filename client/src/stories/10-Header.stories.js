import React from 'react';
import styled from '@emotion/styled';
import { Container, Header, Logo, Bookmark } from '../components/Header/Header';
import BookmarkIcon from '../icons/BookmarkIcon';
import fluant from '../resources/fluant.png';

export default {
  title: 'Header'
};

const LogoImage = styled.img`
  height: 200px;
  width: auto;
`;

export const HeaderButton = styled.button`
  width: 30px;
  height: 30px;
  background: ${props => props.theme.primary};
  border: none;
  outline: none;
  text-align: center;
`;

export const HeaderNavigation = () => (
  <Container>
    <Header>
      <Logo>
        <LogoImage src={fluant} alt="Logo" />
      </Logo>
      <Bookmark>
        <HeaderButton>
          <BookmarkIcon />
        </HeaderButton>
      </Bookmark>
    </Header>
  </Container>
);
