import React from 'react';
import styled from '@emotion/styled';
import RemoveIcon from '../../icons/RemoveIcon';
import Badge from '../Badges/Badge';
import useFetch from '../../hooks/useFetch';
import { useUser } from '../../context/user';
import DeleteIcon from '../../icons/DeleteIcon';
import { DeleteButton } from '../../components/Buttons/Buttons';

const ModalContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 190px;
  max-height: 450px;
  right: 30px;
  top: 10px;
  background-color: ${props => props.theme.primary};
  border: 2px solid ${props => props.theme.secondary};
  overflow: auto;
  animation: zoomInRight 0.5s;
  @keyframes zoomInRight {
    from {
      opacity: 0;
      transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
      animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    }

    60% {
      opacity: 1;
      transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    }
  }

  .zoomInRight {
    animation-name: zoomInRight;
  }
`;

const RemoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 10vh;
  width: 100vh;
`;

const BadgeContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  align-items: center;
  margin: 0 auto;
`;

export default function DictonaryList({ onClick }) {
  const [data, setData] = React.useState(null);
  const user = useUser();

  const id = user.id;

  const auth = localStorage.getItem('token');

  // async function getData() {
  //   const dictonary = useFetch(`/api/dictonary/${id}`);
  //   setData(dictonary);
  // }
  async function getData() {
    const res = await fetch(`/api/dictonary/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': auth
      }
    });
    const dictonary = await res.json();
    setData(dictonary);
  }

  React.useEffect(() => {
    getData();
  }, []);

  async function handleDelete(vocabularyId) {
    return fetch(`/api/dictonary/${vocabularyId}`, {
      method: 'DELETE',
      headers: {
        'X-Auth-Token': auth
      }
    });
  }

  return (
    <>
      {data && (
        <ModalContainer>
          <RemoveContainer>
            <button onClick={onClick}>
              <RemoveIcon />
            </button>
          </RemoveContainer>
          <BadgeContainer>
            {data.map(word => (
              <Badge key={word._id}>
                {word.vocabulary}
                <DeleteButton
                  id={word._id}
                  onClick={() => {
                    handleDelete(word._id);
                    getData();
                  }}
                >
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
