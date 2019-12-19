import styled from '@emotion/styled';

export const Footer = styled.footer`
  left: 0;
  right: 0;
  height: 55px;
  width: 100%;
  margin: 0 auto;
  top: 0;
  position: fixed;
  background: ${props => props.theme.secondary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid black;
  padding-left: 10px;
  padding-right: 10px;
`;

export const Profile = styled.button`
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

export const Button = styled.button`
  width: 50px;
  height: 50px;
  background: ${props => props.theme.secondary};
  border: none;
  outline: none;
  text-align: center;
`;
