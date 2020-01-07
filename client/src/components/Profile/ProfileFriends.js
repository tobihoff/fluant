import React from 'react';
import { CardContainer } from '../Cards/Cards';
import ProfileList, { ProfileImageContainer, UserProfileStatus } from '../ProfileList';
import { FriendsProfile, ProfileInfo } from '../Profile';
import { AddButton } from '../Buttons/Buttons';
import { ButtonContainer } from '../Buttons/ButtonContainer';

export default function ProfileFriends() {
  return (
    <CardContainer>
      <ButtonContainer>
        <AddButton>Add Friends</AddButton>
      </ButtonContainer>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1506919258185-6078bba55d2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ProfileImageContainer>
        <ProfileInfo>Franz</ProfileInfo>
      </ProfileList>
    </CardContainer>
  );
}
