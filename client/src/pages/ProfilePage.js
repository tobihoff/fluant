import React, { useContext, useCallback } from 'react';
import styled from '@emotion/styled';
import { Container, Header, Logo, Bookmark } from '../components/Header/Header';
import BookmarkIcon from '../icons/BookmarkIcon';
import fluant from '../resources/fluant.png';
import { BookmarkButton } from '../components/Buttons/Buttons';
import { Profile, ProfileContainer, UserName } from '../components/Profile/Profile';
import ProfileCards from '../components/Profile/ProfileCards';
import ProfileFriends from '../components/Profile/ProfileFriends';
import ProfileScores from '../components/Profile/ProfileScores';
import Footer, { ProfileButtonContainer } from '../components/Footer/Footer';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import CircleIcon from '../icons/CircleIcon';
import TranslateIcon from '../icons/TranslateIcon';
import LogoutIcon from '../icons/LogoutIcon';
import {
  Navigation,
  UnorderedList,
  ListElements,
  ListElementFriends
} from '../components/Profile/ProfileNavigation';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '../components/themes/theme';
import { UserContext } from '../context/user';
import NavLink from '../components/Links/Links';
import DictonaryList from '../components/Modals/Modal';
import { useHistory } from 'react-router-dom';

const LogoImage = styled.img`
  height: 200px;
  width: auto;
`;

export default function ProfilePage() {
  const [themeColor, setThemeColor] = React.useState(theme.light);
  const [user, setUser] = useContext(UserContext);
  const [modal, setModal] = React.useState(false);
  const history = useHistory();

  console.log(history);
  console.log(user.name);
  const toggle = () => {
    setModal(!modal);
  };

  function handleThemeClick() {
    if (themeColor === theme.light) {
      setThemeColor(theme.dark);
    } else {
      setThemeColor(theme.light);
    }
  }

  function handleLogout() {
    localStorage.removeItem('token');
    setUser(false);
    history.push('/login');
  }

  return (
    <ThemeProvider theme={themeColor}>
      <Container>
        <Header>
          <Logo>
            <LogoImage src={fluant} alt="Logo" />
          </Logo>
          <Bookmark>
            {modal && <DictonaryList onClick={toggle} />}
            <BookmarkButton onClick={toggle}>
              <BookmarkIcon />
            </BookmarkButton>
          </Bookmark>
        </Header>
      </Container>
      <ProfileContainer>
        <Profile src={user.img} alt={user.name} />
      </ProfileContainer>
      <UserName>{user.name}</UserName>
      <Router>
        <Navigation>
          <UnorderedList>
            <ListElements>
              <NavLink to="/learn">Learn</NavLink>
            </ListElements>
            <ListElementFriends>
              <NavLink to="/friends">Friends</NavLink>
            </ListElementFriends>
            <ListElements>
              <NavLink to="/scores">Scores</NavLink>
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
        <FooterButton onClick={handleLogout}>
          <LogoutIcon />
        </FooterButton>
      </Footer>
    </ThemeProvider>
  );
}
