import React from 'react';
import styled from '@emotion/styled';

const Svg = styled.svg`
  fill: ${props => props.theme.circle};
`;

export default function RemoveIcon() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="30px"
      height="30px"
      viewBox="0 0 50 50"
      version="1.1"
    >
      <path d="M 25 11 C 17.28125 11 11 17.28125 11 25 C 11 32.71875 17.28125 39 25 39 C 32.71875 39 39 32.71875 39 25 C 39 17.28125 32.71875 11 25 11 Z M 25 11 " />
    </Svg>
  );
}
