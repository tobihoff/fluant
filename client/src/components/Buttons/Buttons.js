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

export const ProfileButton = styled.button`
  width: 90px;
  height: 90px;
  object-fit: cover;
  border: 3px solid ${props => props.theme.border};
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
`;

export const FooterButton = styled.button`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.secondary};
  border: none;
  outline: none;
  text-align: center;
`;

export default Button;
