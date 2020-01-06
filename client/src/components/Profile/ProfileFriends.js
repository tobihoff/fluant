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
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
        </ProfileImageContainer>
        <ProfileInfo>Lisa</ProfileInfo>
      </ProfileList>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1558542086-b116634c8dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ProfileImageContainer>
        <ProfileInfo>Mia</ProfileInfo>
      </ProfileList>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1520853504280-249b72dc947c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ProfileImageContainer>
        <ProfileInfo>Alex</ProfileInfo>
      </ProfileList>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1543023177-2ef21c4a514e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ProfileImageContainer>
        <ProfileInfo>Laura</ProfileInfo>
      </ProfileList>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80" />
        </ProfileImageContainer>
        <ProfileInfo>Tobias</ProfileInfo>
      </ProfileList>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1504703395950-b89145a5425b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ProfileImageContainer>
        <ProfileInfo>Clara</ProfileInfo>
      </ProfileList>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1553267751-1c148a7280a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ProfileImageContainer>
        <ProfileInfo>Castro</ProfileInfo>
      </ProfileList>
      <ProfileList>
        <UserProfileStatus />
        <ProfileImageContainer>
          <FriendsProfile src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </ProfileImageContainer>
        <ProfileInfo>Djana</ProfileInfo>
      </ProfileList>
    </CardContainer>
  );
}
