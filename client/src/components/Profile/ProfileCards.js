import React from 'react';
import HundredIcon from '../../icons/HundredIcon';
import QueryIcon from '../../icons/QueryIcon';
import HeadphoneIcon from '../../icons/HeadphoneIcon';
import StarIcon from '../../icons/StarIcon';
import FriendsIcon from '../../icons/FriendsIcon';
import GameIcon from '../../icons/GameIcon';
import { Card, LearnContainer } from '../Cards/Cards';
import { Description } from '../Text/Text';

export default function ProfileCards() {
  return (
    <LearnContainer>
      <Card>
        <GameIcon />
        <Description>Game</Description>
      </Card>
      <Card>
        <HundredIcon />
        <Description>Top 100</Description>
      </Card>
      <Card>
        <FriendsIcon />
        <Description>Friends</Description>
      </Card>
      <Card>
        <StarIcon />
        <Description>Stars</Description>
      </Card>
      <Card>
        <QueryIcon />
        <Description>Random</Description>
      </Card>
      <Card>
        <HeadphoneIcon />
        <Description>Listen</Description>
      </Card>
    </LearnContainer>
  );
}
