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
  animation: slideInUp 1s;
  @keyframes slideInUp {
    from {
      transform: translate3d(0, 100%, 0);
      visibility: visible;
    }

    to {
      transform: translate3d(0, 0, 0);
    }
  }

  .slideInUp {
    animation-name: slideInUp;
  }
`;

export const LearnContainer = styled(CardContainer)`
  justify-content: space-around;
  padding: 5px;
  height: 250px;
  overflow: none;
`;

export const Card = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 10px;
  background-color: white;
  border: 1px solid ${props => props.theme.secondary};
  padding-top: 12px;
  &:hover {
    transform: scale(1.1);
  }
`;

export const ScoreCards = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 240px;
  height: 42px;
  justify-content: space-between;
  align-items: center;
  border: 0.5px solid ${props => props.theme.light.primary};
  background-color: white;
  margin: 10px;
  padding-right: 20px;
`;
