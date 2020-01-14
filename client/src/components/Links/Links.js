import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${props => props.theme.light.border};
`;

export const FooterLink = styled(Link)`
  all: unset;
`;

export default NavLink;
