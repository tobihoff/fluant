import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './components/themes/theme';
import { ThemeProvider } from 'emotion-theming';
import LoginPage from '../src/pages/LoginPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <LoginPage />
      </ThemeProvider>
    </>
  );
}

export default App;
