import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

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

export const DeleteButton = styled.button`
  width: 20px;
  height: auto;
  border: none;
  text-align: none;
  background-color: ${({ theme }) => theme.light.secondary};
`;

export const AddButton = styled(Button)`
  background-color: ${({ theme }) => theme.light.primary};
  border: 2px solid ${({ theme }) => theme.third};
  color: ${({ theme }) => theme.light.secondary};
  min-width: 120px;
  font-weight: bold;
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

export const ToSignInButton = styled(Link)`
  text-align: center;
  width: auto;
  height: auto;
  background: ${props => props.theme.light.secondary};
  color: ${props => props.theme.light.primary};
  font-weight: bold;
  font-size: 12px;
  text-decoration-line: none;
`;

export const LoginButton = styled.button`
  display: inline-block;
  text-align: center;
  min-width: 65px;
  height: 25px;
  background-color: ${({ theme }) => theme.light.third};
  color: ${({ theme }) => theme.light.border};
  border: 1px solid ${({ theme }) => theme.light.border};
  margin-top: 10px;
  font-weight: bolder;
  letter-spacing: 0.5px;
  cursor: pointer;
  outline: none;
  animation: fadeInUp 1s;
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInUp {
    animation-name: fadeInUp;
  }
  :hover {
    background-color: ${({ theme }) => theme.light.primary};
    color: black;
    border: 1px solid black;
  }
`;
export default Button;
