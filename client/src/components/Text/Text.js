import styled from '@emotion/styled';
import { animated } from 'react-spring';

const Hello = styled(animated.h1)`
  color: ${props => props.theme.light.primary};
  margin-top: 30px;
`;

export const Text = styled(animated.p)`
  color: ${props => props.theme.light.primary};
  font-size: 12px;
  margin-bottom: 30px;
`;

export const Description = styled.p`
  color: ${props => props.theme.light.secondary};
  margin-bottom: none;
  font-size: 12px;
`;

export const Dictonary = styled.h3`
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 240px;
  height: 20vh;
`;

export const TextBox = styled.div`
  display: flex;
  align-self: flex-start;
  padding-left: 40px;
  margin-bottom: -10px;
`;

export const TranslateText = styled(animated.p)`
  font-size: 12px;
`;

export const UploadText = styled.p`
  font-size: 12px;
  color: ${props => props.theme.light.border};
  text-align: center;
  margin-top: -10px;
`;

export default Hello;
