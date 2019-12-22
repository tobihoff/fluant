import React from 'react';
import { CardContainer } from '../Cards/Cards';
import ProfileList from '../ProfileList';
import { FriendsProfile, ProfileInfo, ProfileScore } from '../Profile';
import Button from '../Buttons/Buttons';
import { ButtonContainer } from '../Buttons/ButtonContainer';

export default function ProfileFriends() {
  return (
    <CardContainer>
      <ButtonContainer>
        <Button>Add Friends</Button>
      </ButtonContainer>
      <ProfileList>
        <FriendsProfile />
        <ProfileInfo>Franzi</ProfileInfo>
        <ProfileScore>300XP</ProfileScore>
      </ProfileList>
    </CardContainer>
  );
}
