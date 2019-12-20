import React from 'react';
import { ProfileButton, FooterButton } from '../components/Buttons/Buttons';
import Footer from '../components/Footer/Footer';
import StudentIcon from '../icons/StudentIcon';
import SunIcon from '../icons/SunIcon';
import ProfileIcon from '../icons/ProfileIcon';

export default {
  title: 'Footer'
};

export const FooterNavigation = () => (
  <>
    <Footer>
      <FooterButton>
        <SunIcon />
      </FooterButton>
      <ProfileButton>
        <ProfileIcon />
      </ProfileButton>
      <FooterButton>
        <StudentIcon />
      </FooterButton>
    </Footer>
  </>
);
