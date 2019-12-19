import React from 'react';
import { Navigation, UnorderedList, ListElements } from '../components/ProfileNavigation';

export default {
  title: 'Navigation'
};

export const NavigationBar = () => (
  <>
    <Navigation>
      <UnorderedList>
        <ListElements>Learn</ListElements>
        <ListElements>Friends</ListElements>
        <ListElements>Scores</ListElements>
      </UnorderedList>
    </Navigation>
  </>
);
