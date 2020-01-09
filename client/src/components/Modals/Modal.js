import React from 'react';
import styled from '@emotion/styled';
import RemoveIcon from '../../icons/RemoveIcon';
import Badge from '../Badges/Badge';
import useFetch from '../../hooks/useFetch';

const ModalContainer = styled.div`
  z-index: 8000;
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 175px;
  height: fit-content;
  max-height: 250px;
  right: 38px;
  top: 10px;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.secondary};
  overflow: auto;
`;

const RemoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 10vh;
  width: 100vh;
`;

const BadgeContainer = styled(RemoveContainer)`
  flex-direction: column;
  min-height: 90vh;
  align-items: center;
`;

export default function DictonaryList({ onClick }) {
  const user = useFetch('http://localhost:7100/api/auth');

  return (
    <>
      {user.vocabulary && (
        <ModalContainer>
          <RemoveContainer>
            <button onClick={onClick}>
              <RemoveIcon />
            </button>
          </RemoveContainer>
          <BadgeContainer>
            {user.vocabulary.map(word => (
              <Badge key={word.index}>{word}</Badge>
            ))}
          </BadgeContainer>
        </ModalContainer>
      )}
    </>
  );
}
