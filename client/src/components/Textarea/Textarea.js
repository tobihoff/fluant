import styled from '@emotion/styled';

const Textarea = styled.textarea`
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
  animation: fadeInLeft 1s;
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInLeft {
    animation-name: fadeInLeft;
  }
`;

export const TextareaDark = styled(Textarea)`
  color: ${props => props.theme.light.primary};
  background-color: ${props => props.theme.light.secondary};
  border: 'black';
  border-radius: 0px 0px 10px 0px;
  margin-top: 10px;
`;

export default Textarea;
