import React from 'react';
import styled from '@emotion/styled';

export const Textarea = styled.textarea`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 260px;
  height: 140px;
  border: 3px solid ${props => props.theme.border};
  background-color: 'white';
  border-radius: 10px 0px 0px 0px;
  color: ${props => props.theme.secondary};
  font-size: 15px;
  resize: none;
`;

export const TextareaDark = styled(Textarea)`
  color: ${props => props.theme.primary};
  background-color: ${props => props.theme.secondary};
  border: 'black';
  border-radius: 0px 0px 10px 0px;
`;

export function InputText(props) {
  return <Textarea>{props.text}</Textarea>;
}

export function Result(props) {
  return <TextareaDark>{props.text}</TextareaDark>;
}
