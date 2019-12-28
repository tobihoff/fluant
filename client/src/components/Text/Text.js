import styled from '@emotion/styled';

const Hello = styled.h1`
  color: ${props => props.theme.light.primary};
  margin-top: 30px;
`;

export const Text = styled.p`
  color: ${props => props.theme.light.primary};
  font-size: 12px;
  margin-bottom: 30px;
`;

export const Dictonary = styled.h3`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 240px;
  height: 20vh;
`;

export default Hello;