
import 'regenerator-runtime/runtime';
import {assert} from 'chai';

import {getIPs} from '../src';

it('should get IPs', async () => {
  const ips = await getIPs();
  assert.ok(ips.length > 0);
});
