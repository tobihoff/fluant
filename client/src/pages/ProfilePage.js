import React from 'react';
import styled from '@emotion/styled';
import { Container, Header, Logo, Bookmark } from '../components/Header/Header';
import BookmarkIcon from '../icons/BookmarkIcon';
import fluant from '../resources/fluant.png';
import { BookmarkButton } from '../components/Buttons/Buttons';
import { Profile, ProfileContainer, ProfileInfo } from '../components/Profile';
import ProfileCards from '../components/Profile/ProfileCards';
import ProfileFriends from '../components/Profile/ProfileFriends';
import ProfileScores from '../components/Profile/ProfileScores';
import Footer, { ProfileButtonContainer } from '../components/Footer/Footer';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import SunIcon from '../icons/SunIcon';
import TranslateIcon from '../icons/TranslateIcon';
import StudentIcon from '../icons/StudentIcon';
import {
  Navigation,
  UnorderedList,
  ListElements,
  ListElementFriends
} from '../components/ProfileNavigation';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';

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
      <Router>
        <Navigation>
          <UnorderedList>
            <ListElements>
              <Link to="/learn">Learn</Link>
            </ListElements>
            <ListElementFriends>
              <Link to="/friends">Friends</Link>
            </ListElementFriends>
            <ListElements>
              <Link to="/scores">Scores</Link>
            </ListElements>
          </UnorderedList>
        </Navigation>
        <Switch>
          <Route exact path="/learn" component={ProfileCards}>
            <ProfileCards />
          </Route>
          <Route path="/friends" component={ProfileFriends}>
            <ProfileFriends />
          </Route>
          <Route exact path="/scores" component={ProfileScores}>
            <ProfileScores />
          </Route>
        </Switch>
      </Router>
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
