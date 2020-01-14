import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './components/themes/theme';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPage from '../src/pages/LoginPage';
import SignInPage from '../src/pages/SignInPage';
import ProfilePage from '../src/pages/ProfilePage';
import LandingPage from '../src/pages/LandingPage';
import TranslatorPage from '../src/pages/TranslatorPage';
import { UserProvider } from '../src/context/user';

const App = () => {
  return (
    <Router>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Switch>
            <Route exact path="/">
              <LandingPage />
            </Route>
            <Route exact path="/translator">
              <TranslatorPage />
            </Route>
            <Route exact path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/register">
              <SignInPage />
            </Route>
            <Route exact path="/profile">
              <ProfilePage />
            </Route>
          </Switch>
        </ThemeProvider>
      </UserProvider>
    </Router>
  );
};

export default App;
