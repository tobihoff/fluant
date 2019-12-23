import React from 'react';
import GlobalStyles from './GlobalStyles';
import theme from './components/themes/theme';
import { ThemeProvider } from 'emotion-theming';
import DictonaryPage from './pages/DictonaryPage';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <DictonaryPage />
      </ThemeProvider>
    </>
  );
}

export default App;
