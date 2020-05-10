import React from 'react';
import { Button } from '@nx-skeleton/shared/ui-core';
import { Logo } from '@nx-skeleton/shared/assets';
import { canUseDOM } from '@nx-skeleton/shared/utils';

import './app.scss';

const ICanUseTheDom = () => canUseDOM;

export const App = () => {
  return (
    <div className="app">
      <div className="header">
        <div className="logo">
          <Logo width="75" height="75" />
        </div>
        <h1>Welcome to NX-Skeleton - Dashobard App</h1>
      </div>
      <div className="contianer">
        <h2>Shared UI-Core</h2>
        <p>Button component example:</p>
        <p>
          <Button text="Click me!" />
        </p>

        <h2>Shared Utils</h2>
        <p>CanUseDom example:</p>
        <strong>
          {ICanUseTheDom ? 'I can use the DOM' : 'I cannot use the DOM'}
        </strong>
      </div>
    </div>
  );
};

export default App;
