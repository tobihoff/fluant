import React from 'react';
import { ScoreCards } from '../Cards/Cards';
import { FriendsProfile, ProfileScore } from '../Profile/Profile';
import { Description } from '../Text/Text';

export default function ScoreList({ img, name, xp }) {
  return (
    <ScoreCards>
      <FriendsProfile src={img} />
      <Description>{name}</Description>
      <ProfileScore>{xp}</ProfileScore>
    </ScoreCards>
  );
}
