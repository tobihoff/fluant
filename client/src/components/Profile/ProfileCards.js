import React from 'react';
import HundredIcon from '../../icons/HundredIcon';
import QueryIcon from '../../icons/QueryIcon';
import HeadphoneIcon from '../../icons/HeadphoneIcon';
import StarIcon from '../../icons/StarIcon';
import FriendsIcon from '../../icons/FriendsIcon';
import GameIcon from '../../icons/GameIcon';
import { Card, CardContainer } from '../Cards/Cards';

export default function ProfileCards() {
  return (
    <CardContainer>
      <Card>
        <GameIcon />
      </Card>
      <Card>
        <HundredIcon />
      </Card>
      <Card>
        <FriendsIcon />
      </Card>
      <Card>
        <StarIcon />
      </Card>
      <Card>
        <QueryIcon />
      </Card>
      <Card>
        <HeadphoneIcon />
      </Card>
    </CardContainer>
  );
}
