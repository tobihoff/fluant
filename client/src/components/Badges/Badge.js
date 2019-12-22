import styled from '@emotion/styled';

const Badge = styled.div`
  height: 20px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
  border: 1px solid ${props => props.theme.third};
  max-width: fit-content;
  margin: 10px;
  font-size: 12px;
  text-align: center;
  padding: 3px;
`;

export default Badge;
