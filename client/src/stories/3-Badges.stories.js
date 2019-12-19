import React from 'react';
import Badge from '../components/Badge';
import RemoveIcon from '../icons/RemoveIcon';
import ListBadges from '../components/ListBadges';

export default {
  title: 'Badge'
};

export const Vocabulary = () => (
  <ListBadges>
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
  </ListBadges>
);
