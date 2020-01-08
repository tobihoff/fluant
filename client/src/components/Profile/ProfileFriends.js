import React from 'react';
import { CardContainer } from '../Cards/Cards';
import ProfileList, { ProfileImageContainer, UserProfileStatus } from '../Profile/ProfileList';
import { FriendsProfile, ProfileInfo } from '../Profile/Profile';
import { AddButton } from '../Buttons/Buttons';
import { AddButtonContainer } from '../Container/Container';

export default function ProfileFriends() {
  return (
    <CardContainer>
      <AddButtonContainer>
        <AddButton>Add Friends</AddButton>
      </AddButtonContainer>
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
