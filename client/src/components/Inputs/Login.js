import styled from '@emotion/styled';

const LoginInput = styled.input`
  display: grid;
  grid-template-columns: 1fr 3fr;
  text-align: center;
  font-size: 12px;
  color: ${props => props.theme.light.secondary};
  border: 1px solid ${props => props.theme.light.third};
  /* background-image: url('../icons/profile.svg') no-repeat; */
  outline: none;
  width: 200px;
  height: 30px;
  margin: 5px;
`;

export default LoginInput;
