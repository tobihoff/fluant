import styled from '@emotion/styled';

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.primary};
  border: 1px solid ${props => props.theme.border};
  max-width: fit-content;
  margin: 4px;
  padding: 5px;
`;

export default Badge;
