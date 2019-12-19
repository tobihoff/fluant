import React from 'react';
import { Footer, Profile, Theme, Study } from '../components/Footer';
import StudentIcon from '../icons/StudentIcon';
import SunIcon from '../icons/SunIcon';

export default {
  title: 'Footer'
};

export const FooterNavigation = () => (
  <>
    <Footer>
      <Theme>
        <SunIcon />
      </Theme>
      <Profile
        src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
        alt="Maria"
      />
      <Study>
        <StudentIcon />
      </Study>
    </Footer>
  </>
);
