import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './components/themes/theme';
import ProfilePage from '../src/pages/ProfilePage';
import { ThemeProvider } from 'emotion-theming';
import LandingPage from '../src/pages/LandingPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {/* <LandingPage /> */}
        <ProfilePage />
      </ThemeProvider>
    </>
  );
}

export default App;
