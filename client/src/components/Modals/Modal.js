import React from 'react';
import styled from '@emotion/styled';
import RemoveIcon from '../../icons/RemoveIcon';
import Badge from '../Badges/Badge';
import useFetch from '../../hooks/useFetch';
import { UserContext } from '../../context/user';
import DeleteIcon from '../../icons/DeleteIcon';
import { DeleteButton } from '../../components/Buttons/Buttons';

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
  const [getUser, setGetUser] = React.useContext(UserContext);

  let id = getUser.id;
  console.log(id);

  const user = useFetch(`http://localhost:7100/api/dictonary`);

  async function handleDelete() {
    const auth = localStorage.getItem('token');
    return await fetch(`http://localhost:7100/api/dictonary/:${id}`, {
      method: 'DELETE',
      headers: {
        'X-Auth-Token': auth
      }
    });
  }

  return (
    <>
      {user && (
        <ModalContainer>
          <RemoveContainer>
            <button onClick={onClick}>
              <RemoveIcon />
            </button>
          </RemoveContainer>
          <BadgeContainer>
            {user.map(word => (
              <Badge key={word.index}>
                {word.vocabulary}
                <DeleteButton onClick={handleDelete}>
                  <DeleteIcon />
                </DeleteButton>
              </Badge>
            ))}
          </BadgeContainer>
        </ModalContainer>
      )}
    </>
  );
}
