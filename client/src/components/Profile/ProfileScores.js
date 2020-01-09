import React from 'react';
import { ScoreContainer } from '../Container/Container';
import ScoreCards from '../Cards/ScoreCards';
import useFetch from '../../hooks/useFetch';

export default function Score() {
  const users = useFetch('http://localhost:7100/api/auth');

  if (!users.friends) {
    return null;
  } else {
    return (
      <>
        <ScoreContainer>
          {users.friends.map(user => (
            <ScoreCards key={user.index} name={user.name} img={user.img} xp={user.xp} />
          ))}
        </ScoreContainer>
      </>
    );
  }
}
