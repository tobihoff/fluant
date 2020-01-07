import React from 'react';
import styled from '@emotion/styled';
import RemoveIcon from '../../icons/RemoveIcon';
import Badge from '../Badges/Badge';

const ModalContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: absolute;
  width: 175px;
  height: 450px;
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
  flex-wrap: wrap;
  min-height: 90vh;
`;

export default function DictonaryList({ onClick }) {
  return (
    <>
      <ModalContainer>
        <RemoveContainer>
          <button onClick={() => onClick()}>
            <RemoveIcon />
          </button>
        </RemoveContainer>
        <BadgeContainer>
          <Badge>Hallo</Badge>
        </BadgeContainer>
      </ModalContainer>
    </>
  );
}
