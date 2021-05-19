import isValidDomain from "is-valid-domain";

const IP_ADDR_REGEX = new RegExp(
  "^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"
);

function validateIpAddr(addr) {
  return addr && IP_ADDR_REGEX.test(addr);
}

function validateDomain(domain) {
  return domain && isValidDomain(domain);
}

export default {
  isValidateIpAddr: validateIpAddr,
  isValidateDomain: validateDomain,
};
