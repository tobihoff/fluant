import React from 'react';
import SignInButton from '../components/SignInButton';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'SignInButton',
  decorators: [withKnobs]
};

export function SignInButtonDark() {
  return <SignInButton name={text('Button', 'Sign in')}></SignInButton>;
}
