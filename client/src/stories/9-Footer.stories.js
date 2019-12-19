import React from 'react';
import { Footer, Profile, Button } from '../components/Footer';
import StudentIcon from '../icons/StudentIcon';
import SunIcon from '../icons/SunIcon';
import ProfileIcon from '../icons/ProfileIcon';

export default {
  title: 'Footer'
};

export const FooterNavigation = () => (
  <>
    <Footer>
      <Button>
        <SunIcon />
      </Button>
      <Profile>
        <ProfileIcon />
      </Profile>
      <Button>
        <StudentIcon />
      </Button>
    </Footer>
  </>
);
