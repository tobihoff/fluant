import styled from '@emotion/styled';

export const Navigation = styled.nav`
  max-width: 240px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const UnorderedList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  margin: 0px 0px 5px 0px;
`;

export const ListElements = styled.li`
  display: inline-block;
  text-align: center;
  border: 2px solid ${props => props.border};
  margin: 1px;
  padding: 0px 2px;
  cursor: pointer;
  min-width: 60px;
`;
