import styled from '@emotion/styled';

const Footer = styled.footer`
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

export default Footer;
