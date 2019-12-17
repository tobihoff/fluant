import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button'
};

export const text = () => <Button onClick={action('clicked')}>Hello world</Button>;
