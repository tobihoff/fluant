import styled from '@emotion/styled';

const Badge = styled.div`
  height: 20px;
  background-color: ${props => props.theme.light.primary};
  color: ${props => props.theme.light.secondary};
  border: 1px solid ${props => props.theme.light.third};
  max-width: fit-content;
  margin: 10px;
  font-size: 12px;
  text-align: center;
  padding: 3px;
`;

export default Badge;
