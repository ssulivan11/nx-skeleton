import React from 'react';
import { render } from '@testing-library/react';

import ForesightDashboardHelp from './foresight-dashboard-help';

describe(' ForesightDashboardHelp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForesightDashboardHelp />);
    expect(baseElement).toBeTruthy();
  });
});
