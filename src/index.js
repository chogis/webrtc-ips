
import detector from './detector';

export function getIPs() {
  return detector.getIPs();
}

export function getIPv4() {
  return getIPs()
    .then(ips => {
      const ip = ips.find(ip => !ip.v6);
      return ip ? ip.address : null;
    });
}

export function getIPv6() {
  return getIPs().then(ips => {
    const ip = ips.find(ip => ip.v6);
    return ip ? ip.address : null;
  });
}


