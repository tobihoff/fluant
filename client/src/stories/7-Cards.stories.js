import React from 'react';
import { CardContainer, Card } from '../components/Cards/Cards';
import HundredIcon from '../icons/HundredIcon';
import QueryIcon from '../icons/QueryIcon';
import HeadphoneIcon from '../icons/HeadphoneIcon';
import StarIcon from '../icons/StarIcon';
import FriendsIcon from '../icons/FriendsIcon';
import GameIcon from '../icons/GameIcon';

export default {
  title: 'Card'
};

export const CardNavigation = () => (
  <CardContainer>
    <Card>
      <HeadphoneIcon />
    </Card>
    <Card>
      <HundredIcon />
    </Card>
    <Card>
      <StarIcon />
    </Card>
    <Card>
      <FriendsIcon />
    </Card>
    <Card>
      <QueryIcon />
    </Card>
    <Card>
      <GameIcon />
    </Card>
  </CardContainer>
);
