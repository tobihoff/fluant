import React, { useContext } from 'react';
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
import CircleIcon from '../icons/CircleIcon';
import TranslateIcon from '../icons/TranslateIcon';
import StudentIcon from '../icons/StudentIcon';
import {
  Navigation,
  UnorderedList,
  ListElements,
  ListElementFriends
} from '../components/ProfileNavigation';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../components/themes/theme';
import { UserContext } from '../context/user';

const LogoImage = styled.img`
  height: 200px;
  width: auto;
`;

export default function ProfilePage() {
  const [themeColor, setThemeColor] = React.useState(theme.light);
  const [user, setUser] = useContext(UserContext);

  function handleThemeClick() {
    if (themeColor === theme.light) {
      setThemeColor(theme.dark);
    } else {
      setThemeColor(theme.light);
    }
  }

  return (
    <ThemeProvider theme={themeColor}>
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
        <Profile src={user.img} alt={user.name} />
        <ProfileInfo>{user.name}</ProfileInfo>
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
        <FooterButton onClick={handleThemeClick}>
          <CircleIcon />
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
    </ThemeProvider>
  );
}
