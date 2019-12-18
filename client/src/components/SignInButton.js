import React from 'react';
import styled from '@emotion/styled';

//Basic sytle
const Button = styled.button`
  display: inline-block;
  text-align: center;
  min-width: 65px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.secondary};
`;

export default Button;
