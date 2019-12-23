import styled from '@emotion/styled';

//Basic sytle
const Button = styled.button`
  display: inline-block;
  text-align: center;
  min-width: 65px;
  height: 25px;
  border: 1px solid ${({ theme }) => theme.light.border};
  color: ${({ theme }) => theme.light.primary};
  background-color: ${({ theme }) => theme.light.secondary};
  outline: none;
`;

export const ProfileButton = styled.button`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border: 3px solid ${props => props.theme.light.border};
  border-radius: 50%;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  position: absolute;
  background-color: white;
`;

export const FooterButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${props => props.theme.secondary};
  border: none;
  outline: none;
  text-align: center;
`;

export const BookmarkButton = styled.button`
  width: 30px;
  height: 30px;
  background: ${props => props.theme.light.primary};
  border: none;
  outline: none;
`;

export default Button;
