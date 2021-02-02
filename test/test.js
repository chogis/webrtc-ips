
import 'regenerator-runtime/runtime';
import {assert} from 'chai';

import {getIPs} from '../src';

it('should get IPs', async () => {
  const ips = await getIPs();
  console.log('ips:', ips);
  assert.isAbove(ips.length, 0);
});
