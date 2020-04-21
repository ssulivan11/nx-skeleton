import React from 'react';
import { render } from '@testing-library/react';

import ForesightDashboardConditionMonitoring from './foresight-dashboard-condition-monitoring';

describe(' ForesightDashboardConditionMonitoring', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForesightDashboardConditionMonitoring />);
    expect(baseElement).toBeTruthy();
  });
});
