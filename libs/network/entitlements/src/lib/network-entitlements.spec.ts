import { networkEntitlements } from './network-entitlements';

describe('networkEntitlements', () => {
  it('should work', () => {
    expect(networkEntitlements()).toEqual('network-entitlements');
  });
});
