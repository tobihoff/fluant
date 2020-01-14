import React from 'react';
import styled from '@emotion/styled';
import BookmarkIcon from '../../icons/BookmarkIcon';
import fluant from '../../resources/fluant.png';
import { BookmarkButton } from '../../components/Buttons/Buttons';
import DictonaryList from '../../components/Modals/Modal';

export const Container = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: 40px;
  top: 0;
`;

export const HeaderContainer = styled.div`
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  max-width: 240px;
`;

export const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  left: 0;
  height: auto;
  max-width: 50px;
`;

export const Bookmark = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  max-width: 50px;
  right: 0;
`;

const LogoImage = styled.img`
  height: 200px;
  width: auto;
`;

export default function Header() {
  const [modal, setModal] = React.useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <HeaderContainer>
        <Logo>
          <LogoImage src={fluant} alt="Logo" />
        </Logo>
        <Bookmark>
          {modal && <DictonaryList onClick={toggle} />}
          <BookmarkButton onClick={toggle}>
            <BookmarkIcon />
          </BookmarkButton>
        </Bookmark>
      </HeaderContainer>
    </Container>
  );
}
