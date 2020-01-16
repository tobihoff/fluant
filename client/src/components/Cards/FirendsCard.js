import React from 'react';
import PropTypes from 'prop-types';
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

FriendsCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool
};
