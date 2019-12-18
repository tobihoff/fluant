import React from 'react';
import ProfileList from '../components/ProfileList';
import FriendsProfile from '../components/Profile';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Friendslist',
  decorators: [withKnobs]
};

export const Firends = () => (
  <>
    <ProfileList>
      <FriendsProfile
        src="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt="Maria"
      />
      {text('Name', 'Maria')}
    </ProfileList>
    <ProfileList>
      <FriendsProfile
        src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
        alt="Josef"
      />
      {text('Nachname', 'Josef')}
    </ProfileList>
  </>
);
