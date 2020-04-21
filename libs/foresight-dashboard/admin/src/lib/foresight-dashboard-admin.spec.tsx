import React from 'react';
import { render } from '@testing-library/react';

import ForesightDashboardAdmin from './foresight-dashboard-admin';

describe(' ForesightDashboardAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ForesightDashboardAdmin />);
    expect(baseElement).toBeTruthy();
  });
});
