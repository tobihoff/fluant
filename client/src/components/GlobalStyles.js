import React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalSytles() {
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
          background-color: '#f7f7f7';
          font-size: 20px;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    />
  );
}
