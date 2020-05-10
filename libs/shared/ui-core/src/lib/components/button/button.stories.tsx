import React from 'react';
import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
  id: 'demo-button-id',
  parameters: {
    docs: {
      inlineStories: false
    }
  }
};

export const BasicButton = () => <Button disabled={false} text={'Click me!'} />;

BasicButton.story = {
  name: 'with text and enabled'
};

export const DisabledButton = () => (
  <Button disabled={true} text={'Cannot me!'} />
);

DisabledButton.story = {
  name: 'with text and disabled'
};
