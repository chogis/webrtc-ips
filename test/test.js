
import 'regenerator-runtime/runtime';
import {assert} from 'chai';

import {getIPs} from '../src';

it('should get IPs', async () => {
  const ips = await getIPs();
  console.log('ips:', ips);
  assert.ok(ips.length > 0);
});
