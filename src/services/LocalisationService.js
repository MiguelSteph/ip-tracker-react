import axios from "axios";
import validatorService from "../services/IpAndDomainValidator";

export function geoLocalisation(ipOrDomain) {
  const queryParams = { apiKey: process.env.REACT_APP_API_KEY };
  if (validatorService.isValidateIpAddr(ipOrDomain)) {
    queryParams["ipAddress"] = ipOrDomain;
  } else {
    queryParams["domain"] = ipOrDomain;
  }
  return axios.get(process.env.REACT_APP_API_URL, {
    params: queryParams,
  });
}
