import styled from '@emotion/styled';

const FooterContainer = styled.footer`
  left: 0;
  right: 0;
  height: 42px;
  width: 100%;
  margin: 0 auto;
  background: ${props => props.theme.secondary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-top: 3px solid black;
  padding-left: 10px;
  padding-right: 10px;
  bottom: 0;
  position: absolute;
`;

export default FooterContainer;
