import React from 'react';
import Header from '../components/Header/Header';
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
import { useLogout, useUser } from '../context/user';
import NavLink from '../components/Links/Links';
import { Link } from 'react-router-dom';

export default function ProfilePage() {
  const [themeColor, setThemeColor] = React.useState(theme.light);
  const user = useUser();
  const logout = useLogout();

  function handleThemeClick() {
    if (themeColor === theme.light) {
      setThemeColor(theme.dark);
    } else {
      setThemeColor(theme.light);
    }
  }

  return (
    <ThemeProvider theme={themeColor}>
      <Header />
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
          <ProfileButton as={Link} to="/translator">
            <TranslateIcon />
          </ProfileButton>
        </ProfileButtonContainer>
        <FooterButton onClick={logout}>
          <LogoutIcon />
        </FooterButton>
      </Footer>
    </ThemeProvider>
  );
}
