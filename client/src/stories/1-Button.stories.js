import React from 'react';
import Button from '../components/Buttons/Buttons';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'SignInButton',
  decorators: [withKnobs]
};

export function SignInButtonDark() {
  return <Button>{text('Button', 'Sign in')}</Button>;
}
