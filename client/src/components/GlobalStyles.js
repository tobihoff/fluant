import React from 'react';
import { Global, css } from '@emotion/core';
import { useTheme } from 'emotion-theming';

export default function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        *,
        *::after,
        *::before {
          box-sizing: border-box;
        }
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
          background-color: ${theme.color.primary};
          color: ${theme.color.secondary};
          font-size: 20px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
