import React from 'react';
import styled from '@emotion/styled';
import { Container, Header, Logo, Bookmark } from '../components/Header/Header';
import BookmarkIcon from '../icons/BookmarkIcon';
import fluant from '../resources/fluant.png';
import { BookmarkButton } from '../components/Buttons/Buttons';
import { Profile, ProfileContainer, ProfileInfo } from '../components/Profile';
import Footer, { ProfileButtonContainer } from '../components/Footer/Footer';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import SunIcon from '../icons/SunIcon';
import TranslateIcon from '../icons/TranslateIcon';
import StudentIcon from '../icons/StudentIcon';
import { CardContainer, Card } from '../components/Cards/Cards';
import HundredIcon from '../icons/HundredIcon';
import QueryIcon from '../icons/QueryIcon';
import HeadphoneIcon from '../icons/HeadphoneIcon';
import StarIcon from '../icons/StarIcon';
import FriendsIcon from '../icons/FriendsIcon';
import GameIcon from '../icons/GameIcon';
import {
  Navigation,
  UnorderedList,
  ListElements,
  ListElementFriends
} from '../components/ProfileNavigation';

const LogoImage = styled.img`
  height: 200px;
  width: auto;
`;

export default function ProfilePage() {
  return (
    <>
      <Container>
        <Header>
          <Logo>
            <LogoImage src={fluant} alt="Logo" />
          </Logo>
          <Bookmark>
            <BookmarkButton>
              <BookmarkIcon />
            </BookmarkButton>
          </Bookmark>
        </Header>
      </Container>
      <ProfileContainer>
        <Profile
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          alt="Leonie"
        />
        <ProfileInfo>Julia Goldfinger</ProfileInfo>
      </ProfileContainer>
      <Navigation>
        <UnorderedList>
          <ListElements>Learn</ListElements>
          <ListElementFriends>Friends</ListElementFriends>
          <ListElements>Scores</ListElements>
        </UnorderedList>
      </Navigation>
      <CardContainer>
        <Card>
          <GameIcon />
        </Card>
        <Card>
          <HundredIcon />
        </Card>
        <Card>
          <FriendsIcon />
        </Card>
        <Card>
          <StarIcon />
        </Card>
        <Card>
          <QueryIcon />
        </Card>
        <Card>
          <HeadphoneIcon />
        </Card>
      </CardContainer>
      <Footer>
        <FooterButton>
          <SunIcon />
        </FooterButton>
        <ProfileButtonContainer>
          <ProfileButton>
            <TranslateIcon />
          </ProfileButton>
        </ProfileButtonContainer>
        <FooterButton>
          <StudentIcon />
        </FooterButton>
      </Footer>
    </>
  );
}
