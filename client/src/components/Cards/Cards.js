import styled from '@emotion/styled';

export const CardContainer = styled.div`
  max-width: 240px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100%;
  text-align: center;
  margin-top: 30px;
  max-height: 250px;
  overflow: auto;
`;

export const Card = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  border: none;
  box-shadow: 0 0 1px 0.1px ${props => props.theme.third};
`;
