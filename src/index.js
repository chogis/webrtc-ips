
import detector from './detector';

export function getIPs(urls) {
  return detector.getIPs(urls);
}

export function getIPv4() {
  return getIPs()
    .then(ips => {
      const ip = ips.find(ip => !ip.v6);
      return ip ? ip.address : '';
    });
}

export function getIPv6() {
  return getIPs().then(ips => {
    const ip = ips.find(ip => ip.v6);
    return ip ? ip.address : '';
  });
}
