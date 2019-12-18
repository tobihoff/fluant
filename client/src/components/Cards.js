import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 240px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;
  height: 100%;
  justify-content: center;
`;

export const Card = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 10px;
  margin-top: 10px;
  background-color: white;
  border: none;
`;
