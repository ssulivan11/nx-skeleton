import React from 'react';
import { render } from '@testing-library/react';

import ForesightDashboardAgreements from './foresight-dashboard-agreements';

describe(' ForesightDashboardAgreements', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForesightDashboardAgreements />);
    expect(baseElement).toBeTruthy();
  });
});
