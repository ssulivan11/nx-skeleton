import React from 'react';
import { render } from '@testing-library/react';

import ForesightDashboardAddWidgets from './foresight-dashboard-add-widgets';

describe(' ForesightDashboardAddWidgets', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForesightDashboardAddWidgets />);
    expect(baseElement).toBeTruthy();
  });
});
