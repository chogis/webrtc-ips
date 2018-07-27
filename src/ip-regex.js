/**
 * Npm's ip-regex does not work in Firefox (see: https://github.com/sindresorhus/ip-regex/issues/24).
 * So currently use more simple regex.
 */

export const IP_REGEX = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/;
export const IPV6_REGEX = /^[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7}$/;
