import axios from "axios";
import { BASEURL } from '../constants/urlConstants';

export const APIConnector = axios.create({
  baseURL: BASEURL,
  responseType: "json"
});
