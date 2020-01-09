import React from 'react';
import ProfileList, { ProfileImageContainer, UserProfileStatus } from '../Profile/ProfileList';
import { FriendsProfile, ProfileInfo } from '../Profile/Profile';

export default function FriendsCard({ img, name, status }) {
  return (
    <ProfileList>
      <UserProfileStatus status={status} />
      <ProfileImageContainer>
        <FriendsProfile src={img} />
      </ProfileImageContainer>
      <ProfileInfo>{name}</ProfileInfo>
    </ProfileList>
  );
}
