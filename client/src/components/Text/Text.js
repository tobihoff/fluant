import styled from '@emotion/styled';

const Hello = styled.h1`
  color: ${props => props.theme.primary};
`;

export const Text = styled.p`
  color: ${props => props.theme.primary};
  font-size: 10px;
`;

export default Hello;
