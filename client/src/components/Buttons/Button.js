import React from 'react';
import styled from 'styled-components';

//Basic sytle
export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 65px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  background-color: ${({ active, theme }) => (active ? theme.primary : theme.secondary)};
`;

export default function SignInButton({ active, text }) {
  return <Button type={active}>{text}</Button>;
}
