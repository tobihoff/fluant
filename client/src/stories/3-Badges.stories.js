import React from 'react';
import Badge from '../components/Badges/Badge';
import RemoveIcon from '../icons/RemoveIcon';
import BadgeContainer from '../components/Container/Container';

export default {
  title: 'Badge'
};

export const Vocabulary = () => (
  <BadgeContainer>
    <Badge>
      Hello <RemoveIcon />
    </Badge>
    <Badge>
      fireman <RemoveIcon />
    </Badge>
    <Badge>
      hard <RemoveIcon />
    </Badge>
    <Badge>
      game <RemoveIcon />
    </Badge>
    <Badge>
      love <RemoveIcon />
    </Badge>
    <Badge>
      you <RemoveIcon />
    </Badge>
  </BadgeContainer>
);
