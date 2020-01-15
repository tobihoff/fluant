import styled from '@emotion/styled';

const Badge = styled.div`
  display: flex;
  justify-content: space-around;
  height: 20px;
  background-color: ${props => props.theme.light.secondary};
  color: ${props => props.theme.light.primary};
  border: 1px solid ${props => props.theme.light.third};
  max-width: fit-content;
  margin: 10px;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
`;

export default Badge;
