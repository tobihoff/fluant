import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './components/themes/theme';
import { ThemeProvider } from 'emotion-theming';
import SignInPage from '../src/pages/SignInPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <SignInPage />
      </ThemeProvider>
    </>
  );
}

export default App;
