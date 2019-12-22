import React from 'react';
import { CardContainer } from '../Cards/Cards';
import ProfileList from '../ProfileList';
import { FriendsProfile, ProfileInfo, ProfileScore } from '../Profile';

export default function ProfileFriends() {
  return (
    <CardContainer>
      <ProfileList>
        <FriendsProfile />
        <ProfileInfo>BrüllMaus</ProfileInfo>
        <ProfileScore>90000XP</ProfileScore>
      </ProfileList>
    </CardContainer>
  );
}
