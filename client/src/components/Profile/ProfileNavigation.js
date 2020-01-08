import styled from '@emotion/styled';

export const Navigation = styled.nav`
  max-width: 240px;
  margin: 0 auto;
  width: 100%;
`;

export const UnorderedList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 0 auto;
  padding: 0;
  list-style: none;
  font-size: 12px;
  width: 100%;
  color: ${props => (props.isGreen ? props => props.theme.third : props => props.theme.secondary)};
`;

export const ListElements = styled.li`
  text-align: center;
  border: 2px solid ${props => props.theme.border};
  cursor: pointer;
  min-width: 78px;
`;

export const ListElementFriends = styled(ListElements)`
  border-left: none;
  border-right: none;
  margin-left: -4px;
  margin-right: -4px;
`;
