import React from 'react';
import { ScoreContainer } from '../Container/Container';
import { ScoreCards } from '../Cards/Cards';
import { FriendsProfile, ProfileScore } from '../Profile/Profile';
import { Description } from '../Text/Text';

export default function ProfileFriends() {
  return (
    <ScoreContainer>
      <ScoreCards>
        <FriendsProfile />
        <Description>BrüllMaus</Description>
        <ProfileScore>90000XP</ProfileScore>
      </ScoreCards>
    </ScoreContainer>
  );
}
