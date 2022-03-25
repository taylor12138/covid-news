import MYRequest from "./src/request";
import { BASE_URL } from "./src/config";
const myRequest = new MYRequest({
  baseURL: BASE_URL,
});
export default myRequest;
const getVaccine = myRequest.get({
  url: "/vaccine",
});
const getDefend = myRequest.get({
  url: "/defend",
});
const getRumour = myRequest.get({
  url: "/rumour",
});
const getPeople = myRequest.get({
  url: "/people",
});
const getFront = myRequest.get({
  url: "/front",
});
export { getVaccine, getDefend, getRumour, getPeople, getFront };
