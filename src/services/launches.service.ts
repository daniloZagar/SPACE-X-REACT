import http from "../http-common";
import LaunchesData from "../types/launches.type";
const getAll = () => {
  return http.get<Array<LaunchesData>>("/launches");
};
const get = (limit: any, offset: any) => {
  return http.get<LaunchesData>(`/launches?limit=${limit}&offset=${offset}`);
};
const LaunchesDataService = {
  getAll,
  get,
};
export default LaunchesDataService;
