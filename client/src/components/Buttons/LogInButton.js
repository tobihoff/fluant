import React from 'react';
import styled from '@emotion/styled';

const LoginButton = styled.button`
  display: inline-block;
  text-align: center;
  min-width: 65px;
  height: 25px;
  background-color: ${({ theme }) => theme.light.third};
  color: ${({ theme }) => theme.light.border};
  border: 1px solid ${({ theme }) => theme.light.border};
  margin-top: 10px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  cursor: pointer;
  outline: none;
  :hover {
    background-color: ${({ theme }) => theme.light.primary};
    color: black;
    border: 1px solid black;
  }
`;

export const LogInButton = ({ children, ...props }) => (
  <LoginButton {...props}>{children}</LoginButton>
);
