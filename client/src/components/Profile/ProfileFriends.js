import React from 'react';
import { CardContainer } from '../Cards/Cards';
import { AddButton } from '../Buttons/Buttons';
import { AddButtonContainer } from '../Container/Container';
import FriendsCard from '../Cards/FirendsCard';
import useFetch from '../../hooks/useFetch';

export default function ProfileFriends() {
  const users = useFetch('/api/auth');

  if (!users.friends) {
    return null;
  } else {
    return (
      <>
        <CardContainer>
          <AddButtonContainer>
            <AddButton>Add Friends</AddButton>
          </AddButtonContainer>
          {users.friends.map(user => (
            <FriendsCard key={user.name} name={user.name} img={user.img} />
          ))}
        </CardContainer>
      </>
    );
  }
}
