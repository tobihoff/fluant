import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './components/themes/theme';
import { ThemeProvider } from 'emotion-theming';
import ProfilePage from '../src/pages/ProfilePage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ProfilePage />
      </ThemeProvider>
    </>
  );
}

export default App;
