import React from 'react';
import PropTypes from 'prop-types';
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

ScoreList.propTypes = {
  img: PropTypes.object,
  name: PropTypes.string,
  xp: PropTypes.number
};
